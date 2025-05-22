import './Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar(){
    return (
        <nav className="navbar">
                <div className="nav-brand">
                  <Link to="/">Jillian Weland</Link>
                </div>
                <ul className="nav-links">
                  <li><HashLink smooth to="/#about">About</HashLink></li>
                  <li><HashLink smooth to="/#projects">Projects</HashLink></li>
                  <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                </ul>
        </nav>
    )
}

export default Navbar