import { useEffect, useState } from "react";
import './styles/watchlist.css'
const Watchlist = () => {
const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);
const [upMovies, setUpMovies] = useState([]);
const [upSeries, setUpSeries] = useState([]);
const [watchlists, setWatchlist] = useState([]);
useEffect(() => {
    Promise.all([
      fetch("/movieStaticFiles/movies.json").then((response) => response.json()),
      fetch("/movieStaticFiles/series.json").then((response) => response.json()),
      fetch("/movieStaticFiles/upcoming_movies.json").then((response) => response.json()),
      fetch("/movieStaticFiles/upcoming_series.json").then((response) => response.json()),
      fetch("/movieStaticFiles/watchlist.json").then((response) => response.json()),
    ])
    .then(([movies, series, upMovies, upSeries, watchlist]) => {
      setMovies(movies);
      setSeries(series);
      setUpMovies(upMovies);
      setUpSeries(upSeries);
      setWatchlist(watchlist);
    })
    .catch((error) => console.error("Error fetching JSON files:", error));
  }, []);

    const filteredMovies = movies.filter((m) => watchlists.watchlist.includes(m.movie_id));
    const filteredSeries = series.filter((m) => watchlists.watchlist.includes(m.series_id));
    const filteredUpMovies = upMovies.filter((m) => watchlists.watchlist.includes(m.movie_id));
    const filteredUpSeries = upSeries.filter((m) => watchlists.watchlist.includes(m.series_id));
  
    return (
        <div className="watchlist-container">
        {filteredMovies.length > 0 && (
        <div className="movies">
            <h2 className="heading">Movies</h2>
            {filteredMovies.map((movie, index) => {
                return (
                    <div key={index} className="card" >
                        <img src={movie.poster_url} alt={movie.title} className="poster" />
                        <div className="details">
                        <h3 className="title">{movie.title}</h3>
                        <div className="year-duration">
                            <p className="year">{movie.release_year ? movie.release_year : movie.number_of_seasons ? movie.number_of_seasons + "S" : movie.release_date ? movie.release_date : movie.date_of_birth ? movie.date_of_birth: null }</p>
                            <p className="duration">{movie.duration ? movie.duration : movie.number_of_episodes ? movie.number_of_episodes+ " eps" : ""}</p>
                        </div>
                        <p className="rating">{movie.rating ? movie.rating + " ⭐" : null}</p>
                        </div>
                        <div className="addToWatchlist">
                            <button className="addToWatchlistBtn" onClick={() => addToWatchlist(movie.movie_id)}>
                            <img src="/movieStaticFiles/watchlist/removeFromWatchlist.svg" alt="remove" />
                            </button>
                        </div>
                    </div>
                    );
            })}
        </div>
        )}
        {filteredUpMovies.length > 0 && (
        <div className="upmovies">
            <h2 className="heading">Upcoming Movies</h2>
            {filteredUpMovies.map((movie, index) => {
               return (
                <div key={index} className="card" >
                    <img src={movie.poster_url} alt={movie.title} className="poster" />
                    <div className="details">
                    <h3 className="title">{movie.title}</h3>
                    <div className="year-duration">
                        <p className="year">{movie.release_year ? movie.release_year : movie.number_of_seasons ? movie.number_of_seasons + "S" : movie.release_date ? movie.release_date : movie.date_of_birth ? movie.date_of_birth: null }</p>
                        <p className="duration">{movie.duration ? movie.duration : movie.number_of_episodes ? movie.number_of_episodes+ " eps" : ""}</p>
                    </div>
                    <p className="rating">{movie.rating ? movie.rating + " ⭐" : null}</p>
                    </div>
                    <div className="addToWatchlist">
                        <button className="addToWatchlistBtn" onClick={() => addToWatchlist(movie.movie_id)}>
                        <img src="/movieStaticFiles/watchlist/removeFromWatchlist.svg" alt="remove" />
                        </button>
                </div>
                </div>
                );
            })}
        </div>
        )}
        {filteredSeries.length > 0 && (
        <div className="series">
            <h2 className="heading">Series</h2>
            {filteredSeries.map((movie, index) => {
               return (
                <div key={index} className="card" >
                    <img src={movie.poster_url} alt={movie.title} className="poster" />
                    <div className="details">
                    <h3 className="title">{movie.title}</h3>
                    <div className="year-duration">
                        <p className="year">{movie.release_year ? movie.release_year : movie.number_of_seasons ? movie.number_of_seasons + "S" : movie.release_date ? movie.release_date : movie.date_of_birth ? movie.date_of_birth: null }</p>
                        <p className="duration">{movie.duration ? movie.duration : movie.number_of_episodes ? movie.number_of_episodes+ " eps" : ""}</p>
                    </div>
                    <p className="rating">{movie.rating ? movie.rating + " ⭐" : null}</p>
                    </div>
                    <div className="addToWatchlist">
                        <button className="addToWatchlistBtn" onClick={() => addToWatchlist(movie.series_id)}>
                        <img src="/movieStaticFiles/watchlist/removeFromWatchlist.svg" alt="remove" />
                        </button>
                </div>
                </div>
                );
            })}
        </div>
        )}
        {filteredUpSeries.length > 0 && (
        <div className="upseries">
            <h2 className="heading">Upcoming Series</h2>
            {filteredUpSeries.map((movie, index) => {
               return (
                <div key={index} className="card" >
                    <img src={movie.poster_url} alt={movie.title} className="poster" />
                    <div className="details">
                    <h3 className="title">{movie.title}</h3>
                    <div className="year-duration">
                        <p className="year">{movie.release_year ? movie.release_year : movie.number_of_seasons ? movie.number_of_seasons + "S" : movie.release_date ? movie.release_date : movie.date_of_birth ? movie.date_of_birth: null }</p>
                        <p className="duration">{movie.duration ? movie.duration : movie.number_of_episodes ? movie.number_of_episodes+ " eps" : ""}</p>
                    </div>
                    <p className="rating">{movie.rating ? movie.rating + " ⭐" : null}</p>
                    </div>
                    <div className="addToWatchlist">
                        <button className="addToWatchlistBtn" onClick={() => addToWatchlist(movie.series_id)}>
                        <img src="/movieStaticFiles/watchlist/removeFromWatchlist.svg" alt="remove" />
                        </button>
                </div>
                </div>
                );
            })}
        </div>
        )}
    </div>  
    );
  };
  
  export default Watchlist;
  