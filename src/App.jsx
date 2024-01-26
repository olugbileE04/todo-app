
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './pages/login/Login';
import Register from './pages/register/Register';



function App() {
  
 

  return (
    <Router>
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </div>
  </Router>
  )
}

export default App
