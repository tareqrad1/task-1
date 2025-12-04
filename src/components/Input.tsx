import { useContext, useEffect, useState, type ChangeEvent } from 'react'
import { useFetch } from '../hooks/useFetch';
import { DataContext } from '../context/DataContextProvider';
import type { IData } from '../types';
const Input = () => {
    const [value, setValue] = useState<IData[]>([]);
    const { data } = useFetch(`/character`);

    //search function here !!
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const filter = data.results?.filter((ele) => ele.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setValue(filter);
    }
    const { setState } = useContext(DataContext);
    useEffect(() => {
        setState(value);
    },[value, setState]);
    return (
        <>
            <input 
                type='text' 
                placeholder='Search characters by name...'
                className="p-3 w-full max-w-2xl border border-green-600 rounded-xl bg-gray-800 text-white placeholder-gray-500 shadow-xl 
                    focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
                onChange={handleChange}
            />
        </>
    );
}

export default Input;