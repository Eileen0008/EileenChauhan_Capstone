import React, { useEffect, useState } from "react";
import ListingCard from "../listingCard/ListingCard";
import "./HomePage.css"
import yourImage from "../images/pro1.jpg"; 
import pro2Image from "../images/pro2.jpg"; 
import pro3Image from "../images/pro3.jpg"; 

function HomePage() {
return (
  
<div className="landing-page">
      <h1>Welcome to Home Estate</h1>
      <p>We have our properties for you.</p>

      <div className="card-container">
        <div className="card">
        <h2>Victorian Family House</h2>
        <img src={yourImage} alt="Your Image" class="small-image" />
        <p><b>Est St, 77 - Central Park South, NYC</b></p> 
           <p><b>6 Bedrooms  3 Bathrooms</b></p>
           <p><b>$ 750,000</b></p>
             
        </div>

        
        <div className="card">
        <h2>Luxury Family House Villa</h2>
<img src={pro2Image} alt="Card 2" className="small-image" />
<p><b>Est St, 77 - Central Park South, NYC</b></p> 
           <p><b>4 Bedrooms  4 Bathrooms</b></p>
           <p><b>$ 550,000</b></p>
             
        </div>

        <div className="card">
        <h2>Modern Build Villa</h2>
        <img src={pro3Image} alt="Card 2" className="small-image" />
        <p><b>Est St, 77 - Central Park South, NYC</b></p> 
           <p><b>7 Bedrooms  6 Bathrooms</b></p>
           <p><b>$ 800,000</b></p> 

             
        </div>
      </div>
    </div>
  );
}
export default HomePage;