import MovieSection from "./MovieSection";
import SerieSection from "./SerieSection";
import { useGlobalContext } from "../context/CardsContext";

const Main = () => {
  const { filteredMovies, filteredSeries } = useGlobalContext();

  return (
    <main>
      <div className="container justify-content-center">
        <section className="my-3">
          <MovieSection />
        </section>
        <section className="my-3">
          <SerieSection />
        </section>
        {filteredMovies.length < 1 && filteredSeries.length < 1 ? (
          <div className="container welcome">
            <div className="welcome-box">
              <h1 className="text-danger text-center">Benvenuto su BOOLFLIX</h1>
              <h2 className="text-white text-center">
                Cerca un film o una serie TV nella nostra libreria...
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default Main;
