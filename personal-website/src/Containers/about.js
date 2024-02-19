import React from "react";
import { about } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import './css/about.css';
import Profile from './images/temporary-profile.jpg';

export default function About(props) {
  const theme = props.theme;
  return (
    // <Fade direction={'down'} duration={2000} distance="40px" triggerOnce>
    //     <div className="about-main" >
    //         <div className="about-img" >
    //             {/* <p style={{color: theme.text}}>{about.name}</p> */}
    //             <img src={Profile} alt="Profile"/>
    //         </div>
    //         <div className="about-text" >
    //             <h6 id="about-header" style={{color: theme.text}}>{about.header}</h6>
    //             <p className="about-paragraph" style={{color: theme.text}}>{about.description}</p>
    //         </div>
    //     </div>
    // </Fade>
    <div className="about">
      <div className="about-img">
          <img src={Profile} alt="Profile"/>
        </div>
      <div className="about-content">
        <div id="about-header">
          <h1>About Me</h1>
        </div>
        <div className="about-text">
          <p>{about.description}</p>
        </div>
      </div>
    </div>
  );
}
