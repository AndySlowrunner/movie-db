import configuration from "../configuration";

async function get(relativeUrl: string) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${configuration.apiToken}`,
            }
        };

        const response = await fetch(`${configuration.apiUrl}3${relativeUrl}`, options)
        const json = response.json();
        return json;
};

export const client = {
    async getNowPlaying() {
        const resault = await get('/movie/now_playing?page=1');
        return resault;
    },
};