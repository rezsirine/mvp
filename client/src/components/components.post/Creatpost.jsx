
import React, { useState } from 'react'

const Creatpost = (props) => {
    const [text,setText] =useState("")
    const [image,setImage] = useState("")


  return (
 <div>


<div className="tweetbox">

<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Your Post</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input className="form-control me-2"  onChange={(e)=>setText(e.target.value)} placeholder="What's happening"type="search"  aria-label="Search"/> 
      <label htmlFor="file">
                
                <div className="image-crete" >
                <input className="form-control me-2"  onChange={(e)=>setImage(e.target.value)} placeholder="Link Your Image"type="search"  aria-label="Search"/> 
                <span className="material-symbols-outlined">photo</span>

                </div>
              </label>
      </div>
      <div className="modal-footer">
        
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.createPost({text,image})} style={{backgroundColor: "#7885d3"}}>Post</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Creatpost