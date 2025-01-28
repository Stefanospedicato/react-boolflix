import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const ResultSection = () => {
  const { movies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap m-3 gap-1">
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </div>
  );
};

export default ResultSection;
