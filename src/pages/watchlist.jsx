import { useContext } from "react";
import './styles/watchlist.css'
import { MovieSeriesContext } from "../context/movieSeriesContext";
const Watchlist = () => {
const {
    movies,
    series,
    upcomingMovies,
    upcomingSeries,
    watchlists,
  } = useContext(MovieSeriesContext);
    //parse user into object from string format
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user?.user_id; // Get the logged-in user's ID
    // Find the watchlist for the logged-in user
    const userWatchlist = watchlists?.find((w) => w.user_id === user_id)?.watchlist || [];
    const filteredMovies = movies.filter((m) => userWatchlist.includes(m.movie_id));
    const filteredSeries = series.filter((m) => userWatchlist.includes(m.series_id));
    const filteredUpMovies = upcomingMovies.filter((m) => userWatchlist.includes(m.movie_id));
    const filteredUpSeries = upcomingSeries.filter((m) => userWatchlist.includes(m.series_id));
  
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
  