import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = () => {
    if (formData.username === 'yourUsername' && formData.password === 'yourPassword') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/register" type="button" className='register'>
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
