import "../Css/Main.css"
import { Link } from "react-router-dom"
import "../Login.css/LogIn.css"
import { useContext } from "react"
import { AuthContext } from "../Context/UserContext"
const LogIn = () => {
  const {loginUser}=useContext(AuthContext);
const hendelLogin=(e)=>{
 
  console.log(loginUser);
  e.preventDefault();
  const form=e.target;
  const email=form.email.value;
  const password=form.password.value;
  console.log(email,password);
  loginUser(email,password)
  .then( result=>{
    const user=result.user;
 
    alert("You Are Successfully LogIn")
    form.reset()
    console.log("login");
  })
  .catch(error=>console.log(error))

}







  return (
    <div className="py-5">
   
   <div className="container">
    <div className="row">
      <div className="col-12 my-5 ">
    <form onSubmit={hendelLogin} className="bg-white rounded form-size mx-auto text-center mt-5">

  <div class="form-row  p-5 mt-5 ">
    <div className="">
    <h1>LogIn</h1>
   
    <div class="form-group ">
      <label for="inputEmail4">Email:</label>
      <input type="email" name="email" class="form-control py-3 border border-info" id="inputEmail4" />
    </div>
    <div class="form-group ">
      <label for="inputPassword4">Password:</label>
      <input type="password" name="password" class="form-control py-3 border border-info" id="inputPassword4" />
    </div>
    </div>
  </div>
  
  
  <div className="">
    <Link to="/signup" >Create A New Accounts</Link>
  </div>
  
  <input type="submit" class="btn btn-info py-3 px-5 mt-5 btn-des" value="LogIn"></input>
</form>
      </div>
    </div>
   </div>

    </div>

  )
}

export default LogIn
