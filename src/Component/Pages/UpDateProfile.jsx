import { Helmet } from "react-helmet";
import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const UpDateProfile = () => {
  const { user, updateUserProfile } = UseAuth();
  const { handleSubmit, register, reset } = useForm();
  const [localUser, setLocalUser] = useState(user);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { fullName, image } = data;
    try {
      setLoading(true);
      await updateUserProfile(fullName, image);
      setLocalUser({
        ...localUser,
        displayName: fullName,
        photoURL: image,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
    reset();
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Innfinity | UpdateProfile</title>
      </Helmet>

      <section className="pb-">
        <div className="flex justify-center my-5 bg-blue-200 rounded-lg py-5">
          <div
            data-aos="zoom-in"
            className="flex flex-col justify-center items-center max-w-md p-6 shadow-md rounded-xl sm:px-12 glass"
          >
            <img
              src={localUser?.photoURL || ""}
              alt=""
              className="w-40 h-40 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <p className="text-2xl mt-2 font-bold">
              {localUser?.displayName || ""}
            </p>
            <h1 className="text-3xl lg:text-3xl font-extrabold my-4">
              Update Profile
            </h1>
            <p className="text-center text-sm sm:text-base mb-8">
              Please provide the required information to update your profile
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                  {...register("fullName")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full"
                  {...register("image")}
                />
              </div>
              <button
                type="submit"
                className="w-full btn  text-lg py-2 mt-3 font-semibold rounded-lg"
              >
                {loading ? "Updating..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpDateProfile;
