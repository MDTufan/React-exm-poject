import { useEffect, useState } from "react";

import  "../Css/Main.css"
import Card from "../Product/Card";
import Card2 from "../Card2/Card2";
import { tabTitle } from "../../../Title";



const Service = () => {

  tabTitle("React App | Service")
const [product,setProduct]=useState([]);
const [card,setcard]=useState([]);

const handelAddtoCard=(product)=>{

setcard(product)

}
useEffect (()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setProduct(data))
console.log(product);

},[]);


  return (
    <div className="d-flex">



  <div className="one">
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
</div>
</div>
  </div>

  <div className="two">
     <div className="position-1">
     <div className="container mt-5">
        <div className="row">
          <div className="col-12">
          <div className="ccc">
            <Card2 card={card} ></Card2> 
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
 </div>
  );
}

export default Service;
