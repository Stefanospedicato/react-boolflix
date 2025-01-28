import { createContext, useContext, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  return (
    <CardsContext.Provider value={{ movies, filteredMovies, fetchMovies }}>
      {children}
    </CardsContext.Provider>
  );
};

const useGlobalContext = () => useContext(CardsContext);

export { CardsProvider, useGlobalContext };
