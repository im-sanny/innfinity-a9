import { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);

  // Navigation system
  const navigate = useNavigate();
  const form = "/";

  const onSubmit = async (data) => {
    const { email, password, photoURL, username } = data;

    // Password verification
    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      setError("password", {
        type: "manual",
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long",
      });
      return;
    }

    setLoading(true);

    try {
      // Create user and update profile
      await createUser(email, password);
      await updateUserProfile(username, photoURL);

      // Show success toast
      toast.success("Registration successful!");

      // Navigate to login page
      navigate(form);
    } catch (error) {
      // Show error toast
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
                {/* {errors.username && <span className="text-red-600">This field is required</span>} */}
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
                {/* {errors.email && <span className="text-red-600">This field is required</span>} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button
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
