import { useContext } from "react"
import { AuthContext } from "../Context/UserContext"
import { Navigate } from "react-router-dom";


const ProviterRouter = ({children}) => {
const {user}=useContext(AuthContext);

if(user){
    return children     
    }
 return <Navigate to="/login"> </Navigate>
}

export default ProviterRouter
