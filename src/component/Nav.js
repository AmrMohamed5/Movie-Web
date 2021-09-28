import { Link } from "react-router-dom";

const Nav = ({ setSearch, searchValue, fetchMore }) => {
  return (
    <nav className="navbar container navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          Cinematic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            style={{ margin: "auto" }}
            onSubmit={searchValue}
            className="d-flex"
          >
            <input
              style={{ width: "30vw" }}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <Link to="login">
            <button
              style={{ margin: "0 5px" }}
              type="button"
              class="btn btn-light"
            >
              Sign in
            </button>
          </Link>
          <Link to="signUp">
            <button type="button" class="btn btn-light">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
