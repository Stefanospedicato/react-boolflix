import ResultSection from "./ResultSection";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="movies">
          <ResultSection />
        </div>
        <div className="series">
          <ResultSection />
        </div>
      </div>
    </main>
  );
};

export default Main;
