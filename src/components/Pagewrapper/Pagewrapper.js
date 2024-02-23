import React    from "react";
import template from "./Pagewrapper.jsx";

class Pagewrapper extends React.Component {
  render() {
    return (
      <div> <header>
      <nav className="mask">
        <ul style={{ display: 'flex' }} className="list">
          <li><a href="accueil.html">Accueil</a></li>
          <li><a href="mesItinéraires.html">Mes Itinéraires</a></li>
          <li><a href="decouvrir.html">Découvrir</a></li>
          <li><a href="#">Galerie Photo</a></li>
          <li><a href="#">Objectifs</a></li>
          <li><a href="#">Récompenses</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <h1
          style={{
            fontSize: '2em',
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
            marginInlineStart: '0px',
            marginInlineEnd: '0px',
            fontWeight: 'bold',
            marginLeft: '10%',
            textShadow: '1px 1px 0 #000000, 1px 1px 0 #000000, 1px 1px 0 #000000, 1px 1px 0 #000000',
            fontFamily: 'Bebas Neue'
          }}
        >
          Itinéraires
        </h1>
      </nav>
    </header></div>);
  }
}

export default Pagewrapper;
