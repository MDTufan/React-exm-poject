import { useContext } from "react"
import { AuthContext } from "../Context/UserContext"
import { Navigate } from "react-router-dom";
import Loading from "../Share/Loading";


const ProviterRouter = ({children}) => {
const {user,loading}=useContext(AuthContext);
 if(loading){
    return <Loading />
 }
if(user){
    return children     
    }
 return <Navigate to="/login"> </Navigate>
}

export default ProviterRouter
