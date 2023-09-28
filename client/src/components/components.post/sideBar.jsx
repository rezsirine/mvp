import React, { useState } from "react"
const SideBar=(props)=>{
const [query,setQuery] = useState("")
    return (
    <nav className="navbar bg-body-tertiary fixed-top">
    <div className="container-fluid">
    {/* <form className="d-flex search" role="search">
        <input className="form-control me-2"  onChange= {(e)=>setQuery(e.target.value)}type="search" placeholder="Search" aria-label="Search"/>
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.search(query)} style={{backgroundColor: "#7885d3"}}>Search</button>
      </form> */}
      <img className="navbar-brand"  src="" href="#"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"   data-bs-dismiss="offcanvas" aria-label="Close">Home</a>
            </li>
            <li className="nav-item">
           
<a   data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{cursor:"pointer"}} >
 Post
</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div class="delete_person">
                    <p>David</p>
                    <span class="material-symbols-outlined">person_remove</span>
                </div>
                <div class="delete_person">
                    <p>Jaxen</p>
                    <span class="material-symbols-outlined">person_remove</span>
                </div>
                <div class="delete_person">
                    <p>Lucie</p>
                    <span class="material-symbols-outlined">person_remove</span>
                </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default SideBar