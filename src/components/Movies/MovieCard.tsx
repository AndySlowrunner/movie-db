import { Link } from "react-router-dom";
import style from './MovieCard.module.scss';

interface MovieCardProp {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    popularity: number;
};

export const MovieCard = ({ title, overview, popularity, id, poster_path }: MovieCardProp) => {
    return (
        <div className={style.card}>
            <img className={style.picture} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" />
            <div className={style.content}>
                <Link to={`/movie/${id}`}>{title}</Link>
                <div className={style.overview}>{overview}</div>
                <div className={style.popularity}>{popularity}</div>
            </div>
        </div>
    )
};