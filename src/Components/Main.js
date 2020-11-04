import React from 'react';
import "./Main.css";

function Main() {
    return (
        <section id="hero">
        <img className="hero-bg" src="./images/step-1.png" alt="" />
        <div className="container-wrap">
          <h1 className="hero__title">
            Kashware is an exclusive ecosystem that unites your money.
          </h1>
          <h3 className="hero__hashtags">#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</h3>
          <a href="http://www.google.com" className="hero__btn">
            <img src="./images/step-1.png" alt="try it now" />
          </a>
        </div>
    
        <li className="card">
        </li>
    
      </section>
    )
}

export default Main
