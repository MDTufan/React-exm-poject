import img from "../../assets/blog1.png"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.jpg"
import img7 from "../../assets/7.jpg"
import img8 from "../../assets/avatar3.png"
import img9 from "../../assets/avatar2.png"
import img10 from "../../assets/avatar1.png"
import "../About.css/About.css"
import  "../Css/Main.css"
import { tabTitle } from "../../../Title"
import { Link } from "react-router-dom"

const About = () => {

  tabTitle("React App | About");
  return (
    <div>
      <div className="container">
      <div className="py-5">
        <div className="row py-5 mt-5">
         
         <div className="col-12 col-md-6  p-4 py-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <h1 className="text-white">Exclusive collection for everyone</h1>
            <h4 className="text-white mt-5">In this season, find the best</h4>
            <p className="text-white mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <div className="pt-5">
            <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
          </div>
          <div className="col-12 col-md-6  p-4 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="img-design1 ">
            <img className="xxx-img xxxx x4" src={img} alt="" />
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className="bg-white bgc">
        <div className="container">
        <div className="row py-5">
          
          <div className="col-12 col-md-6  p-4 py-5 "  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="img-design2">
            <img className="xxx-img xxxx box-1" src={img1} alt="" />
            </div>
          </div>
          <div class="col-12 col-md-6  p-4 " >
               <div className="ccc py-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               
                        <h1 class="py-3 text-black">We are marketpress</h1>
                        <p class="p-1clor">Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        <ul>
                            <li className="">Credibly innovate granular internal</li>
                        </ul>
                        <ul>
                            <li className="">Grantedly underconstructions reloaded</li>
                        </ul>
                        <ul>
                            <li className="">Interactively procrastinate high-payoff</li>
                        </ul>
                        <ul>
                            <li className="">Completely synergize resource taxing relationships</li>
                        </ul>
                         <div className="pt-5">
                         <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
                          </div>
                        </div>         
          </div>
        </div>
        </div>
      </div>
      <div className="">
      <div className="poject">
       
       <section >
         <div class="container">
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
             <h1 class=" text-center text-white py-5">Latest <span>Projrct</span> <span>Service</span></h1>
         </div>
         </div>
         <div class="container">
             
             <div className="row py-5">
               <div className="col-12 col-md-4  p-4">

               <div class="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
               
               <div class="container1">
              
               <img className="x5" src={img7} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
                 
               </div>
               
              </div>
              <h2 className="text-white text-center">Poject-1</h2>
               </div>
               <div className="col-12 col-md-4  p-4">
               <div class="card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               
               <div class="container1">
               
               <img className="x5" src={img6} alt="" />
                 <div class="overlay">
                 <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
              <h2 className="text-white text-center">Poject-2</h2>
               </div>
               <div className="col-12 col-md-4  p-4">
               <div class="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
               
               <div class="container1">
               
               <img className="x5" src={img2} alt="" />
                 <div class="overlay">
                 <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
              <h2 className="text-white text-center">Poject-3</h2>
               </div>
             </div>
            
            
           </div>
           <div class="container">
             
             <div className="row py-5">
               <div className="col-12 col-md-4  p-4">
               <div class="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
               
               <div class="container1">
               
               <img className="x5" src={img3} alt="" />
                 <div class="overlay">
                 <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
              <h2 className="text-white text-center">Poject-4</h2>
               </div>
               <div className="col-12 col-md-4  p-4">
               <div class="card" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               
               <div class="container1">
               
               <img className="x5" src={img4} alt="" />
                 <div class="overlay">
                 <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
              <h2 className="text-white text-center">Poject-5</h2>
               </div>
               <div className="col-12 col-md-4  p-4">
               <div class="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
               
               <div class="container1">
               
               <img className="x5" src={img5} alt="" />
                 <div class="overlay">
                 <div class="text">
                     <h3 class="h3-1 fs-3 mt-5 text-black">Web Development</h3>
                     <p class="p-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn btn-danger btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
              <h2 className="text-white text-center">Poject-6</h2>
               </div>
             </div>
            
            
           </div>
       </section>
     
      
         </div>
      </div>

      <div className="container">
        <div className="row bg-white mb-5" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="col-12">
<h1 className="text-center text-black mt-5 mb-4">Testimonials</h1>
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  
  <div class="carousel-inner  mb-5">
    <div class="carousel-item active text-center mb-5" data-bs-interval="1000">
      <img src={img8} class=" rounded-circle width-1 mt-3" alt="..."/>
      <h2 className="text-black mt-5">Jacob Sikim </h2>
      <p className="">Local shop owner</p>
      <p className="text-black fs-4">" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
      </p>
      
    </div>
    <div class="carousel-item text-center mb-5" data-bs-interval="1000">
    <img src={img9} class=" rounded-circle  width-1 mt-3" alt="..."/>
      <h2 className="text-black mt-5"> David Niph </h2>
      <p className="">Local shop owner</p>
      <p className="text-black fs-4">" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
      </p>
    </div>
    <div class="carousel-item text-center mb-5" data-bs-interval="1000" >
    <img src={img10} class=" rounded-circle  width-1 mt-3" alt="..."/>
      <h2 className="text-black mt-5">Saira Hakim  </h2>
      <p className="">Local shop owner</p>
      <p className="text-black fs-4">" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
    </p>
    </div>
  </div>
  <button class="carousel-control-prev fs-1" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  fs-1 " aria-hidden="true"></span>
    <span class="visually-hidden ">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         </div>
        </div>
      </div>

    </div>
  )
}

export default About
