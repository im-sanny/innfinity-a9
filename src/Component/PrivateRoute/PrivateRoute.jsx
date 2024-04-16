import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { DNA } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <DNA
          visible={true}
          height="200"
          width=""
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
