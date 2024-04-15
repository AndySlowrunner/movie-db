import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${configuration.apiToken}`,
            }
        };

        const response = await fetch(`${configuration.apiUrl}3${relativeUrl}`, options)
        const json: TBody = await response.json();
        return json;
};

export interface MoviesDetails {
    id: number;
    poster_path: string;
    title: string;
    popularity: number;
    overview: string;
};

interface PageResponse<TResoult>{
    page: number,
    results: TResoult[],
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