/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 rounded-lg my-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h2 className="text-center text-2xl font-bold">Please Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-blue-500">
                Register{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
