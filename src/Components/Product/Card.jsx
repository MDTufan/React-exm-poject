import React from 'react'
import { Link } from "react-router-dom";
import  "../Css/Main.css"
const Card = ({product,handelAddtoCard}) => {
   
   
   
  return (
   
         
           <div className="card-1">
             <div className="card p-2 my-5 vvv " >
            <div className="">
            <img className='img-card' src={product.image}  alt="..." />
            <div className="card-body p-5 text-black">
                <h3>{product.price}</h3>
                {/* <h1>{title}</h1> */}
                {/* <h1>{id}</h1> */}
                
                <p className="card-text">{product.category}</p>
                <div className="pt-5">
                
            <button onClick={()=>handelAddtoCard(product)} className="btn btn-info py-3 px-5 btn-des"> click me </button>
            </div>
            </div>
            </div>
           
        </div>
           </div>
            
        
         
   
    
  )
}

export default Card
