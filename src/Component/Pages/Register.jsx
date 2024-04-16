import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigation system
  const navigate = useNavigate();
  const form = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    //create user and update profile
    createUser(email, password)
    .then(() => {
      updateUserProfile(fullName, image)
       .then(() => {
         navigate(form);
      });
    });
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
                  {...register("username", { required: true })}
                />
                {errors.username && <span>This field is required</span>}
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
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
