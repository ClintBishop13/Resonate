import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if(window.innerWidth <= 960)
    {
      setButton(false);
    }
    else
    {
      setButton(true);      
    }
  };

  useEffect (() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <span>Resonate - TECHNICAL TEST </span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon className={click ? "fa-times" : "fa-bars"} icon={click ? faTimes : faBars} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}> 
        <li className="nav-item">
          <Link to='/Level200' className="nav-links" onClick={closeMobileMenu}>
            Level 200
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/Contacts' className="nav-links" onClick={closeMobileMenu}>
          Real world problem - Contacts
          </Link>
        </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar