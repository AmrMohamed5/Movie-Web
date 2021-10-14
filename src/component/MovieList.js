import Movie from "./Movie";
const MovieList = ({ movies, fetchMore, props }) => {
  return (
    <section>
      <div className="container">
        {movies.map((e, index) => {
          return (
            <Movie
              props={props}
              key={index}
              title={e.title}
              poster={e.backdrop_path}
              overview={e.overview}
              rate={e.vote_average}
              iD={e.id}
            />
          );
        })}
      </div>
      <button onClick={fetchMore} id="btn-more" className="btn btn-primary">
        See More
      </button>
    </section>
  );
};

export default MovieList;
