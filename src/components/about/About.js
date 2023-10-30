import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import yourImage from "../images/pic2.jpg"; 
function About() {

  return (

    <div className="cart-container">
     
     <img src={yourImage} alt="Your Image" className="image-pic2"/>   
<div class="about-section">

        <div class="inner-width">
     
        
          <h1>About Us</h1>
          <div class="border"></div>
          <div class="about-section-row">
          
            <div class="about-section-col">
              <div class="about">
               <p>
                HouseEstate is your go-to online resource for all things real estate. This comprehensive website offers a wealth of information, advice, and listings, making it the ultimate destination for anyone interested in the world of property. From informative articles on market trends and buying tips to virtual property tours and expert insights from seasoned real estate professionals, HouseEstate has you covered. Whether you're a prospective homebuyer, a seller looking to get the best value for your property, or simply someone curious about the fascinating intricacies of the real estate market, this platform serves as your trusted guide. With its user-friendly interface and up-to-date content, HouseEstate makes the often complex and overwhelming world of real estate easily accessible to all, ensuring that you can confidently navigate your real estate journey.
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
                <div class="skill">
                  <div class="title">Sold Houses</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>90%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Daily Listings</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>70%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Expert Agents</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>50%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;