import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("usertoken");
  return <>{loggedInUser ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;