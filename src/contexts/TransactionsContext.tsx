import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionsProps[];
  fetchTransations: (query: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransations(query?: string) {
    const response = await api.get("transactions", {
      params: {
        q: query,
      }
    }
  );

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransations();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransations,
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}
