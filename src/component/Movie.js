const Movie = ({title,poster,rate,date}) => {
    return ( 
        <div key={Math.random()} className="card" style={{width:'18rem'}}>
        <img src={`https://image.tmdb.org/t/p/w1280${poster}` } className="card-img-top" alt="movie"/>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>Movie Date :  {date}</p>
          <div className="icons">
          <i className="fas fa-play"></i>
          <i className="fas fa-star">{rate}</i>
          </div>
                  </div>
        </div>
     );
}
 
export default Movie;


