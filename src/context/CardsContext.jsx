import { createContext, useContext, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);

  const fetchMovies = (query = "") => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=253ed4ba34df710d4265508f7eccdabc&query=${query}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data.results);
        setFilteredMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film", err);
      });
  };

  const fetchSeries = (query = "") => {
    const apiUrl = `https://api.themoviedb.org/3/search/tv?api_key=253ed4ba34df710d4265508f7eccdabc&query=${query}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setSeries(res.data.results);
        setFilteredSeries(res.data.results);
      })
      .catch((err) => {
        console.error("Errore nel caricamento delle Serie TV", err);
      });
  };

  const value = {
    movies,
    filteredMovies,
    fetchMovies,
    series,
    fetchSeries,
    filteredSeries,
  };

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
};

const useGlobalContext = () => useContext(CardsContext);

export { CardsProvider, useGlobalContext };
