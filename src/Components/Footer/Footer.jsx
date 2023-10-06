import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaFacebookMessenger,FaTwitterSquare,FaGithubSquare} from "react-icons/fa";
import  "../Css/Main.Css"
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/11.png"

const Footer = () => {
  return (
    <div className='bg-info'>
      <div className="container">
            <div className="row">
               <div className ="col-12 col-sm-3 col-md-3 py-4">
               <h6 className="text-black fs-2 ">Adderes</h6>

                    <p className="pt-2">Creative UI/UX Design We Have. Make <br />
                        For Your Own Now. </p>
                        <p className='text-black'>123 Street, New York, USA</p>
                        <p className='text-black' >+012 345 67890</p>
                        <p className='text-black'>info@example.com</p>
                        <div className="ff">
                          <FaFacebookSquare className='xzxz  mx-2'/>
                          <FaFacebookMessenger  className='xzxz mx-2'/>
                          <FaTwitterSquare className='xzxz mx-2' />
                          <FaGithubSquare className='xzxz mx-2' />
                        </div>
                  
                </div> 
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-black fs-2">Quick Link</h6>
                 
                     <div className="link-footer">
                        <Link className='nav-link' to="">Home</Link> 
                        <Link className='nav-link' to="">Product</Link > 
                        <Link  className='nav-link' to="">Career</Link > 
                       
                        <Link  className='nav-link' to="">Pricing</Link >
                     </div> 
                    
    
                </div>
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-black fs-2">Service</h6>
                   
                        <div className="link-footer">
                        <Link  className='nav-link' to="">Web Design & Development</Link >
                        <Link  className='nav-link' to="">Graphics Design</Link >
                        <Link  className='nav-link' to="">Graphics Design</Link >
                        <Link  className='nav-link' to="">UI/Ux Design</Link > 
                        </div>
                    
                </div>
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-black fs-2">Support</h6>
                 
                        <div className="link-footer">
                        <Link className='nav-link' to="">Company</Link >
                       <Link className='nav-link' to="">Press Media</Link >
                        <Link  className='nav-link' to="">Our Blogs</Link >
                        <Link  className='nav-link' to="">Contact Us</Link >
                        </div>
                 
    
                </div>
                <div className="col-12 col-sm-3 col-md-3 py-4 ">
                    <h6 className="text-black fs-2">News Letter</h6>
                    <p>Subcribe To Receive Future <br /> Update</p>
                    <div className="d-flex bg-white py-2 rounded-pill">
                        <div className="">
                        <img className="ff-img1 p-2" src={img1} alt="" />
                        </div>
                        <div className="mx-auto">
                        <div className=" text-center ">
                        <FaStar className="text-warning " />
                          <FaStar className="text-warning " />
                          <FaStar className="text-warning " />
                          <FaStar className="text-warning " />
                          <FaStar className="text-warning " />
                        
                          
                        </div>

                          <p className="text-center ">Tufan Ali,form hear.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Footer;
