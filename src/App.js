import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './component/MovieList';
import Nav from './component/Nav';

function App() {
  const [movies, setMovies] = useState([])
  const [page,setPage] = useState(1)
  const [error, setError] = useState(null)

  function fetchMore(){
      // the function to fetch data from the api
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_watch_monetization_types=flatrate`)
        .then(res => res.json()) // when the result comes back with success here is what to do
        .then((res) => setMovies((prev)=>[...prev,...res.results]))
        // if there is an error here what you have to do.
        .then(err => setError(err));       
      setPage((prev) => ++prev)
      }
  useEffect(() => {
      fetchMore();
    }, [])
    console.log(movies);

  
  return (
    <>
    <Nav />
     <MovieList movies={movies}/>
     <button onClick={fetchMore}> See More </button>
    </>
  );
}

export default App;




// function fetchMovieDetails(key= 841755){
//   fetch(`https://api.themoviedb.org/3/movie/${key}?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US`)
//   .then(res => res.json()) // when the result comes back with success here is what to do
//   .then((res) => setMovieDetails(res))
//   // if there is an error here what you have to do.
//   .then(err => setError(err))

//   fetch(` https://api.themoviedb.org/3/movie/${key}/videos?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US`)
//   .then(res => res.json()) // when the result comes back with success here is what to do
//   .then((res) => setMovieVideos(res))
//   // if there is an error here what you have to do.
//   .then(err => setError(err))
// }



// movie id 841755


// movie videos https://api.themoviedb.org/3/movie/841755/videos?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US


// page details https://api.themoviedb.org/3/movie/841755?api_key=41f62205eb96431e74d58bc8998a848d&language=en-US