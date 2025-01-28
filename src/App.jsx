import Header from "./components/Header";
import Main from "./components/Main";
import { CardsProvider } from "./context/CardsContext";

const App = () => {
  return (
    <>
      <CardsProvider>
        <Header />
        <Main />
      </CardsProvider>
    </>
  );
};

export default App;

// https://api.themoviedb.org/3/search/movie?api_key=253ed4ba34df710d4265508f7eccdabc
