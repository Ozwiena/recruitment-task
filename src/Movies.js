import { useEffect, useState } from "react";
import { getData } from "./data";
import './Movies.css';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const displayStars = (number) => {
        const stars = [];

        for (let i = 1; i <= number; i++) {
            stars.push('*');
        }

        return stars.join('');
    }

    const handleReload = () => {
        setError(false);
        setIsLoading(true);
        getData()
        .then((data) => {
            setMovies(data);
            setIsLoading(false);
            setError(false);
        })
        .catch(() => {
            setError(true);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        handleReload();
    }, []);

    if (isLoading) {
        return <div className="loader">Loading</div>
    }

    if (error) {
        return (<><div className="error">Error occurred</div>
                <button className="reload" onClick={handleReload}>Load data again</button>
                </>)
    }

    return (
        <div>

        {!error && (
            <table className="movie__table">
                <tr className="table__header">
                    <th className="movie__id">Id</th>
                    <th className="movie__title">Title</th>
                    <th className="movie__director">Director</th>
                    <th className="movie__year">Year</th>
                    <th className="movie__rating">Rating</th>
                </tr>
                <tbody>
                    {movies.map(movie => (
                    <tr key={movie.id} className="movie">
                        <td className="movie__id">{movie.id}</td>
                        <td className="movie__title">{movie.title}</td>
                        <td className="movie__director">{movie.director}</td>
                        <td className="movie__year">{movie.year}</td>
                        <td className="movie__rating">{displayStars(movie.rating)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )}
        </div>
    )
}