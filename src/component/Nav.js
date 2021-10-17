import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({ setSearch, searchValue }) => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
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
          <div className="button-groups">
            {isAuthenticated && (
              <div>
                <h6>Hello {user.name}</h6>
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={() => logout()}
                >
                  Log out
                </button>
              </div>
            )}
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="btn btn-light"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
