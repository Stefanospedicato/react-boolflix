import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const ResultSection = () => {
  const { filteredMovies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex-wrap d-flex justify-content-center">
      {filteredMovies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ResultSection;
