export async function getNowPlaying() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzNjN2Y3MWRjY2VhMTcyOTkzZGEwNDFhNTY1NjQ4MSIsInN1YiI6IjY1MjY5ODIzZDM5OWU2MDBjNjc3NTdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuD-DIocUmz7XJrM7ExI-1cg0N72Fdpq9ZeR7MoiwiI'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = response.json();
    return json;
};