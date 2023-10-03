import Clock from "../Clock/Clock"
import img from "../../assets/c-3.png"
import "../Contact.css/Contact.css"
import  "../Css/Main.css"


const Contact = () => {
  return (
    <div className="">
   <div className="container">
   <div className="row py-5">
          <div className="col-6 py-5">
          <div className="py-2">
          <h1 className="text-white">Exclusive collection for everyone</h1>
            <h4 className="text-white">In this season, find the best</h4>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <div className="pt-5">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
          </div>
          </div>
          <div className="col-6 ">
            <div className="img-design">
            <img className="xxx-img img-1" src={img} alt="" />
            </div>
          </div>
        </div>
   </div>
    
    
      <div className="row py-5">
        <div className="col-12">
        <div className=''>
     <div className="">
              <h1 className="text-center text-white py-4">This Is Google Map</h1>
      </div>
      <div className="map">
            <iframe className="map py-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57810.404607566685!2d89.02271261001017!3d25.096773484926903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc920e30f74a01%3A0x79daa6e9aa5ecdff!2sJoypurhat!5e0!3m2!1sen!2sbd!4v1690550887462!5m2!1sen!2sbd" ></iframe>
        </div>
        {/* <Clock /> */}
        </div>
        
    </div>
        </div>
     
    <div className="x9 py-5">
    <div class="container">
        <div class="row py-5">
        <form class="row g-3">
          <h1 className="text-center text-white">Contact Me?</h1>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label text-white">Email</label>
    <input type="email" className="form-control x99" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label text-white">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label text-white">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label text-white">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label text-white">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label text-white">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label text-white">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label text-white" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Contact
