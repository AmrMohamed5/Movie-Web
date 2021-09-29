import { Link } from "react-router-dom";
import Movie from "./Movie";
const MovieList = ({ movies }) => {
  return (
    <section>
      <div className="container">
        {movies.map((e, index) => {
          return (
            <Link
              to={`/movie/${e.id}/${e.title}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Movie
                key={index}
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
