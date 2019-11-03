import "../../css/header.css";
import React from "react";
import { Link } from "react-router-dom";
import imgMap from '../../img/map.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (

        <header id="cabecalho">
          <div className="container">
            <div className="row">
              <div className="col-md-1 header-itens">
                <Link to="/home">
                  <img
                    src={imgMap}
                    style={{ marginTop: 1 + "em" }}
                    width="50"
                    height="50"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-md-3 header-itens">
                <h4
                  className="text-color col-md-12"
                  style={{ marginTop: 1.5 + "em" }}
                >
                  VisitBell
            </h4>
              </div>
              <nav className="nav nav-menu col-lg-7">
                <Link
                  className="nav-link nav-item tabbar-item nav-ajust icon-ajust text-nav"
                  to="/home"
                >
                  <img
                    src="map.png"
                    style={{ marginTop: 0.5 + "em" }}
                    width="30"
                    height="30"
                    alt=""
                  />
                </Link>
                <Link
                  className="nav-link nav-item tabbar-item nav-ajust hover-line text-nav"
                  to="/home"
                >
                  <i className="icon-ajust">
                    <FontAwesomeIcon icon="home" />
                  </i>
                  Home
            </Link>
                <Link
                  className="nav-link nav-item tabbar-item nav-ajust hover-line  text-nav"
                  to="/patrimonio"
                >
                  <i className="icon-ajust">
                    <FontAwesomeIcon icon="archway" />
                  </i>
                  Patrimônios
            </Link>
                <Link
                  className="nav-link nav-item tabbar-item nav-ajust hover-line text-nav"
                  to="/sobre"
                >
                  <i className="icon-ajust">
                    <FontAwesomeIcon icon="caret-square-up" />
                  </i>
                  Sobre
            </Link>
                <Link
                  className="nav-link nav-item tabbar-item nav-ajust hover-line  text-nav"
                  to="/contato"
                >
                  <i className="icon-ajust">
                    <FontAwesomeIcon icon="envelope-open" />
                  </i>
                  Sugestão
            </Link>
              </nav>
            </div>
          </div>
        </header>
  );
};

export default Header