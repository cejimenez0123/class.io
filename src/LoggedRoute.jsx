import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from './context';
const LoggedRoute = ({  children }) => {
       const {token}= useContext(MyContext)
      return token?  <Navigate to="/home" />:children ;
    };
//if loggedin go home
    export default LoggedRoute