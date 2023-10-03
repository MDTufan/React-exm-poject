import { useEffect, useState } from "react";

import  "../Css/Main.css"
import Card from "../Product/Card";
import Card2 from "../Card2/Card2";



const Service = () => {
const [product,setProduct]=useState([]);
const [card,setcard]=useState([]);

const handelAddtoCard=(product)=>{

setcard(product)
// console.log(product);
}
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setProduct(data))

},[]);


  return (
    <div>
   <div className="container ">
    
   <div className="hhxx">
    <div className="hhxxx">
    
              {
              product.map((product ,id)=>{
                
                return(
                  
                      <Card  key={id} product={product} handelAddtoCard={handelAddtoCard} />
                )
          })

            }
   
    </div>
   <div className="ccc">
   <Card2 card={card} ></Card2> 
   </div>
   </div>
   
    
   </div>
  
    </div>
  );
}

export default Service;
