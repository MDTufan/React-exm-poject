import  "../Css/Main.css"
import "../Home.css/Home.css"
import { FaStar } from "react-icons/fa";
import img from "../../assets/c-2.png"
const Home = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-6 mt-5  ">
          <div className="p-4 mt-5">
          <h1 className="text-white">Exclusive collection for everyone</h1>
            <h4 className="text-white">In this season, find the best</h4>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
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
      <div className="">
      < div className='Blog'>
        <div className="container">
          <h1 className='xx-4 text-white'>This is Blogs Pages</h1>
          <div className="row blog">
        <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-info py-3'>HTML</h2>
             <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
          
            <h2 className='text-info py-3'>CSS</h2>
             <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
          
            <h2 className='text-info py-3'>JAVASCRIPT</h2>
             <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
          
            <h2 className='text-info py-3'>BOOTSTRAP</h2>
             <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
          
            <h2 className='text-info py-3'>REACT</h2>
             <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
          
            <h2 className='text-info py-3'>NODE&EXPRESS</h2>
             <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
             <div className="">
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="text-warning" />
             <FaStar className="" />
             <FaStar className="" />
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
