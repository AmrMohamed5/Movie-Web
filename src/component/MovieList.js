import { Link } from "react-router-dom";
import Movie from "./Movie";
const MovieList = ({ movies }) => {
  return (
    <section>
      <div className="container">
        {movies.map((e) => {
          return (
            <Link
              to={`/movie/${e.title}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Movie
                title={e.title}
                poster={e.backdrop_path}
                overview={e.overview}
                rate={e.vote_average}
                iD={e.id}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MovieList;
