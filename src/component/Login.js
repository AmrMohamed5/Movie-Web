import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h2> Sign in </h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              placeholder="Enter your password "
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember Email
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
        <span>Don't have an account? </span>
        <h6 style={{ display: "inline" }}>
          <Link style={{ textDecoration: "none", color: "black" }}>
            create a new account
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;

{
  /* <img
src="/login.jpg"
alt="myImage"
style={{ width: "30%", height: "auto" }}
/> */
}
