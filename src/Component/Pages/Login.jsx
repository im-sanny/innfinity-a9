/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";

  //handle register
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password).then((result) => {
      if (result.user) {
        navigate(form);
      }
    });
  };

  return (
    <>
    <Helmet>
      <title>Innfinity | Login</title>
    </Helmet>
      <div className="hero min-h-screen bg-base-200 rounded-lg mb-5 lg:my-5 py-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
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
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
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
          <div className="">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
