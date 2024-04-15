import UseAuth from "../hooks/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin } = UseAuth();
  return (
    <>
      <div>
        <div className="divider divider-neutral">Continue with</div>
      </div>
      <div className="flex justify-center pb-5 mt-2 gap-2">
        <button
          onClick={() => googleLogin()}
          type="submit"
          className=" font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 btn-sm text-blue-500 rounded-lg text-lg flex justify-center items-center gap-2"
        >
          <FcGoogle size={20}></FcGoogle> Google
        </button>

        <button
          onClick={() => githubLogin()}
          type="submit"
          className=" font-medium bg-blue-50 hover:bg-blue-100 hover:text-black-600 btn-sm text-black-500 rounded-lg text-lg flex justify-center items-center gap-2"
        >
          <FaGithub size={20}></FaGithub> Github
        </button>

        <button
          onClick={() => twitterLogin()}
          type="submit"
          className=" font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 btn-sm text-blue-500 rounded-lg text-lg flex justify-center items-center gap-2"
        >
          <FaSquareXTwitter size={20}></FaSquareXTwitter> Twitter
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
