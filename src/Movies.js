import { useEffect, useState, useMemo } from "react";
import { getData } from "./data";
import './Movies.css';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sortingType, setSortingType] = useState(null);

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
            setError(false);
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const handleSortTypeChange = (value) => {
        setSortingType(value);
    }

    const sortMovies = (sortingType, movies) => {
        switch (sortingType) {
            case 'title':
                return [...movies].sort(
                    (movieA, movieB) => movieA.title.localeCompare(movieB.title),
                );
            case 'year':
                return [...movies].sort(
                    (movieA, movieB) => movieB.year - movieA.year,
                );
            case 'director':
                return [...movies].sort(
                    (movieA, movieB) => movieA.director.localeCompare(movieB.director),
                );
            case 'rating':
                return [...movies].sort(
                    (movieA, movieB) => movieB.rating - movieA.rating,
                );
            default:
                return movies;
        }
    };

    const currentMovies = useMemo(() => {
        let sortedMovies = sortMovies(sortingType, movies);
    
        return sortedMovies;
      }, [movies, sortingType]);

    useEffect(() => {
        handleReload();
    }, []);

    if (isLoading) {
        return <div className="loader">Loading</div>
    }

    if (error) {
        return (<>
                    <div className="error">Error occurred</div>
                    <button className="reload" onClick={handleReload}>Load data again</button>
                </>)
    }

    return (
        <div>

        {!error && (
            <>
            <div className="sorter">
                <label className="sorter_label--select">Sort movies by</label>
                <select
                    id="select"
                    className="sorter__items-selector"
                    defaultValue="default"
                    onChange={(event) => handleSortTypeChange(event.target.value)}
                >
                    <option value='default'>Id</option>
                    <option value='title'>Title</option>
                    <option value='year'>Year</option>
                    <option value='director'>Director</option>
                    <option value='rating'>Rating</option>
                </select>
            </div>

            <table className="movie__table">
                <tr className="table__header">
                    <th className="movie__id">Id</th>
                    <th className="movie__title">Title</th>
                    <th className="movie__director">Director</th>
                    <th className="movie__year">Year</th>
                    <th className="movie__rating">Rating</th>
                </tr>
                <tbody>
                    {currentMovies.map(movie => (
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
            </>
        )}
        </div>
    )
}