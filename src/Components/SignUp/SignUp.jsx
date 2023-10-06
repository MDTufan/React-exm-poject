
import "../Css/Main.css"
import { Link } from "react-router-dom"
import "../Singup.css/SignUp.css"
import { AuthContext } from "../Context/UserContext"
import { useContext, useState } from "react"
import { tabTitle } from "../../../Title"



const SignUp = () => {
  tabTitle("React App | SingUp")

  const { createUser,googleUser,verifyEmail}=useContext(AuthContext);

  const [passwordError,setpasswordError]=useState("");
 


  const handleGoogle=(e)=>{
    e.preventDefault();
    googleUser()
    .then( result=>{
      const user=result.user;
      
      alert("You Are Successfully SingUp")
      
    })
    .catch(error=>console.log(error))
  }

  const hendelSingUp=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setpasswordError("Plase provide At Last 2  Upparcase");
      return;
  };
 
     if(password.length < 8){
      setpasswordError("Plase provide At More than 8 charects");
      return;

  };
  if (!/(?=.*?[#!@$%&*].*?[#!@$%&*])/.test(password)){

    setpasswordError("Please give at least 2 special characters");

    return;
}

    createUser(email,password)
    .then( result=>{
      const user=result.user;
   
      alert("You Are Successfully SingUp")
      form.reset()
      verifyEmail()
      alert("Plase Check Ypur Email And Virify The Email Address.")
    })
    .catch(error=>console.log(error))


   
  }

  return (
    <div className="py-5">
          <div className="container">
    <div className="row">
      <div className="col-12 my-5 ">
    <form onSubmit={hendelSingUp} className="bg-white rounded form-size1 mx-auto text-center mt-5">

  <div class="form-row  p-5 mt-5 ">
    <div className="">
    <h1>SingUp</h1>
    <div class="form-group ">
      <label for="inputEmail4">Name:</label>
      <input type="text" name="name" class="form-control py-3 border border-info" id="inputEmail4" />
    </div>
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
    <Link className="btn text-primary" to="/login" >Already Have An Accounts</Link>
  </div>
  

  <p>{passwordError}</p>
  <div className="">
  <input type="submit" class="btn btn-info mx-5 py-3 px-5 mt-3 btn-des" value="SingUp"></input>
  </div>


  <button onClick={handleGoogle} class="btn btn-info py-3 px-5 mt-3 btn-des" >Google Singup</button>
    
      
</form>
        

      </div>
    </div>
</div>
</div>

  );
}

export default SignUp;
