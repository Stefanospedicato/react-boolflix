import MovieSection from "./MovieSection";
import SerieSection from "./SerieSection";

const Main = () => {
  return (
    <main>
      <div className="container justify-content-center">
        <section className="my-3">
          <MovieSection />
        </section>
        <section className="my-3">
          <SerieSection />
        </section>
      </div>
    </main>
  );
};

export default Main;
