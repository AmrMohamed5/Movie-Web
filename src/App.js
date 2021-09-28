import { useEffect, useState } from "react";
import { Route } from "react-router";
import MovieList from "./component/MovieList";
import Nav from "./component/Nav";
import Page from "./component/Page";
import Login from "./component/Login";
import CreateLogin from "./component/CreateLogin";
function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  //fetch api
  function fetchMore() {
    // the function to fetch data from the api
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json()) // when the result comes back with success here is what to do
      .then((res) => setMovies((prev) => [...prev, ...res.results]))
      // if there is an error here what you have to do.
      .then((err) => setError(err));
    setPage((prev) => ++prev);
  }
  console.log(movies);

  //handling search
  const searchValue = (e) => {
    e.preventDefault();
    if (search) {
      fetch(
        `https:api.themoviedb.org/3/search/movie?&api_key=41f62205eb96431e74d58bc8998a848d&query=${search}`
      )
        .then((res) => res.json())
        .then((res) => setMovies(res.results))
        .then((err) => setError(err))
        .finally((e) => setSearch(""));
    }
  };

  // use Effect to render the movie page 1 on reload
  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <>
      <Nav searchValue={searchValue} setSearch={setSearch} />
      <Route exact path="/">
        <MovieList movies={movies} />
        <button onClick={fetchMore} id="btn-more" className="btn btn-primary">
          See More
        </button>
      </Route>
      <Route
        exact
        path="/:title"
        render={({ match }) => (
          <Page movies={movies} title={match.params.title} />
        )}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={CreateLogin} />
    </>
  );
}
export default App;
