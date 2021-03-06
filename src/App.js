import { useEffect, useState } from "react";
import { Route } from "react-router";
import MovieList from "./component/MovieList";
import Nav from "./component/Nav";
import Page from "./component/Page";
function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //fetch api
  function fetchMore() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      // when the result comes back with success here is what to do
      .then((res) => setMovies((prev) => [...prev, ...res.results]));
    setPage((prev) => ++prev);
    setLoading(true);
  }

  //handling search
  const searchValue = (e) => {
    e.preventDefault();
    if (search) {
      fetch(
        `https:api.themoviedb.org/3/search/movie?&api_key=41f62205eb96431e74d58bc8998a848d&query=${search}`
      )
        .then((res) => res.json())
        .then((res) => setMovies(res.results));
      setSearch("");
    }
  };
  // use Effect to render the movie page 1 on reload
  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <>
      <Nav searchValue={searchValue} setSearch={setSearch} />
      {loading === true ? (
        <Route
          exact
          path="/"
          render={(props) => (
            <MovieList props={props} movies={movies} fetchMore={fetchMore} />
          )}
        ></Route>
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
      <Route
        exact
        path="/movie/:id/:title"
        render={({ match }) => <Page id={match.params.id} />}
      />
    </>
  );
}
export default App;
