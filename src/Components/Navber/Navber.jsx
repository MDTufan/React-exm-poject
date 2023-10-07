import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import "../Navber.css/Navber.css"
import img from "../../assets/logu.png"
import { FaMoon } from "react-icons/fa";



const Navber = () => {
 const {user,Logout}=useContext(AuthContext);
 
const[them,setthem]=useState("light-node");

const handelthem=()=>{
  if(them==="dark-mode"){
    setthem("light-node");
  }else{
    setthem("dark-mode");
  }
}
useEffect(()=>{
document.body.className=them;
},[them]);

 const handellogout=()=>{
  Logout();
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-color">
  <div className="container">
    <Link className="navbar-brand " to="/"><img className=" rounded-circle imgfluid" src={img} alt="" /> <span className="fs-3  mt-4">PestKit</span></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link  active fs-5" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 " aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5 " aria-current="page" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link fs-5" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" aria-current="page" to="/signup">SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" aria-current="page" to="/login">LogIn</NavLink>
        </li>
       {

        user?.uid ?<li className="nav-item">
        <button onClick={handellogout} className=" btn btn-danger  fs-5" >LogOut</button>
      </li>:<li className="nav-item">
          <button className=" btn btn-danger  fs-5"  >LogIn</button>
        </li>
       }
      
      <li>
      <img className='rounded-circle circle-size ' src={user?.photoURL} alt="" />
     </li>
       <li>
       <button onClick={handelthem} className="btn"><FaMoon className="dark" /></button>
       </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navber;
