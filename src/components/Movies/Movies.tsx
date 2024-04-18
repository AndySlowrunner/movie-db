import { Movie } from '../../reducers/movies';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { MovieCard } from './MovieCard';
import style from './Movies.module.scss';
import { useEffect, useState } from 'react';
import { MoviesDetails, client } from '../../api/tmdb';

interface MoviesProps{
    movies: Movie[];
};

export function MovieFetch() {
    const [movies, setMovies] = useState<MoviesDetails[]>([]);

    useEffect(() => {
        async function LoadData() {
            const config = await client.getConfiguration();
            const imageUrl = config.images.base_url;
            const results = await client.getNowPlaying();
            
            const mappedResults: Movie[] = results.map((m) => ({
                id: m.id,
                title: m.title,
                popularity: m.popularity,
                overview: m.overview,
                image: m.backdrop_path ? `${imageUrl}w780${m.backdrop_path}` : undefined
            }))

            setMovies(mappedResults);
        };

        LoadData();
     }, []);

    return <Movies movies={movies} />
}

function Movies ({ movies }: MoviesProps ) {
    return (
        <section>
            <div className={style.list}>
                {movies.map((m)=>(
                    <MovieCard key={m.id} id={m.id} title={m.title} overview={m.overview} popularity={m.popularity} image={m.image} />
                ))}
            </div>
        </section>
    )
};

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top
});

const connector = connect(mapStateToProps);

export default connector(Movies);