import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const ResultSection = () => {
  const { filteredMovies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {filteredMovies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ResultSection;
