import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from './Footer';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [newSeries, setNewSeries] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [animeMovies, setAnimeMovies] = useState([]);

    const [trendingPage, setTrendingPage] = useState(1);
    const [seriesPage, setSeriesPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [animePage, setAnimePage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const [trendingLimit, setTrendingLimit] = useState(14);
    const [seriesLimit, setSeriesLimit] = useState(14);
    const [upcomingLimit, setUpcomingLimit] = useState(14);
    const [animeLimit, setAnimeLimit] = useState(14);

    const API_KEY = 'f7336291bed5d7c752441a391391319e';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const [trendingResponse, seriesResponse, upcomingResponse, animeResponse] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${trendingPage}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${seriesPage}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${upcomingPage}`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=${animePage}`
                    ),
                ]);

                const [trendingData, seriesData, upcomingData, animeData] = await Promise.all([
                    trendingResponse.json(),
                    seriesResponse.json(),
                    upcomingResponse.json(),
                    animeResponse.json(),
                ]);

                setTrendingMovies((prev) => [...prev, ...trendingData.results]);
                setNewSeries((prev) => [...prev, ...seriesData.results]);
                setUpcomingMovies((prev) => [...prev, ...upcomingData.results]);
                setAnimeMovies((prev) => [...prev, ...animeData.results]);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [trendingPage, seriesPage, upcomingPage, animePage]);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };

    const renderMovies = (movies, limit) =>
        movies
            .filter((movie) =>
                movie.title
                    ? movie.title.toLowerCase().includes(searchQuery)
                    : movie.name.toLowerCase().includes(searchQuery)
            )
            .slice(0, limit) // Limit the number of movies displayed
            .map((movie) => (
                <div key={movie.id} className="Muv-title">
                    <Link to={`/movie/${movie.id}`} className="Muv-link">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title || movie.name}
                            className="Muv-img"
                        />
                        <h3>{movie.title || movie.name}</h3>
                    </Link>
                </div>
            ));

    return (
        <div>
            <input
                type="search"
                placeholder="Search Movies or Series..."
                className="search"
                value={searchQuery}
                onChange={handleSearch}
            />
            {isLoading && (
                <div className="loader">
                    <div className="spinner"></div>
                </div>
            )}
            {!isLoading && (
                <>
                    <section>
                        <h3 className="section-title">Trending Now</h3>
                        <div className="container">{renderMovies(trendingMovies, trendingLimit)}</div>
                        {trendingMovies.length > trendingLimit && (
                            <button
                                className="load-more"
                                onClick={() => setTrendingLimit((prev) => prev + 14)}
                            >
                                Load More
                            </button>
                        )}
                    </section>
                    <section>
                        <h3 className="section-title">New Series</h3>
                        <div className="container">{renderMovies(newSeries, seriesLimit)}</div>
                        {newSeries.length > seriesLimit && (
                            <button
                                className="load-more"
                                onClick={() => setSeriesLimit((prev) => prev + 14)}
                            >
                                Load More
                            </button>
                        )}
                    </section>
                    <section>
                        <h3 className="section-title">Upcoming Movies</h3>
                        <div className="container">{renderMovies(upcomingMovies, upcomingLimit)}</div>
                        {upcomingMovies.length > upcomingLimit && (
                            <button
                                className="load-more"
                                onClick={() => setUpcomingLimit((prev) => prev + 14)}
                            >
                                Load More
                            </button>
                        )}
                    </section>
                    <section>
                        <h3 className="section-title">Anime Movies</h3>
                        <div className="container">{renderMovies(animeMovies, animeLimit)}</div>
                        {animeMovies.length > animeLimit && (
                            <button
                                className="load-more"
                                onClick={() => setAnimeLimit((prev) => prev + 14)}
                            >
                                Load More
                            </button>
                        )}
                    </section>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
