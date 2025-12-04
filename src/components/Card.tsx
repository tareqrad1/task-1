
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ ele }: { ele: { id: number; name: string; image: string; status: boolean; species: string } }): React.JSX.Element => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/details/${ele?.id}`)}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03] cursor-pointer border border-green-600/30"
        >
            <img 
                src={ele?.image} 
                alt={ele?.name} 
                className="w-full h-48 object-cover border-b border-green-600/50" 
            />
            
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white truncate">
                    {ele?.name}
                </h3>
                <div className="flex items-center text-sm">
                    <span 
                        className={`w-3 h-3 rounded-full mr-2 bg-green-500`}
                    ></span>
                    <span className="text-gray-300">
                        <strong className='font-medium'>{ele?.status}</strong> - {ele?.species}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;