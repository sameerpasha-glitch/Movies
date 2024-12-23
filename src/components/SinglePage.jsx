import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './singlepage.css'
const SinglePage = () => {
    const { id } = useParams(); // Get movie ID from URL
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=f7336291bed5d7c752441a391391319e`
                );
                const data = await response.json();
                setMovie(data);

                // Fetch the trailer
                const trailerResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f7336291bed5d7c752441a391391319e`
                );
                const trailerData = await trailerResponse.json();
                const trailer = trailerData.results.find((video) => video.type === 'Trailer');
                setTrailerKey(trailer ? trailer.key : null);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setIsLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div className='Container'>
            <h1 className='title'>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='Muv-title'
            />
            <p className='prevu'>{movie.overview}</p>
            {trailerKey ? (
                <div>
                    <iframe
                        width="400"
                        height="305"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='iframe'
                    ></iframe>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SinglePage;
