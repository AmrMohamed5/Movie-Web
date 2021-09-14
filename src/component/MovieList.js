import Movie from "./Movie";
const MovieList = ({movies}) => {
    return ( 
        <div className="container">
 {movies.map((e) => <Movie title={e.title}  poster={e.backdrop_path} overview={e.overview}  rate={e.vote_average}  date={e.release_date} />
)}
        </div>
     );
}
 
export default MovieList;