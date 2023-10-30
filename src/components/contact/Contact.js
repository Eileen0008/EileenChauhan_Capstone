import React, { useState } from 'react';
import "./Contact.css";
import yourImage from "../images/pic3.jpg"; 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
        <img src={yourImage} alt="Your Image" className="image-pic3"/>  

    <div className="contact-form">
       
       <h2>Contact Us</h2>
       <form onSubmit={handleSubmit}>
         <div className="form-group">
           <label>Name:</label>
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
         </div>
         <div className="form-group">
           <label>Email:</label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
         </div>
         <div className="form-group">
           <label>Message:</label>
           <textarea
             name="message"
             value={formData.message}
             onChange={handleChange}
           />
         </div>
         <button type="submit">Submit</button>
       </form>
     </div>
    </>
    
  );
};

export default ContactForm;
