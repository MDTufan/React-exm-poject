import  "../Css/Main.css"
import "../Home.css/Home.css"
import { FaStar } from "react-icons/fa";
import img from "../../assets/c-2.png"
import imgx1 from "../../assets/x1.png"
import imgx2 from "../../assets/x2.jpg"
import imgx3 from "../../assets/x3.jpg"
import imgx4 from "../../assets/x4.png"
import imgx5 from "../../assets/x5.png"
import imgx6 from "../../assets/x6.jpg"
import imgx7 from "../../assets/pd1.png"
import imgx8 from "../../assets/f2.jpg"
import imgx9 from "../../assets/f1.jpg"
import imgx10 from "../../assets/f3.jpg"
import imgx11 from "../../assets/cc2.png"
import imgx12 from "../../assets/cc3.png"

import { Link } from "react-router-dom";
import { tabTitle } from "../../../Title";


const Home = () => {


tabTitle("React App")

  return (
    <div className="py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-6 mt-5  ">
          <div className="p-4 mt-5">
          <h1 className="text-white">Exclusive collection for everyone</h1>
            <h4 className="text-white font-x mt-3">In this season, find the best</h4>
            <p className="text-white font-xx mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <div className="">
            
            </div>
            <div className="pt-5">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-sm-6">
            <div className="img-design ml-5 p-4">
            <img className=" img-3 img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>




<div className="container">
  <div className="row">
    <div className="col-12">
      <img className="cc-3" src={imgx11} alt="" />
    </div>
  </div>
</div>

      <div className=" py-5">
      < div className='Blog'>
        <div className="container">
          <h1 className='xx-4 text-white fw-bold fs-1'>Service</h1>
          <div className="row blog py-5">
        <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card color-7" >
          
           
             <img className="img-fluid img-size" src={imgx1} alt="" />
             <div className="">
              <p className="text-black text-center">123 Street, New York, USA</p>
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">32.5K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card  color-7" >
          
            <img className="img-fluid img-size" src={imgx2} alt="" />
            <p className="text-black text-center">23 Street, New York, USA</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">82K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card  color-7 " >
          
            <img className="img-fluid img-size" src={imgx3} alt="" />
            <p className="text-black text-center">03k Street, New York, USA</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">52.9K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row blog">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card  color-7 " >
          
           <img className="img-fluid img-size" src={imgx4} alt="" />
           <p className="text-black text-center">123 Street, New York, USA</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">37K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card  color-7 " >
          
            <img className="img-fluid img-size" src={imgx5} alt="" />
            <p className="text-black text-center">123 Street, New York, USA</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">49K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card  color-7" >
          
            <img className="img-fluid img-size" src={imgx6} alt="" />
            <p className="text-black text-center">123 Street, New York, USA</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">33.8K </h1>
              <div className="btn-2">
              <div className="pt-2">
              <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
            </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </ div>
      </div>





 <div className="main-img">
 <div className="container">
      <div className="py-5">
        <div className="row py-5">
         
         <div className="col-12 col-md-6 mt-3  p-4 py-5">
            <h1 className="text-warning">WoW!</h1>
            <h4 className="text-white"><span className="text-danger">35% </span>Discount.Amizeing</h4>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <div className="pt-5">
            <Link className="btn btn-info py-3 mb-5 px-5 btn-des " to="/service">Enroll Now</Link>
           
            </div>
            <img className="cc-3" src={imgx12} alt="" />
          </div>
          <div className="col-12 col-md-6  p-4 ">
            <div className="img-design1 ">
            <img className="mb-5" src={imgx7} alt="" />
            </div>
          </div>
         </div>
        </div>
      </div>
 </div>



      <div className="">
      < div className='Blog'>
        <div className="container">
          <h1 className='xx-4 text-white'>website Usage In Language</h1>
          <div className="row blog">
        <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>HTML</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx8} alt="" />
            
             <p className="p-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">32K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>CSS</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx9} alt="" />
             <p className="py-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">82K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>JAVASCRIPT</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx10} alt="" />
             <p className="py-3 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">52K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row blog">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>BOOTSTRAP</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx9} alt="" />
             <p className="py-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">37K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>REACT</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx8} alt="" />
             <p className="py-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">49K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-black py-3'>NODE&EXPRESS</h2>
            <img className=" mx-auto rounded-pill card-o" src={imgx10} alt="" />
             <p className="py-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-black" />
             <FaStar className="text-black" />
             </div>
             <h1 className="py-4 text-danger">33K </h1>
              <div className="btn-2">
              <div className="pt-2">
            <button className="btn btn-info py-3 px-5 btn-des">click me</button>
            </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </ div>
      </div>
    </div> 
                                      
  );
}

export default Home;
