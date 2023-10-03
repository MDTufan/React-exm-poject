import React from 'react'
import  "../Css/Main.css"
const Card2 = ({card}) => {
  console.log(card);
  return (
    <div className='ddd'>
     <div className="card-1">
             <div className="card p-2 my-5 vvv " >
            <div className="">
            <img className='img-card' src={card.image}  alt="..." />
            <div className="card-body p-5 text-black">
                <h3>{card.price}</h3>
                {/* <h1>{title}</h1> */}
                {/* <h1>{id}</h1> */}
                
                <p className="card-text">{card.category}</p>
                <div className="pt-5">
                
          
            </div>
            </div>
            </div>
           
        </div>
           </div>
    </div>
  )
}

export default Card2
