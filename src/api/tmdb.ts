import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${configuration.apiToken}`,
            }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json: TBody = await response.json();
        return json;
};

export interface MoviesDetails {
    id: number;
    backdrop_path?: string;
    title: string;
    popularity: number;
    overview: string;
};

interface PageResponse<TResult>{
    page: number,
    results: TResult[],
};

interface Configuration {
    images: {
        base_url: string
    }
};

export const client = {
    async getConfiguration() {
        return get<Configuration>('/configuration')
    }, 
    async getNowPlaying(): Promise<MoviesDetails[]> {
        const response = await get<PageResponse<MoviesDetails>>('/movie/now_playing?page=1');
        
        return response.results;
    },
};