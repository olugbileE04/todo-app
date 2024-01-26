import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-links'>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
