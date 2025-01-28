const Card = (props) => {
  const { id, title, original_title, original_language, vote_average } =
    props.movie;

  return (
    <div key={id} className="card text-center">
      <h5>{title}</h5>
      <h6>{original_title}</h6>
      <div>{original_language}</div>
      <div>{vote_average}</div>
    </div>
  );
};

export default Card;
