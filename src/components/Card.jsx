const Card = ({ movie, serie }) => {
  const {
    id: movieId,
    title: movieTitle,
    original_title: movieOriginalTitle,
    original_language: movieOriginalLanguage,
    vote_average: movieVoteAverage,
    poster_path: moviePosterPath,
  } = movie || {};

  const {
    id: serieId,
    title: serieTitle,
    original_title: serieOriginalTitle,
    original_language: serieOriginalLanguage,
    vote_average: serieVoteAverage,
    poster_path: seriePosterPath,
  } = serie || {};

  const id = movieId || serieId;
  const title = movieTitle || serieTitle;
  const original_title = movieOriginalTitle || serieOriginalTitle;
  const original_language = movieOriginalLanguage || serieOriginalLanguage;
  const vote_average = movieVoteAverage || serieVoteAverage;
  const poster_path = moviePosterPath || seriePosterPath;

  return (
    <div key={id} className="card text-center">
      <h5>{title}</h5>
      <h6>{original_title}</h6>
      <div>
        {original_language === "it" && (
          <img className="flag" src="../../public/italy.jpg" alt="italy" />
        )}
        {original_language === "en" && (
          <img className="flag" src="../../public/uk.png" alt="uk" />
        )}
        {original_language !== "it" &&
          original_language !== "en" &&
          original_language.toUpperCase()}
      </div>
      <div>{(parseInt(vote_average) / 2).toFixed()}</div>
      <div>
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
