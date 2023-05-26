import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 " style={{background: "#9eecff"}} >
      <div className="container-fluid ">
        <a className="navbar-brand me-5" href="#">
            Contact Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"> 

              <Link to={"/"} className="nav-link active" aria-current="page">
                Add Contact
              </Link>

            </li>
            <li className="nav-item">

              <Link to={"/read"} className="nav-link active" aria-current="page" >
                All Contact
              </Link>

            </li>
        
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
