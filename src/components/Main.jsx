import MovieSection from "./MovieSection";
import SerieSection from "./SerieSection";

const Main = () => {
  return (
    <main>
      <div className="container my-5">
        <div className="my-3">
          <h2 className="title">MOVIES: </h2>
          <MovieSection />
        </div>
        <div className="my-3">
          <h2 className="title">SERIES: </h2>
          <SerieSection />
        </div>
      </div>
    </main>
  );
};

export default Main;
