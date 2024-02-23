
import React from 'react';

import { Link } from "react-router-dom";
const HexagonMenu = ({ onInfoCompteClick }) => {
  return (
    <div className="row">
    <div style={{ marginLeft: '31%' }} className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
      <div className="page-title home text-center"></div>

      <div style={{ alignItems: 'center' }} className="hexagon-menu clear">
        {/* Hexagon Item 1 */}
        
          <div className="hexagon-item" id="afficheInfoUser">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to='/user'>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-universal-access"></i>
              </span>
              <span className="title">Mon Compte</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
          </Link>
        </div>
        

        {/* Hexagon Item 2 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
        <Link to='/mesitineraires'>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-bullseye"></i>
              </span>
              <span className="title">Mes Itinéraires</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
          </Link>
        </div>

        {/* Hexagon Item 3 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
        <Link to='/decouvrir'>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-braille"></i>
              </span>
              <span className="title">Découvrir</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
        </Link>
        </div>

        {/* Hexagon Item 4 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-id-badge"></i>
              </span>
              <span className="title">Galerie Photo</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
        </div>

        {/* Hexagon Item 5 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-life-ring"></i>
              </span>
              <span className="title">Objectifs</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
        </div>

        {/* Hexagon Item 6 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-clipboard"></i>
              </span>
              <span className="title">Récompenses</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
        </div>

        {/* Hexagon Item 7 */}
        <div className="hexagon-item">
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex-item">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <a className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-map-signs"></i>
              </span>
              <span className="title">Contact</span>
            </span>
            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#fffff"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);
};





export default HexagonMenu;
