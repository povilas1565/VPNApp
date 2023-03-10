import React from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import Rectangle from "../assets/Rectangle6.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import EllipseYellow from "../assets/Ellipse3.svg";
import VectorUp from "../assets/VectorUp.svg";
import VectorDown from "../assets/VectorDown.svg";
import EllipseGreen from "../assets/Ellipse 3.svg";
import OutlineCircle from "../assets/outlinecircle.svg";
import OuterCircle from "../assets/outercircle.svg";
import InnerCircle from "../assets/innercircle.svg";
import SwitchButton from "../assets/material-symbols_power-rounded.svg";
import Trophy from "../assets/trophyrectangle.svg";

function Disconnected({ title, subtitle, kilpersec, megpersec }) {
  return (
    <div className="third-layer">
      <div className="fourth-layer">
        <div className="wrap">
          <div className="vector-img"></div>

          <img src={Vector} alt="vector-image" className="vector" />

          <img
            src={HalfRectangle}
            alt="rectangle-image"
            className="yellow-rect"
          />

          <img src={Rectangle} alt="rectangle-image" className="rectangle" />
          <h2>China</h2>
        </div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="ellipse-one">
          <img src={EllipseYellow} alt="ellipse" className="ellipse-yellow" />
          <img src={VectorUp} alt="vectorUp" className="vectorUp" />
          <h4>{kilpersec}</h4>
        </div>
        <div className="ellipse-two">
          <img src={VectorDown} alt="vectorDown" className="vectorDown" />
          <img src={EllipseGreen} alt="ellipse" className="ellipse-green" />
          <h4>{megpersec}</h4>
        </div>
        <div className="circles">
          <img
            src={OutlineCircle}
            alt="outline-circle"
            className="outline-circle"
          />
          <img src={OuterCircle} alt="outer-circle" className="outer-circle" />
          <img src={InnerCircle} alt="inner-circle" className="inner-circle" />
          <img
            src={SwitchButton}
            alt="switch-button"
            className="switch-button"
          />
        </div>
        <img src={Trophy} alt="trophy-image" className="trophy-img" />
        <button className="premium-btn">
          <h4 className="text-btn">Go Premium</h4>
        </button>
      </div>
    </div>
  );
}

export default Disconnected;
