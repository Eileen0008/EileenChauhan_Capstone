import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import yourImage from "../images/fav.png"; 


const Navbar = () => {
  return (
    <><Link to="/">
    <img src={yourImage} alt="Your Image" className="image-logo"/>
    </Link>
    <div className="navbar">
    
    <Link to="/property">
      <h2>PROPERTY</h2>
      </Link>
      <Link to="/about">
       <h2>ABOUT
        </h2>
      </Link>
      <Link to="/contact">
        <h2>CONTACT</h2>
      </Link>
      <Link to="/login">
        <h2>LOGIN</h2>
      </Link>
  </div>
    </>
    
  );
};

export default Navbar;