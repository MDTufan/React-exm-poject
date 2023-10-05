import React from 'react'
import  "../Css/Main.css"
const Card2 = ({card}) => {

  const deliteadd=(e)=>{
console.log("gggggggg");
  };
 
  return (
   <div className="card-2 ">
    <div className="mt-5 p-3">
   <div className="xx-card">
    <h1>Card Details</h1>
    <img className='img-card' src={card.image} alt="" />
    <h3 className='ddee fw-bold'>${card.price}</h3>
                
                {/* <h1>{id}</h1> */}
                
                <p className="card-text fw-bold">Category:{card.category}</p>
                <p className='fw-bold'>Title:{card.title}</p>

      
   </div>
   

    </div>
   </div>
  )
}

export default Card2
