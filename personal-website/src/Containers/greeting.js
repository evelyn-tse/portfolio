import React from "react";
import { greeting } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import './css/greeting.css';
import Button from "../Components/button";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greeting-main" id="greeting">
        <div className="greeting-text-div" >
            <Fade direction={'down'} duration={2000} distance="10px" triggerOnce>
                <h3 id="greeting" style={{ color: theme.gray }}>
                    {greeting.greeting}
                </h3>
            </Fade>
            <Fade direction={'left'} duration={2000} distance="10px" triggerOnce>
                <h1 id="greeting-title" style={{ color: theme.text }}>
                    {greeting.title}
                </h1>
            </Fade>
            <Fade direction={'right'} duration={2000} distance="10px" triggerOnce>
                <h2 id="greeting-subtitle" style={{ color: theme.jacketColor }}>
                    {greeting.subTitle}
                </h2>
            </Fade>
            <Fade direction={'down'} duration={2000} distance="10px" triggerOnce>
                <h2 id="greeting-description" style={{ color: theme.secondarytext }}>
                    {greeting.description}
                </h2>
            </Fade>
            <Fade direction={'up'} duration={2000} distance="5px" triggerOnce>
                <Button
                    text="Discover More"
                    newTab={false}
                    href="#"
                    theme={theme}
                />
            </Fade>
        </div>
    </div>
  );
}
