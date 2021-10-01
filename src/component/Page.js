// Page Details for the movie
import { useEffect, useState } from "react";
function Page({ id }) {
  const [movie, setMovieDetails] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMovieDetails(id);
  }, []);

  function fetchMovieDetails(key) {
    fetch(
      `https://api.themoviedb.org/3/movie/${key}?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US`
    )
      .then((res) => res.json())
      // when the result comes back with success here is what to do
      .then((res) => setMovieDetails(res))
      // if there is an error here what you have to do.
      .then((err) => setError(err));
    fetch(
      ` https://api.themoviedb.org/3/movie/${key}/videos?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setMovieVideos(res))
      .then((err) => setError(err));
    setLoading(true);
  }
  console.log(movie.production_countries);

  return (
    <div className="container">
      <div className="page">
        <div className="card mb-3" style={{ maxWidth: "640px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                className="img-fluid rounded-start"
                alt="movie"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <h5>{movie.tagline} </h5>
                <p className="card-text">{movie.overview}</p>
                <div className="card-text">
                  <h6> {movie.vote_average} </h6>
                  <small className="text-muted">{movie.release_date}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="producers">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <hr />
        {loading == true ? (
          <div className="trailer">
            {movieVideos.results != null && movieVideos.results.length != 0 ? (
              <div>
                <h2> {movieVideos.results[0].name} </h2>
                <iframe
                  width="700"
                  height="400"
                  src={
                    "https://www.youtube.com/embed/" +
                    movieVideos.results[0].key
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <h6>Trailer not available right now ......</h6>
            )}
          </div>
        ) : (
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              style={{ width: "3rem", height: "3rem" }}
              className="spinner-border  text-secondary"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
