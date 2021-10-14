const Movie = ({ title, poster, rate, iD, props }) => {
  const hundleClick = () => {
    props.history.push(`/movie/${iD}/${title}`);
  };
  return (
    <div onClick={hundleClick} key={iD} className="card">
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster}`}
        className=""
        alt="movie"
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="icons">
          <i className="fas fa-star">
            <p>{rate}</p>
          </i>
        </div>
      </div>
    </div>
  );
};
export default Movie;
