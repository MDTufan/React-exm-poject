import Clock from "../Clock/Clock"
import img from "../../assets/c-3.png"
import img1 from "../../assets/11.png"
import "../Contact.css/Contact.css"
import { FaStar } from "react-icons/fa";
import  "../Css/Main.css"
import { FaMapMarkerAlt,FaPhoneVolume,FaEnvelope } from "react-icons/fa";
import { tabTitle } from "../../../Title";
import { Link } from "react-router-dom";


const Contact = () => {
  tabTitle("React App | Contact");
  return (
    <div className="">
   <div className="container">
   <div className="row py-5 mt-5">
          <div className="col-12 col-md-6 mt-5 p-4 py-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div className="py-2 mt-4">
          <h3 className="text-info">"WonderFull,,</h3>
          <h1 className="text-white">Exclusive collection for everyone</h1>
            <h4 className="text-white mt-5">In this season, find the best</h4>
            <p className="text-white mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <div className="pt-5">
            <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-6 p-4 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="">
            <img className="img-1 img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
   </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 d-flex bg-white py-3 rounded-pill" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="">
          <img className="ff-img" src={img1} alt="" />
          </div>
          <div className="">
           <div className=" text-center ">
           <FaStar className="text-color90 " />
            <FaStar className="text-color90 " />
            <FaStar className="text-color90 " />
            <FaStar className="text-warning " />
            <FaStar className="text-warning " />
          
            
           </div>

            <p className="text-center p-2">Aenean molestie mauris eget sapien sagittist</p>
          </div>
          
        </div>
        <div className="col-12 col-md-4">

        </div>
        <div className="col-12 col-md-4">

        </div>
      </div>
    </div>
    
      <div className="container">
      <div className="row py-5">
        <div className="col-12">
        <div className=''>
     <div className="">
              <h1 className="text-center text-info py-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">This Is Google Map</h1>
      </div>
      <div className="map" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <iframe className="map py-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57810.404607566685!2d89.02271261001017!3d25.096773484926903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc920e30f74a01%3A0x79daa6e9aa5ecdff!2sJoypurhat!5e0!3m2!1sen!2sbd!4v1690550887462!5m2!1sen!2sbd" ></iframe>
        </div>
       
        </div>
        
    </div>
        </div>
      </div>
     <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 d-flex" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <FaMapMarkerAlt className="text-color90 text-center mt-2 rounded bg-info p-2 font   " />
          <p className="text-info px-3 mt-3 fs-5 ">43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
        <div className="col-12 col-md-4 col-md-4  d-flex" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <FaPhoneVolume className="text-color90 text-center mt-2 rounded bg-info p-2 font   " />
         <p  className="text-info px-3 mt-3 fs-5 ">+1 294 3925 3939</p>
        </div>
        <div className="col-4 d-flex" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <FaEnvelope className="text-color90 text-center mt-2 rounded bg-info p-2 font   " />
          <p  className="text-info px-3 mt-3 fs-5 ">info@yourdomain.com</p>
        </div>
      </div>
     </div>
    <div className="x9 py-5 ">
    <div class="container">
        <div class="row py-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <form class="row g-3 bg-white p-5" >
        <h1 className="text-black text-center">Contact Me?</h1>
          <h2 className="text-black">You know, Contact Form</h2>
  <div class="col-md-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputEmail4" class="form-label text-black fs-2">Email</label>
    <input type="email" className="form-control x99 py-3  " id="inputEmail4" placeholder="Enter Your Email"/>
  </div>
  <div class="col-md-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputPassword4" class="form-label text-black fs-2">Password</label>
    <input type="password" class="form-control py-3 x99" id="inputPassword4"  placeholder="Enter Your Password"/>
  </div>
  <div class="col-12" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputAddress" class="form-label text-black fs-2">Address</label>
    <input type="text" class="form-control py-3 x99" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputAddress2" class="form-label text-black fs-2"> Present Address</label>
    <input type="text" class="form-control py-3 x99" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputCity" class="form-label text-black fs-2">City</label>
    <input type="text" class="form-control py-3 x99" id="inputCity" placeholder="Your Live City"/>
  </div>
  <div class="col-md-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <label for="inputState" class="form-label text-black fs-2">Skills</label>
    <select id="inputState" class="form-select py-3 x99">
      <option selected>Choose...</option>
      <option>HTML</option>
      <option>CSS</option>
      <option>Javascript</option>
      <option>Node</option>
    </select>
  </div>
  
 
  <div class="col-12">
    <button type="submit" class="btn btn-info btn-des mt-3  py-3 px-4 rounded-pill">Send Massage</button>
  </div>
</form>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Contact
