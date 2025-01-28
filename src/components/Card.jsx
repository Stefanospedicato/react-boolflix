const Card = ({ movie }) => {
  const { id, title, original_title, original_language, vote_average } = movie;

  return (
    <div key={id} className="card">
      <h4>{title}</h4>
      <h5>{original_title}</h5>
      <div>{original_language}</div>
      <div>{vote_average}</div>
    </div>
  );
};

export default Card;
