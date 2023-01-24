import React from "react";
import "../styles/AllServers.css";
import Vector from "../assets/Vector.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import Rectangle from "../assets/Rectangle6.svg";
import SearchIcon from "../assets/searchicon.svg";
import GhanaIcon from "../assets/ghana-icon.svg";
import CameroonIcon from "../assets/cameroon-icon.svg";
import ArgentinaIcon from "../assets/argentina-icon.svg";
import BrazilIcon from "../assets/brazil-icon.svg";
import RussiaIcon from "../assets/russia-icon.svg";
import CanadaIcon from "../assets/canada-icon.svg";
import PortugalIcon from "../assets/portugal-icon.svg";
import ItalyIcon from "../assets/italy-icon.svg";
import GermanyIcon from "../assets/germany-icon.svg";
import USAIcon from "../assets/usa-icon.svg";
import FirstSignal from "../assets/first-signal.svg";
import SecondSignal from "../assets/second-signal.svg";
import ThirdSignal from "../assets/third-signal.svg";
import FourthSignal from "../assets/fourth-signal.svg";
import FifthSignal from "../assets/fifth-signal.svg";

function AllServers() {
  return (
    <div className="dashboard-layer">
      <div className="server-layer">
        <div className="wrapper">
          <div className="vector-img"></div>
          <img src={Vector} className="vector"  alt="vector"/>

          <img src={HalfRectangle} className="yellow-rect"  alt="yellow-rect"/>

          <img src={Rectangle} className="rectangle"  alt="rectangle"/>
          <h2>China</h2>
        </div>
      </div>
      <div className="vect">
        <div className="notch"></div>
        <div className="icon">
          <img src={SearchIcon}  className="search-icon" alt="searchhicon"/>
        </div>
        <input
          type="text"
          placeholder="Search location"
          className="search-input"
        />
        <h2 className="subtitle">First Servers</h2>
        <div className="first-server">
          <img src={GhanaIcon} className="gh-icon"  alt="ghana-icon"/>
          <h4 className="sub-title">Ghana</h4>
          <div className="first-signal-serve">
            <img src={FirstSignal} className="firstsignal"  alt="firstSignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="second-server">
          <img src={CameroonIcon} className="cameroon-icon"  alt="cameroon-icon"/>
          <h4 className="sub-title">Cameroon</h4>
          <div className="second-signal-serve">
            <img src={SecondSignal} className="secondsignal"  alt="secondsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="third-server">
          <img src={ArgentinaIcon} className="argentina-icon"  alt="argentina-icon"/>
          <h4 className="sub-title">Argentina</h4>
          <div className="third-signal-serve">
            <img src={ThirdSignal} className="thirdsignal"  alt="thirdsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="fourth-server">
          <img src={BrazilIcon} className="brazil-icon"  alt="brazil-icon"/>
          <h4 className="sub-title">Brazil</h4>
          <div className="fourth-signal-serve">
            <img src={FourthSignal} className="fourthsignal"  alt="fourthsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
          <div className="fifth-server">
            <img src={RussiaIcon} className="russia-icon"  alt="russia-icon"/>
            <h4 className="sub-title">Russia</h4>
            <div className="fifth-signal-serve">
              <img src={FifthSignal} className="fifthsignal"  alt="fifthsignal"/>
              <button className="connect-btn">Connect</button>
            </div>
        </div>
        <h2 className="subtitle">Premium Servers</h2>
        <div className="sixth-server">
          <img src={CanadaIcon} className="canada-icon"  alt="canada-icon"/>
          <h4 className="sub-title">Canada</h4>
          <div className="sixth-signal-serve">
            <img src={FirstSignal} className="sixthsignal" alt="sixthsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="seventh-server">
          <img src={PortugalIcon} className="portugal-icon" alt="portugal-icon" />
          <h4 className="sub-title">Portugal</h4>
          <div className="seventh-signal-serve">
            <img src={SecondSignal} className="seventhsignal" alt="seventhsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="eighth-server">
          <img src={ItalyIcon} className="italy-icon"  alt="italy-icon"/>
          <h4 className="sub-title">Italy</h4>
          <div className="eighth-signal-serve">
            <img src={ThirdSignal} className="eighthsignal"  alt="eighthsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="nineth-server">
          <img src={GermanyIcon} className="germany-icon"  alt="germany-icon"/>
          <h4 className="sub-title">Germany</h4>
          <div className="nineth-signal-serve">
            <img src={FourthSignal} className="ninethsignal"  alt="ninethsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="tenth-server">
          <img src={USAIcon} className="usa-icon"  alt="usa-icon"/>
          <h4 className="sub-title">USA</h4>
          <div className="tenth-signal-serve">
            <img src={FifthSignal} className="tenthsignal"  alt="tenthsignal"/>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServers;
