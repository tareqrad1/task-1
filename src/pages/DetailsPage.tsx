import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../api/api'; 
import Loading from '../components/Loading';
import type { CharacterDetail } from "../types";

const DetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<CharacterDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const Navigate = useNavigate();

    
    useEffect(() => {
        if (!id) {
            setError("Character ID is missing.");
            setLoading(false);
            return;
        }
        const isMounted: boolean = true; 
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get<CharacterDetail>(`${BASE_URL}/character/${id}`);
                if (isMounted) {
                    setCharacter(res.data);
                    setLoading(false);
                }
            } catch (err) {
                console.error("Fetch Error:", err);
                if (isMounted) {
                    setError("Failed to load character details.");
                    setLoading(false);
                }
            }
        };
        
        fetchData();
    }, [id]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div className="p-8 text-xl text-red-400 bg-gray-900 min-h-screen">{error}</div>;
    }
    if (!character) {
        return <div className="p-8 text-xl text-yellow-500 bg-gray-900 min-h-screen">Character not found.</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen text-white p-8">
            
            <button className="text-green-400 mb-6 flex items-center hover:text-green-300 transition text-lg font-medium"
            onClick={() => Navigate('/')}
            >
                &larr; Back to Characters
            </button>

            <div className="flex flex-col md:flex-row gap-10 bg-gray-800 p-6 rounded-xl shadow-2xl border border-green-600/30">
                
                {/* 📸 imageeeee hereee */}
                <div className="flex-shrink-0">
                    <img 
                        src={character.image} 
                        alt={character.name} 
                        className="w-full md:w-80 h-auto rounded-lg border-2 border-green-500 shadow-lg"
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-5xl font-extrabold mb-4 text-white">{character.name}</h1>
                    <p className="text-xl text-gray-400 mb-6">Basic Information</p>
                    
                    <ul className="space-y-3 text-lg">
                        <li>
                            <strong className="text-green-400">Status:</strong> {character.status}
                        </li>
                        <li>
                            <strong className="text-green-400">Species:</strong> {character.species}
                        </li>
                        <li>
                            <strong className="text-green-400">Gender:</strong> {character.gender}
                        </li>
                        <li>
                            <strong className="text-green-400">Type:</strong> {character.type || 'N/A'}
                        </li>
                        <li>
                            <strong className="text-green-400">Origin:</strong> {character.origin.name}
                        </li>
                        <li>
                            <strong className="text-green-400">Last Location:</strong> {character.location.name}
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="my-10 border-gray-700" />

            <h2 className="text-3xl font-bold mb-6 text-green-400">
                Episode Appearances ({character?.episode.length})
            </h2>
            
            <div className="text-gray-400">
                Loading episode
            </div>
        </div>
    );
}

export default DetailsPage;