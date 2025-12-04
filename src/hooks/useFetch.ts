import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../api/api";
import type { FetchState } from "../types";




export const useFetch =  (url: string, key?: string) => {
    const [data, setData] = useState<FetchState>({
        data: {
            results: null
        },
        loading: false,
        error: null
    });
    const isMounted = useRef<boolean>(false);
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            const fetchData = async (): Promise<void> => {
                setData((prev) => ({ ...prev, loading: true }));
                try {
                    const res = await axios.get(`${key ? `${BASE_URL}/${url}/?name=${key}`: `${BASE_URL}/${url}`}`);
                    const data = await res.data;
                    setData((prev) => ({
                        ...prev,
                        data: data,
                        loading: false,
                    }));
                } catch (error: unknown) {
                    console.log(error, 'error from useFetch');
                    if(error instanceof Error) {
                        setData({
                            data: {
                                results: null
                            },
                            loading: false,
                            error: error?.message,
                        });
                    }
                }
            };
            fetchData();
        }
    }, [url, data, key]);
    return { ...data }
};