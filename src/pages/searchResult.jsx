import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieSeriesContext } from "../context/movieSeriesContext";

const SearchResult = () => {
    const { query } = useParams();
    const {
        movies,
        series,
        celebrities,
        upcomingMovies,
        upcomingSeries,
        watchlists,
    } = useContext(MovieSeriesContext);

    // Helper function to filter items based on the query
    const filterItems = (items, key) => {
        return items?.filter((item) =>
            // query checked with dataset field
            item[key]?.toLowerCase().includes(query.toLowerCase())
        );
    };

    // Combine all matching results from different datasets
    const movieResults = filterItems(movies, "title");
    const seriesResults = filterItems(series, "title");
    const celebrityResults = filterItems(celebrities, "name");
    const upcomingMoviesResults = filterItems(upcomingMovies, "title");
    const upcomingSeriesResults = filterItems(upcomingSeries, "title");

    // Combine all results into a single array
    const combinedResults = [
        ...movieResults,
        ...seriesResults,
        ...celebrityResults,
        ...upcomingMoviesResults,
        ...upcomingSeriesResults,
    ];

    return (
        <>
            <p>Search Results for: {query}</p>
            {combinedResults.length > 0 ? (
                <div className="search-results">
                    {combinedResults.map((item, index) => {
                        const isInWatchlist = watchlists?.some((w) => w.id === item.id);

                        return (
                            <div key={index} className="movie-card">
                                <img 
                                    src={item.poster_url ? item.poster_url : item.image_url} 
                                    alt={item.title ? item.title : item.name} 
                                    className="movie-poster" 
                                />
                                <div className="movie-details">
                                    <h3 className="movie-title">
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
                    })}
                </div>
            ) : (
                <p>No matching results found.</p>
            )}
        </>
    );
};

export default SearchResult;
