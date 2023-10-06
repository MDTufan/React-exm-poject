import "../Css/Main.css"
import { Link } from "react-router-dom"
import "../Login.css/LogIn.css"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/UserContext"
import { sendPasswordResetEmail,getAuth } from "firebase/auth"
import app from "../../Firebase/Firebase.init"
import { tabTitle } from "../../../Title"
const LogIn = () => {

  tabTitle("React App | LogIn");

  const auth = getAuth(app);
  const {loginUser}=useContext(AuthContext);

const [userEmail,setuserEmail]=useState("");
const [success,setsuccess]=useState(false);

  const handelEmailBluer =(event)=>{
    const email=event.target.value;
    console.log(email);
    setuserEmail(email);
  }


  const hendleFotgetpassword=()=>{
    if(!userEmail){
     alert("Plase Enter Your Email And Try Again")
    }
sendPasswordResetEmail(auth, userEmail)
.then(() => {
 alert("plase cheack your emall and reset password")
})
.catch((error) => {
 
 const errorMessage = error.message;
console.log(errorMessage);
});
 }






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
    setsuccess(true)
    form.reset()
    console.log("login");
  })
  .catch(error=>console.log(error))

}







  return (
    <div className="py-5">
   
   <div className="container">
    <div className="row">
      <div className="col-12 my-5 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <form onSubmit={hendelLogin} className="bg-white rounded form-size mx-auto text-center mt-5">

  <div class="form-row  p-5 mt-5 ">
    <div className="">
    <h1>LogIn</h1>
   
    <div class="form-group ">
      <label for="inputEmail4">Email:</label>
      <input type="email"  name="email" onBlur={handelEmailBluer} class="form-control py-3 border border-info" id="inputEmail4" />
    </div>
    <div class="form-group ">
      <label for="inputPassword4">Password:</label>
      <input type="password" name="password" class="form-control py-3 border border-info" id="inputPassword4" />
    </div>
    </div>
  </div>
  
  
  <div className="">
    <Link className="btn text-primary" to="/signup" >Create A New Accounts</Link>
  </div>
  {
        success && <div>
            <p className="text-success">SuccessFully Login</p>
        </div>
     }
  
  <input type="submit" class="btn btn-info py-3 px-5 mt-2 btn-des" value="LogIn"></input>

  <div className="">

<p className=" pt-2 text-primary">Forget password </p>
<button className="btn btn-info py-3 px-5  btn-des " onClick={hendleFotgetpassword}  >Plase Reset</button>
</div>
  
</form>
      

      


      </div>
    </div>
   </div>

    </div>

  )
}

export default LogIn
