// movieSeriesContext.jsx
import { createContext, useState, useEffect } from "react";

export const MovieSeriesContext = createContext();

export const MovieSeriesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [celebrities, setCelebrities] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [topCelebrities, setTopCelebrities] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingSeries, setUpcomingSeries] = useState([]);
  const [watchlists, setWatchlists] = useState([]);

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.log(`fetchData :${url}`)  
      console.error("Error fetching JSON:", error);
    }
  };

  const fetchAllData = async () => {
    fetchData("/movieStaticFiles/movies.json", setMovies);
    fetchData("/movieStaticFiles/series.json", setSeries);
    fetchData("/movieStaticFiles/celebrities.json", setCelebrities);
    fetchData("/movieStaticFiles/top_movies.json", setTopMovies);
    fetchData("/movieStaticFiles/top_series.json", setTopSeries);
    fetchData("/movieStaticFiles/top-celebrities.json", setTopCelebrities);
    fetchData("/movieStaticFiles/upcoming_movies.json", setUpcomingMovies);
    fetchData("/movieStaticFiles/upcoming_series.json", setUpcomingSeries);
    fetchData("/movieStaticFiles/watchlist.json", setWatchlists);
  };

  useEffect(() => {
    console.log("fetchAllData");
    fetchAllData();
  }, []);

  return (
    <MovieSeriesContext.Provider value={{ 
      movies, series, celebrities, topMovies, topSeries, topCelebrities, 
      upcomingMovies, upcomingSeries, watchlists, fetchAllData 
    }}>
      {children}
    </MovieSeriesContext.Provider>
  );
};
