import { Movie } from '../../reducers/movies';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { MovieCard } from './MovieCard';
import style from './Movies.module.scss';
import { useEffect, useState } from 'react';

interface MoviesProps{
    movies: Movie[];
};

export function MovieFetch() {
    const [movies, setMovies] = useState([]);

    useEffect(() => { });

    return <Movies movies={movies} />
}

function Movies ({ movies }: MoviesProps ) {
    return (
        <section>
            <div className={style.list}>
                {movies.map((m)=>(
                    <MovieCard key={m.id} id={m.id} title={m.title} overview={m.overview} popularity={m.popularity} />
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