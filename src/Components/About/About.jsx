import img from "../../assets/blog1.png"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.jpg"
import img7 from "../../assets/7.jpg"
import  "../Css/Main.css"

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-6">
            <h1 className="text-white">hwloo</h1>
            <h4 className="text-white"> ttttt</h4>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <button className="btn btn-info">click me</button>
          </div>
          <div className="col-6 ">
            <div className="img-design">
            <img className="xxx-img xxxx" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bgc">
        <div className="container">
        <div className="row py-5">
          
          <div className="col-6 ">
            <div className="img-design">
            <img className="xxx-img xxxx" src={img1} alt="" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 " >
                        <h6 class="py-3 text-white">Our vision</h6>
                        <h1 class="py-3 text-white">We are marketpress</h1>
                        <p class="p-1clor text-white">Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        <ul>
                            <li className="text-white">Credibly innovate granular internal</li>
                        </ul>
                        <ul>
                            <li className="text-white">Grantedly underconstructions reloaded</li>
                        </ul>
                        <ul>
                            <li className="text-white">Interactively procrastinate high-payoff</li>
                        </ul>
                        <ul>
                            <li className="text-white">Completely synergize resource taxing relationships</li>
                        </ul>
                    </div>
        </div>
        </div>
      </div>
      <div className="">
      <div className="poject">
       
       <section >
         <div class="container">
           <div data-aos="zoom-in" >
             <h1 class=" text-center text-white py-5">Latest <span>Projrct</span> <span>Service</span></h1>
         </div>
         </div>
         <div class="container">
             
             <div className="row py-2">
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img7} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img6} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img2} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
             </div>
            
            
           </div>
           <div class="container">
             
             <div className="row py-2">
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img3} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img4} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
               <div className="col-4">
               <div class="card" >
               
               <div class="container1">
               
               <img src={img5} alt="" />
                 <div class="overlay">
                   <div class="text">
                     <h3 class="h3-1">Web Development</h3>
                     <p class="p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at, exercitationem culpa suscipit tempore voluptatum </p>
                     <div class="btn-92">
                       <a href="#" class=" btn-9">Download CV</a>
                     </div>
                   </div>
                 </div>
              
               </div>
              </div>
               </div>
             </div>
            
            
           </div>
       </section>
     
      
         </div>
      </div>

    </div>
  )
}

export default About
