

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from './context';
const PrivateRoute = ({ children }) => {
  const {token}=useContext(MyContext)
    return token ? children : <Navigate to="/" />;
  };
export default PrivateRoute;

