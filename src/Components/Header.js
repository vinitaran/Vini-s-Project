import React from 'react';
import "./Header.css";

function Header() {
    return (      
        <header>
        <div className="top-navbar">
          <div className="container">
            <div className="navbar__logo">
              <img src="./images/logo.svg" alt="Reload the page" />
            </div>
    
            <ul className="navbar__links">
              <li className="navbar__link">
                <a href="">kard</a>
              </li>
              <li className="navbar__link">
                <a href="">kardless</a>
              </li>
              <li className="navbar__link">
                <a href="">security</a>
              </li>
              <li className="navbar__link">
                <a href="">rewards</a>
              </li>
              <li className="navbar__link">
                <button className="btn-cta">
                  get the app
                </button>
              </li>
            </ul>
          </div>
        </div>    
        </header>  
    )
}

export default Header
