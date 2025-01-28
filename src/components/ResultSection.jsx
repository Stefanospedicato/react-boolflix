import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const ResultSection = () => {
  const { movies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </div>
  );
};

export default ResultSection;
