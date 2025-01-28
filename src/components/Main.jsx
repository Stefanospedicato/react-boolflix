import ResultSection from "./ResultSection";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="movies">
          <h2>MOVIES</h2>
          <ResultSection />
        </div>
        <div className="series">
          <h2>SERIE TV</h2>
          <ResultSection />
        </div>
      </div>
    </main>
  );
};

export default Main;
