import React, {useState} from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import CanadaLogo from "../assets/canada-logo.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import EllipseYellow from "../assets/Ellipse3.svg";
import VectorUp from "../assets/VectorUp.svg";
import VectorDown from "../assets/VectorDown.svg";
import EllipseGreen from "../assets/Ellipse 3.svg";
import OutlineCircle from "../assets/outlinecircle.svg";
import OuterCircle from "../assets/outercircle.svg";
import InnerCircle from "../assets/innercircle.svg";
import SwitchButtonWhite from "../assets/switchbutton-white.svg";
import Trophy from "../assets/trophyrectangle.svg";
import Disconnected from "./Disconnected";

function Connected({ title, subtitle, kilpersec, megpersec }) {
  const [showDisconnted, setShowDisconnected] = useState(false);

  return (
    <div className="third-layer">
      {showDisconnted && (
        <Disconnected
          title="00:00:00"
          subtitle="Disconnected"
          kilpersec="00 kb/s"
          megpersec="00 mb/s"
        />
      )}
      <div className="fourth-layer">
        <div className="wrap">
          <div className="vector-img"></div>

          <img src={Vector}  className="vector" alt="vector-image"/>

          <img
            src={HalfRectangle}
            alt="rectangle-image"
            className="yellow-rect"
          />

          <img src={CanadaLogo} className="rectangle" alt="rectangle-image" />
          <h2>China</h2>
        </div>
        <h1>{title}</h1>
        <h3 className="subtitle-connected">{subtitle}</h3>
        <div className="ellipse-one">
          <img src={EllipseYellow} className="ellipse-yellow" alt="ellipse"/>
          <img src={VectorUp} className="arrowUp" alt="arrowUp"/>
          <h4>{kilpersec}</h4>
        </div>
        <div className="ellipse-two">
          <img src={VectorDown} className="arrowDown" alt="arrowDown"/>
          <img src={EllipseGreen} className="ellipse-green" alt="ellipse" />
          <h4>{megpersec}</h4>
        </div>
        <div className="circle" onClick={() => setShowDisconnected(true)}>
          <img src={OutlineCircle} className="outline" alt="outline-circle"/>
          <img src={OuterCircle} className="outer-circle" alt="outer-circle"/>
          <img src={InnerCircle} className="inner-circle" alt="inner-circle" />
          <img
            src={SwitchButtonWhite}
            alt="switch-button"
            className="switch-button-white"
          />
        </div>
        <img src={Trophy} className="trophy-img" alt="trophy-image" />
        <button className="premium-btn">
          <h4 className="text-btn">Go Premium</h4>
        </button>
      </div>
    </div>
  );
}

export default Connected;
