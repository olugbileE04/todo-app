import React, { useState } from 'react'
import './register.css';
import axios from 'axios'
import { useNavigate ,Link} from 'react-router-dom';


export default function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigiate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name, email, password})

   .then(result => {console.log(result)
    navigiate('/login')

  })
   .catch(err=> console.log(err))

  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" placeholder='Enter Name' onChange={(e)=> setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" onChange={(e)=> setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" onChange={(e)=> setPassword(e.target.value)} />
      </label>
      <button type="submit">Register</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}