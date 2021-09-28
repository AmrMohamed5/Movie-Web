// Page Details for the movie
const Page = ({ movies, id, title }) => {
  const movie = movies.find((e) => e.title === title);
  return (
    <div className="container">
      <div className="page">
        <img
          style={{ width: "50vh" }}
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          className=""
          alt="movie"
        />
        <h1>{movie.title}</h1>
        <h3>{movie.overview}</h3>
      </div>
    </div>
  );
};

export default Page;
