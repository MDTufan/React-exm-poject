import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaFacebookMessenger,FaTwitterSquare,FaGithubSquare} from "react-icons/fa";
import  "../Css/Main.Css"

const Footer = () => {
  return (
    <div className='bg-info'>
      <div className="container">
            <div className="row">
               <div className ="col-12 col-sm-3 col-md-3 py-4">
                    <img className=" footer-logu-size" src="img/logo-dark.svg" alt="" />
                    <p className="pt-2">Creative UI/UX Design We Have. Make <br />
                        For Your Own Now. </p>
                        <div className="ff">
                          <FaFacebookSquare/>
                          <FaFacebookMessenger />
                          <FaTwitterSquare />
                          <FaGithubSquare />
                        </div>
                  
                </div> 
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-white">Quick Link</h6>
                 
                     <div className="link-footer">
                        <Link className='nav-link' to="">Home</Link> 
                        <Link className='nav-link' to="">Product</Link > 
                        <Link  className='nav-link' to="">Career</Link > 
                       
                        <Link  className='nav-link' to="">Pricing</Link >
                     </div> 
                    
    
                </div>
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-white">Service</h6>
                   
                        <div className="link-footer">
                        <Link  className='nav-link' to="">Web Design & Development</Link >
                        <Link  className='nav-link' to="">Graphics Design</Link >
                        <Link  className='nav-link' to="">Graphics Design</Link >
                        <Link  className='nav-link' to="">UI/Ux Design</Link > 
                        </div>
                    
                </div>
                <div className="col-12 col-sm-2 col-md-2 py-4">
                    <h6 className="text-white">Support</h6>
                 
                        <div className="link-footer">
                        <Link className='nav-link' to="">Company</Link >
                       <Link className='nav-link' to="">Press Media</Link >
                        <Link  className='nav-link' to="">Our Blogs</Link >
                        <Link  className='nav-link' to="">Contact Us</Link >
                        </div>
                 
    
                </div>
                <div className="col-12 col-sm-3 col-md-3 py-4">
                    <h6 className="text-white">News Letter</h6>
                    <p>Subcribe To Receive Future <br /> Update</p>
                    <div className="">
                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Footer;
