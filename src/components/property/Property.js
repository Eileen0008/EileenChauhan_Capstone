import React, { useEffect, useState } from "react";
import ListingCard from "../listingCard/ListingCard";
import "./Property.css"
import yourImage from "../images/pic1.jpg"; 
import pro2Image from "../images/pic2.jpg"; 
import pro3Image from "../images/pic3.jpg"; 
import pro4Image from "../images/pic4.jpg"; 
import pro5Image from "../images/pic5.jpg"; 
import pro6Image from "../images/pic6.jpg"; 

function Property() {
  

  return (
    <>
     <div className="landing-page">
    <h1>Home Estate Properties</h1>
    <p>Explore amazing properties around the states.</p>

    <div className="card-container">
      <div className="card">
      <h2>New York</h2>
          <img src={yourImage} alt="Your Image" class="small-image" />
          <p><b>203 Properties</b></p> 
      </div>

      <div className="card">
      <h2>Los Angeles</h2>
<img src={pro2Image} alt="Card 2" className="small-image" />
<p><b>307 Properties</b></p> 
      </div>

      <div className="card">
      <h2>Chicago</h2>
          <img src={pro3Image} alt="Card 2" className="small-image" />
          <p><b>112 Properties</b></p>
      </div>
     </div>
     </div>

     <div>

     <div className="landing-page">
    

    <div className="card-container">
      <div className="card">
      <h2>77 - Central Park South, NYC</h2>
          <img src={pro4Image} alt="pro4Image" class="small-image" />
          <p><b>Property ID: V254680</b></p> 
          <p><b>Property status: For Sale</b></p>
          <p><b>Description:</b> House for sale, new in the home estate market contact agent for further details on the house.</p>
      </div>

      <div className="card">
      <h2>107 - Lancaster Street, LA</h2>
<img src={pro5Image} alt="Card 2" className="small-image" />
<p><b>Property ID: V254680</b></p> 
          <p><b>Property status: For Sale</b></p>
          <p><b>Description:</b> House for sale, new in the home estate market contact agent for further details on the house.</p> 
      </div>

      <div className="card">
      <h2>207 - Friedrick street , CHI</h2>
          <img src={pro6Image} alt="Card 2" className="small-image" />
          <p><b>Property ID: V254680</b></p> 
          <p><b>Property status: For Sale</b></p>
          <p><b>Description:</b> House for sale, new in the home estate market contact agent for further details on the house.</p>
      </div>
     </div>
     </div>
     </div>

    </>
 
  );
}
export default Property;