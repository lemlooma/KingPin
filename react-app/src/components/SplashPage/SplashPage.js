import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./splash.css";


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
                src="https://media.istockphoto.com/vectors/planning-schedule-concept-vector-illustration-in-flat-style-vector-id1037375992?k=20&m=1037375992&s=612x612&w=0&h=tAwEtjUC92Zrk5IEGkiJxd4ChW2_7Y-Ufb6aeVbC5bc="
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://www.pblworks.org/sites/default/files/inline-images/blog-Why%20I%20Scrum.png"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://www.internshipwala.com/img/project4.png"
              />
            </div>
            <div className="grid__container-row">
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ec2Nt9f4s3rNll3TGMl2gxlmbZqBNuvHTHs8KOTRSrDYtou2THk1PxypEo7mqgYDExk&usqp=CAU"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://www.insighttycoon.com/wp-content/uploads/2020/10/learning-organization-photo.jpg"
              />
              <img
                alt="Splash Page"
                className="grid-pic"
                src="https://saaslist.com/wp-content/uploads/team-collaboration.png"
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
                src="https://i.imgur.com/FhEDS3Y.png"
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
              We Mange your Project from Start to Finish
            </h2>
            <NavLink to="/login" className="sign-up-button">
              <span className="text">Log In</span>
            </NavLink>
            <NavLink to="/sign-up" className="sign-up-button">
              <span className="text">Sign up</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
