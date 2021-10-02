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
  console.log(movie);
  const prod = movie.production_companies;
  const gener = movie.genres;
  const country = movie.production_countries;
  return (
    <div className="container">
      <div className="page">
        <div className="page-head" style={{ margin: "10px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  className="img-thumbnail rounded float-start"
                  alt="movie"
                />
              </div>
              <div className="col-lg-8">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }} colSpan="2">
                        {movie.title}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{ textAlign: "center" }}
                        colSpan="2"
                        scope="row"
                      >
                        {movie.tagline}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Language</th>
                      <td>{movie.original_language}</td>
                    </tr>
                    <tr>
                      <th scope="row">Countries</th>
                      <td>
                        {country &&
                          country.map((e) => (
                            <span style={{ margin: "5px" }} key={Math.random()}>
                              {e.name}
                            </span>
                          ))}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Type</th>
                      <td>
                        {gener &&
                          gener.map((e) => (
                            <span key={Math.random()} style={{ margin: "5px" }}>
                              {e.name}
                            </span>
                          ))}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Rate</th>
                      <td>{movie.vote_average}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date</th>
                      <td>{movie.release_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="related">
          <h6>People who watches this movie {movie.vote_count},000</h6>
        </div>
        <hr />
        <div className="overview">
          <h4> Story </h4>
          <p> {movie.overview} </p>
        </div>
        <hr />
        <div
          className="producers"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {prod &&
            prod.map((e) =>
              e.logo_path != null ? (
                <img
                  key={Math.random()}
                  style={{ width: "100px", height: "auto", margin: "auto" }}
                  src={`https://image.tmdb.org/t/p/w1280${e.logo_path}`}
                  alt="production"
                />
              ) : (
                <span style={{ display: "none" }}></span>
              )
            )}
        </div>
        <hr />
        {loading == true ? (
          <div className="trailer" style={{ marginTop: "30px" }}>
            {movieVideos.results != null && movieVideos.results.length != 0 ? (
              <div>
                <h2> {movieVideos.results[0].name} </h2>
                <iframe
                  width="1200"
                  height="500"
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
