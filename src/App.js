import { useEffect, useState } from 'react';
import MovieList from './component/MovieList';
import Nav from './component/Nav';
function App() {
  const [movies, setMovies] = useState([])
  const [page,setPage] = useState(1)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  //fetch api 
  function fetchMore(){
      // the function to fetch data from the api
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate`)
        .then(res => res.json()) // when the result comes back with success here is what to do
        .then((res) => setMovies((prev)=>[...prev,...res.results]))
        // if there is an error here what you have to do.
        .then(err => setError(err));       
      setPage((prev) => ++prev)
      }

      //handling search 
      const searchValue = (e) => {
        e.preventDefault();
        if(search) {
        fetch(`https:api.themoviedb.org/3/search/movie?&api_key=41f62205eb96431e74d58bc8998a848d&query=${search}`)
        .then(res => res.json())
        .then((res) => setMovies(res.results))
        .then(err => setError(err));       
        setSearch("")
        }
      }

  // use Effect to render the movie page 1 on reload
  useEffect(() => {
      fetchMore();
    }, [])
  
  return (
    <div className='container'>
    <Nav searchValue={searchValue} setSearch={setSearch} />
     <MovieList movies={movies}/>
     <div className="d-grid gap-2 col-3 mx-auto">
  <button onClick={fetchMore} className="btn btn-primary" type="button">See More</button>
</div>
    </div>
  );
}
export default App;




