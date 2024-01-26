import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login request
      const result = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      console.log(result); // Log the entire response for debugging
      navigate('/home');
      if (result.data === 'success') {
   
      }

    }
    catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>

      {/* Link to the register page */}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

