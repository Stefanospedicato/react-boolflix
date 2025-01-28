import { createContext, useContext, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const apiUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=253ed4ba34df710d4265508f7eccdabc&query=matrix";

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get(apiUrl).then((res) => {
      setMovies(res.data.results);
    });
  };

  return (
    <CardsContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </CardsContext.Provider>
  );
};

const useGlobalContext = () => useContext(CardsContext);

export { CardsProvider, useGlobalContext };
