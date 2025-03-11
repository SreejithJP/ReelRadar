import { useParams } from "react-router-dom";
import "./styles/menu_result.css";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/Moviecard";

const MenuResult = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [celeb, setCelebrities] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [topCeleb, setTopCelebrities] = useState([]);
  const [comingMovies, setComingMovies] = useState([]);
  const [comingSeries, setComingSeries] = useState([]);

  const [watchlists, setWatchlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleTitleClick = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSelectedItem(null);
  };

  // Fetch reusable function
  useEffect(() => {
    const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchData("/movieStaticFiles/movies.json", setMovies);
    fetchData("/movieStaticFiles/series.json", setSeries);
    fetchData("/movieStaticFiles/celebrities.json", setCelebrities);
    fetchData("/movieStaticFiles/watchlist.json", setWatchlist);

    if (category.includes("top-rated")) {
      fetchData("/movieStaticFiles/top_movies.json", setTopMovies);
      fetchData("/movieStaticFiles/top_series.json", setTopSeries);
      fetchData("/movieStaticFiles/top_celebrities.json", setTopCelebrities);
    }
    if (category.includes("upcoming")) {
      fetchData("/movieStaticFiles/upcoming_movies.json", setComingMovies);
      fetchData("/movieStaticFiles/upcoming_series.json", setComingSeries);
    }
  }, [category]);

  // Function to get the correct dataset based on category
  const getCategoryData = () => {
    switch (category) {
      case "top-rated-movies":
        return movies.filter((movie) => topMovies.includes(movie.movie_id));
      case "top-rated-series":
        return series.filter((series) => topSeries.includes(series.series_id));
      case "top-celebrities":
        return celeb.filter((cele) => topCeleb.includes(cele.celebrity_id));
      case "all-movies":
        return movies;
      case "all-series":
        return series;
      case "all-celebrities":
        return celeb;
      case "upcoming-movies":
        return comingMovies;
      case "upcoming-series":
        return comingSeries;
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
              <p>{selectedItem.release_date || (selectedItem.number_of_seasons ? selectedItem.number_of_seasons + " Seasons" : selectedItem.release_year || selectedItem.profession?.join(", "))}</p>
              <p>{selectedItem.duration || selectedItem.date_of_birth || null}</p>
              <p>{selectedItem.genres?.join(", ") || null}</p>
            </div>
            <div className="overlay-poster-and-plot">
              <img src={selectedItem.cover} alt={selectedItem.title} />
              <p>{selectedItem.description || selectedItem.biography}</p>
            </div>
            <div className="overlay-creator">
              <p>
                {selectedItem.creators ? "Creators : " + selectedItem.creators.map(id => celeb.find(c => c.celebrity_id === id)?.name).join(", ") :
                 selectedItem.nationality ? "Nationality : " + selectedItem.nationality :
                 selectedItem.directors ? "Directors : " + selectedItem.directors.map(id => celeb.find(c => c.celebrity_id === id)?.name).join(", ") :
                 null}
              </p>
            </div>
            <div className="overlay-cast">
              <p>{selectedItem.cast ? "Cast : " + selectedItem.cast.map(cid => celeb.find(c => c.celebrity_id === cid)?.name).join(", ") : null}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuResult;
