const Card = ({ movie, serie }) => {
  const {
    id: movieId,
    title: movieTitle,
    original_title: movieOriginalTitle,
    original_language: movieOriginalLanguage,
    vote_average: movieVoteAverage,
    poster_path: moviePosterPath,
    overview: movieOverview,
  } = movie || {};

  const {
    id: serieId,
    name: serieTitle,
    original_name: serieOriginalTitle,
    original_language: serieOriginalLanguage,
    vote_average: serieVoteAverage,
    poster_path: seriePosterPath,
    overview: serieOverview,
  } = serie || {};

  const id = movieId || serieId;
  const title = movieTitle || serieTitle;
  const original_title = movieOriginalTitle || serieOriginalTitle;
  const original_language = movieOriginalLanguage || serieOriginalLanguage;
  const vote_average = movieVoteAverage || serieVoteAverage;
  const poster_path = moviePosterPath || seriePosterPath;
  const overview = movieOverview || serieOverview;

  const fullStars = Math.floor(vote_average / 2);
  const emptyStars = 5 - fullStars;

  const printStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="fa-solid fa-star"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  return (
    <div key={id} className="card text-center">
      <h6 className="card-title">{title}</h6>
      <p className="card-subtitle">{original_title}</p>
      <div>
        {original_language === "it" && (
          <img className="flag" src="../../public/italia.png" alt="italy" />
        )}
        {original_language === "en" && (
          <img className="flag" src="../../public/england-uk.png" alt="uk" />
        )}
        {original_language !== "it" &&
          original_language !== "en" &&
          original_language.toUpperCase()}
      </div>
      <div>{printStars()}</div>
      <div className="description">
        <strong>Descrizione:</strong> {overview}
      </div>
      <div className="poster-container">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
