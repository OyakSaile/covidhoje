import React from "react";
import logoImg from "../../assets/icons/covidhoje.svg";
import heroImg from "../../assets/illustrations/home-image.png";
import gitIcon from "../../assets/icons/github.svg";
import "./index.css";
function Homepage() {
  return (
    <div className="container" id="container-id">
      <div id="container-content">
        <div className="logo">
          <img src={logoImg} alt="covidhoje" srcset="" />
          <h2>Seu portal de notícias sobre o novo corona-virus</h2>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="" />
        </div>
        <div className="buttons-container">
          <a href="">
            <button id="see">Acompanhe</button>
          </a>
          <a href="">
            <p id="howto">como se prevenir</p>
          </a>
        </div>
        <div className="footer">
          <a href="">
            <img src={gitIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
