import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const MoviesSection = () => {
  const { filteredMovies, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h2 className="title text-center">MOVIES </h2>
      <div className="movies-section flex-wrap d-flex justify-content-center">
        {filteredMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

//ok

export default MoviesSection;
