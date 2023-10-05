
import "../Css/Main.css"
import { Link } from "react-router-dom"
import "../Login.css/LogIn.css"


const SignUp = () => {
  return (
    <div className="py-5">
          <div className="container">
    <div className="row">
      <div className="col-12 my-5 ">
    <form className="bg-white rounded form-size mx-auto text-center mt-5">

  <div class="form-row  p-5 mt-5 ">
    <div className="">
    <h1>SingUp</h1>
    <div class="form-group ">
      <label for="inputEmail4">Name:</label>
      <input type="email" class="form-control py-3 border border-info" id="inputEmail4" />
    </div>
    <div class="form-group ">
      <label for="inputEmail4">Email:</label>
      <input type="email" class="form-control py-3 border border-info" id="inputEmail4" />
    </div>
    <div class="form-group ">
      <label for="inputPassword4">Password:</label>
      <input type="password" class="form-control py-3 border border-info" id="inputPassword4" />
    </div>
    </div>
  </div>
  
  
  <div className="">
    <Link to="/login" >Already Have An Accounts</Link>
  </div>
  
  <button type="submit" class="btn btn-info py-3 px-5 mt-5 btn-des">Sign in</button>
</form>
      </div>
    </div>
</div>
</div>

  );
}

export default SignUp;
