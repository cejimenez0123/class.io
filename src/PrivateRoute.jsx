

import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  console.log("logged in", localStorage.getItem("token"))
  let token  = localStorage.getItem("token")
    return token? children : <Navigate to="/" />;
  };
export default PrivateRoute;

