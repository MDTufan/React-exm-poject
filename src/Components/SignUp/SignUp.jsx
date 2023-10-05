
import "../Css/Main.css"
import { Link } from "react-router-dom"
import "../Login.css/LogIn.css"
import { AuthContext } from "../Context/UserContext"
import { useContext } from "react"


const SignUp = () => {


  
  const { createUser,googleUser}=useContext(AuthContext);
 


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
    

    createUser(email,password)
    .then( result=>{
      const user=result.user;
   
      alert("You Are Successfully SingUp")
      form.reset()
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="py-5">
          <div className="container">
    <div className="row">
      <div className="col-12 my-5 ">
    <form onSubmit={hendelSingUp} className="bg-white rounded form-size mx-auto text-center mt-5">

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
    <Link to="/login" >Already Have An Accounts</Link>
  </div>
  
  <div className="">
  <input type="submit" class="btn btn-info py-3 px-5 mt-3 btn-des" value="SingUp"></input>
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
