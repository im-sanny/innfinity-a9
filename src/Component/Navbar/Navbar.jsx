import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import "animate.css";

const Navbar = () => {
  const { logOut, user } = UseAuth();
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/upDateProfile">Update Profile</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/userProfile">User Profile</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/coupon">Coupon</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <div className="btn btn-ghost text-xl animate__animated animate__tada">
            Innfinity
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal space-x-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <label
                  tabIndex={0}
                  className="btn  btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || ""} />
                  </div>
                </label>
              </div>
              <button onClick={logOut} className="btn btn-ghost font-bold text-lg">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to={"/login"}>
              <button className="btn btn-ghost font-bold text-lg">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
