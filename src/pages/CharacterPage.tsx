import React, { useContext } from 'react'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/Loading';
import Card from '../components/Card';
import Input from '../components/Input';
import { DataContext } from '../context/DataContextProvider';
import { useNavigate } from 'react-router-dom';
import type { IData } from '../types';

const CharacterPage = (): React.JSX.Element => {
    const { data, loading, error } = useFetch('/character');
    const { state } = useContext(DataContext);
    const Navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-green-400">
                Rick & Morty Multiverse Explorer
            </h1>

            <div className="flex justify-center mb-10">
                <Input />        
            </div>
            <div className='fixed left-1/2 transform -translate-x-1/2 bg-[#999] z-20 cursor-pointer'>
                {state.map((ele: IData) => (
                    <div key={ele.id} className='flex items-center p-2 space-y-2'
                    onClick={() => Navigate(`details/${ele.id}`)}
                    >
                        <div>
                            <img src={ele.image} alt={ele.name} className='w-1/4'/>
                            <h1>{ele.name}</h1>
                        </div>
                        <p>{ele.status}</p>
                    </div>
            ))}
            </div>
            
            {loading && !data && <Loading />}
            
            {error && !loading && (
                <div className='text-center p-10 text-xl text-red-400 border border-red-400/50 rounded-lg max-w-md mx-auto'>
                    Error retrieving data: {error}
                </div>
            )}
            {data && data.results && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto">
                    {data.results?.map((ele) => (
                        <Card key={ele.id} ele={ele} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CharacterPage