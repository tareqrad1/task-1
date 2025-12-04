import { createContext, useState } from "react";
import type { IData } from "../types";

interface IDataContextShape {
    state: IData[];
    loading: boolean;
    error: string | null;
    setState?: React.Dispatch<React.SetStateAction<IData[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const DataContext = createContext<IDataContextShape | undefined>(undefined);

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<IData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <DataContext.Provider value={{ state, loading, error, setState, setLoading, setError }}>
            {children}
        </DataContext.Provider>
    );
}

export default SearchContextProvider;