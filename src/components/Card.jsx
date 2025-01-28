const Card = ({ movie }) => {
  const {
    id,
    title,
    original_title,
    original_language,
    vote_average,
    poster_path,
  } = movie;

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
          className="d-none poster"
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
