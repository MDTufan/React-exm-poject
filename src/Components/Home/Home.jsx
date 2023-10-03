import  "../Css/Main.css"
import img from "../../assets/c-2.png"
const Home = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="text-white">hwloo</h1>
            <h4 className="text-white"> ttttt</h4>
            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem ullam, minima voluptatibus sunt autem sit magnam </p>
            <button className="btn btn-info">click me</button>
          </div>
          <div className="col-6 ">
            <div className="img-design">
            <img className="xxx-img" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
      < div className='Blog'>
        <div className="container">
          <h1 className='xx-4'>This is Blogs Pages</h1>
          <div className="row blog">
        <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-info'>HTML</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card R" >
          
            <h2 className='text-info'>CSS</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
              </div>
            </div>
          </div>
        <div className="col-12 col-lg-4 col-md-4  col-sm-12  ">
            <div class="card R" >
          
            <h2 className='text-info'>JAVASCRIPT</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
              </div>
            </div>
          </div>
          </div>
          <div className="row blog">
          <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-info'>BOOTSTRAP</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-info'>REACT</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4  col-sm-12 ">
            <div class="card R" >
          
            <h2 className='text-info'>NODE&EXPRESS</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in porro reprehenderit.</p>
              <div className="btn-2">
              <a href="#" className="btn-1">Read More</a>
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
