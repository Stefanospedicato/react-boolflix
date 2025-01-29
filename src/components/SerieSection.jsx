import { useGlobalContext } from "../context/CardsContext";
import { useEffect } from "react";
import Card from "./Card";

const SeriesSection = () => {
  const { filteredSeries, fetchSeries } = useGlobalContext();

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <>
      <h2 className="title text-center">SERIES </h2>
      <div className="series-section flex-wrap d-flex justify-content-center">
        {filteredSeries.map((serie) => (
          <Card key={serie.id} serie={serie} />
        ))}
      </div>
    </>
  );
};

export default SeriesSection;
