import { useParams } from "react-router-dom";
import "./styles/menu_result.css";
import { useContext, useState } from "react";
import { MovieSeriesContext } from "../context/movieSeriesContext";
import MovieCard from "../components/MovieCard/Moviecard";

const MenuResult = () => {
  const { category } = useParams();
  const {
    movies,
    series,
    upcomingMovies,
    upcomingSeries,
    celebrities,
    topMovies,
    topSeries,
    topCelebrities,
    watchlists,
  } = useContext(MovieSeriesContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleTitleClick = (item) => {
    console.log(`selecteditem : &{item}`);
    console.log(`Watchlist : &{typeof{watchlist}}`);
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSelectedItem(null);
  };

  // Function to get the correct dataset based on category
  const getCategoryData = () => {
    switch (category) {
      case "top-rated-movies":
        return movies.filter((movie) => topMovies.includes(movie.movie_id));
      case "top-rated-series":
        return series.filter((series) => topSeries.includes(series.series_id));
      case "top-celebrities":
        return celebrities.filter((cele) => topCelebrities.includes(cele.celebrity_id));
      case "all-movies":
        return movies;
      case "all-series":
        return series;
      case "all-celebrities":
        return celebrities;
      case "upcoming-movies":
        return upcomingMovies;
      case "upcoming-series":
        return upcomingSeries;
      default:
        return [];
    }
  };

  const categoryData = getCategoryData();

  return (
    <div className="menu-result-container">
      <h2 className="homePageHeadings">{category.replace("-", " ").toUpperCase()}</h2>

      <div className="menu-result-list">
        {categoryData.map((item, index) => (
          <MovieCard 
            key={index} 
            item={item} 
            index={index} 
            handleTitleClick={handleTitleClick} 
            watchlists={watchlists} 
          />
        ))}
      </div>

      {showOverlay && selectedItem && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>X</button>
            <div className="overlay-title-rating">
              <h1>{selectedItem.title ? selectedItem.title : selectedItem.name}</h1>
              <h1>{selectedItem.rating ? selectedItem.rating + " ⭐" : null}</h1>
            </div>
            <div className="overlay-below-title">
              <p>
                {selectedItem.release_date || 
                (selectedItem.number_of_seasons ? selectedItem.number_of_seasons + " Seasons" : 
                selectedItem.release_year || selectedItem.profession?.join(", "))}
              </p>
              <p>{selectedItem.duration || selectedItem.date_of_birth || null}</p>
              <p>{selectedItem.genres?.join(", ") || null}</p>
            </div>
            <div className="overlay-poster-and-plot">
              <img src={selectedItem.cover} alt={selectedItem.title} />
              <p>{selectedItem.description || selectedItem.biography}</p>
            </div>
            <div className="overlay-creator">
              <p>
                {selectedItem.creators ? 
                  "Creators : " + selectedItem.creators.map(id => celebrities.find(c => c.celebrity_id === id)?.name).join(", ") :
                  selectedItem.nationality ? 
                  "Nationality : " + selectedItem.nationality :
                  selectedItem.directors ? 
                  "Directors : " + selectedItem.directors.map(id => celebrities.find(c => c.celebrity_id === id)?.name).join(", ") :
                  null}
              </p>
            </div>
            <div className="overlay-cast">
              <p>{selectedItem.cast ? "Cast : " + selectedItem.cast.map(cid => celebrities.find(c => c.celebrity_id === cid)?.name).join(", ") : null}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuResult;
