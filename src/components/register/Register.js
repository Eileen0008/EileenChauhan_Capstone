import React, { useState } from 'react';
import "./Register.css";

function Register() {
  const [selectedType, setSelectedType] = useState('');
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Firstname</label>
          <input
            type="text"
            name="firstname"
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={selectedType} onChange={handleTypeChange}>
          <option value="">Select Type</option>
        <option value="Agent">Agent</option>
        <option value="Customer">Customer</option>
          </select>
          </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="contact"
            name="contact"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="button" >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
