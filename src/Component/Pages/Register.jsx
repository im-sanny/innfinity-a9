import { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const form = "/";

  const onSubmit = async (data) => {
    const { email, password, photoURL, username } = data;

    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password should be at least 6 characters or longer",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("password", {
        type: "manual",
        message: "Your password should have at least one uppercase character",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("password", {
        type: "manual",
        message: "Your password should have at least one lowercase character",
      });
      return;
    }

    setLoading(true);

    createUser(email, password)
    updateUserProfile(username, photoURL)
      .then(() => {
        toast.success("Registration successful!");
        navigate(form);
      })
      .catch(() => {
        toast.error("Registration failed. Please try again.");
      });

    setLoading(false);
  };

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Innfinity | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-300 rounded-lg my-5">
        <div className="hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Register now to create your account and start exploring our
              platform!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input input-bordered"
                  required
                  {...register("username", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL")}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input w-full input-bordered"
                    // required
                    {...register("password", { required: true })}
                  />
                  <span
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                  {errors.password && (
                    <span className=" text-red-600 mt-1 ml-2">
                      {errors.password.message}
                    </span>
                  )}
              </div>
              <div className="form-control mt-2">
                <button
                  onClick={toast}
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
            <div className="text-center -mt-5 mb-3">
              Already have an account?
              <Link to="/login" className="text-blue-500 ml-2 hover:underline">
                Login here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
