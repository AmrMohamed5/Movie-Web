// Page Details for the movie
import { useEffect, useState } from "react";
function Page({ id }) {
  const [movie, setMovieDetails] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [error, setError] = useState(null);
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
  }
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
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <p className="card-text">
                  <small className="text-muted">{movie.release_date}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {movieVideos.results != null && movieVideos.results.length != 0 ? (
          <iframe
            width="700"
            height="400"
            src={"https://www.youtube.com/embed/" + movieVideos.results[0].key}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Page;
