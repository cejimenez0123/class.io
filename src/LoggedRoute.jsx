

import { Navigate } from 'react-router-dom';


export default LoggedRoute = ({ children }) => {
      return token? children : <Navigate to="/home" />;
    };

  