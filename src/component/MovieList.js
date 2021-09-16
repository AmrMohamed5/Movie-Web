import { Link } from "react-router-dom";
import Movie from "./Movie";
const MovieList = ({movies}) => {
    return ( 
        <>
 {movies.map((e) =>
 <Movie title={e.title}  poster={e.backdrop_path} overview={e.overview}  rate={e.vote_average} iD={e.id} />
 )}
        </>
     );
}
 
export default MovieList;