import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuth } from "../redux/user/userSelectors";



export const PrivateRoute = (props) => {
    const isAuth = useSelector(getIsAuth);
    
    return isAuth ? props.children : <Navigate to='/'/>
}