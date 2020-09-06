import React from "react";
import logoImg from "../../assets/icons/covidhoje.svg";
import heroImg from "../../assets/illustrations/home-image.png";
import gitIcon from "../../assets/icons/github.svg";
import "./styles.css";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="container" id="container-id">
      <div className="container-content">
        <div className="logo">
          <img src={logoImg} alt="covidhoje" srcset="" />
          <div className="texto-2">
            <h2>Seu portal de notícias sobre o novo corona-virus.</h2>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="" />
        </div>

        <div className="buttons-container">
          <Link to="/statistics">
            <button id="see">Acompanhe</button>
          </Link>
          <Link to="">
            <p id="howto">como se prevenir</p>
          </Link>
        </div>

        <div className="footer">
          <a href="https://github.com/NegriHenrique/covidhoje" target="_blank">
            <img src={gitIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
