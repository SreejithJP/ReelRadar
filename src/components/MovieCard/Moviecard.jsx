import './moviecard.css';

const MovieCard = ({ item, index, handleTitleClick, watchlists }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user?.user_id; // Get the logged-in user's ID
    // Find the watchlist for the logged-in user
    const userWatchlist = watchlists?.find((w) => w.user_id === user_id)?.watchlist || [];
    // Check if the item is in the user's watchlist
    const isInWatchlist = userWatchlist.includes(item.movie_id) || userWatchlist.includes(item.series_id);

    return (
        <div className="movie-card">
            <img 
                src={item.poster_url ? item.poster_url : item.image_url} 
                alt={item.title ? item.title : item.name} 
                className="movie-poster" 
            />
            <div className="movie-details">
                <h3 className="movie-title" onClick={() => handleTitleClick(item)}>
                    {index + 1}. {item.title ? item.title : item.name}
                </h3>
                <div className="year-duration">
                    <p className="movie-year">
                        {item.release_year ? item.release_year : item.number_of_seasons ? item.number_of_seasons + "S" : item.release_date ? item.release_date : item.date_of_birth ? item.date_of_birth : null}
                    </p>
                    <p className="movie-duration">
                        {item.duration ? item.duration : item.number_of_episodes ? item.number_of_episodes + " eps" : ""}
                    </p>
                </div>
                <p className="movie-rating">
                    {item.rating ? item.rating + " ⭐" : item.profession ? item.profession.join(", ") : ""}
                </p>
            </div>
            <div className="addToWatchlist">
                <button className="addToWatchlistBtn">
                    <img
                        src={
                            isInWatchlist
                                ? "/movieStaticFiles/watchlist/removeFromWatchlist.svg"
                                : "/movieStaticFiles/watchlist/addToWatchlist.svg"
                        }
                        alt={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}    
                        
                    />
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
