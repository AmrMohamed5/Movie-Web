const Movie = ({ title, poster, rate, iD }) => {
  return (
    <div key={iD} className="card" style={{ width: "18rem" }}>
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster}`}
        className=""
        alt="movie"
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="icons">
          <i className="fas fa-star">{rate}</i>
        </div>
      </div>
    </div>
  );
};
export default Movie;
