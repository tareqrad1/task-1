export interface CharacterDetail {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    episode: string[];
}

export type IData = {
    id: number;
    name: string;
    image: string;
    status: boolean, 
    species: string
}
export interface FetchState {
    data: {
        results: IData[] | null;
    }
    loading: boolean;
    error: string | null
}