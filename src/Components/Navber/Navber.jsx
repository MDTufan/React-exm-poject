import { NavLink } from "react-router-dom";


const Navber = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-color">
  <div className="container">
    <a className="navbar-brand " href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link  active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  " aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navber;
