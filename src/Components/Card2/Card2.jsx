import React from 'react'
import  "../Css/Main.css"
const Card2 = ({card}) => {

  const deliteadd=(e)=>{
console.log("gggggggg");
  };
 
  return (
   <div className="card-2">
    <div className="mt-5 p-3">
   <div className="xx-card">
    <h1>Card Details</h1>
    <img className='img-card' src={card.image} alt="" />
    <h3 className='ddee fw-bold'>${card.price}</h3>
                
                {/* <h1>{id}</h1> */}
                
                <p className="card-text fw-bold">Category:{card.category}</p>
                <p className='fw-bold'>Title:{card.title}</p>

      {/*  */}
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={deliteadd}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

     {/*  */}
   </div>
   

    </div>
   </div>
  )
}

export default Card2
