import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("usertoken");
  console.log(loggedInUser);
  const isLoggedIn = false;
  return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
};

export default PublicRoute;
