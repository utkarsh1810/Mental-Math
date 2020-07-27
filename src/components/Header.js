import React from 'react';
import logo from '../logo.jpeg';
import '../App.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-1">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" href="#">
              <span><h2>Mental Math</h2></span> 
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
    
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo"/>
            </li>
            <li className="nav-item d-inline-block mr-4">
               <img className="logo" src={logo}  alt="logo" />
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
