import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./splash.css";
import DemoLogin from "../auth/DemoLogin";


export default function SplashPage({ authenticated }) {
  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="splash__container">
        <div className="header__container">
          <i className="fab fa-instagram fa-3x"></i>
        </div>
        <div className="main__container">
          <div className="grid__container">
            <div className="grid__container-row">
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
            </div>
            <div className="grid__container-row">
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
            </div>
            <div className="grid__container-row">
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://i.imgur.com/rrXVEFb.png"
              />
            </div>
          </div>
          <div className="content__container">
            <h2 className="content-title">
              Easily Lose Track? Let us Steer YOU to Success!
            </h2>
            <NavLink to="/login" className="log-in-button">
              <span className="text">Log In</span>
            </NavLink>
            <NavLink to="/sign-up" className="sign-up-button">
              <span className="text">Sign up</span>
            </NavLink>
            <DemoLogin to="/demo" />
          </div>
        </div>
      </div>
      <div className="footer__container">
        <a href="https://github.com/lemlooma" className="footer-link">
          Lema El-Sherbiny
        </a>
      </div>
    </>
  );
}
