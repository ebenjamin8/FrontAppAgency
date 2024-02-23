import React, { Component } from 'react';
import $ from 'jquery'; // Assurez-vous que jQuery est installé dans votre projet React
import "./MesItineraires.css";

class MesItineraires extends Component {
  componentDidMount() {
    // Lier l'événement click aux éléments avec la classe .point
    $(".point").click(function () {
      $(this).toggleClass("red-pulse"); // Bascule la classe pour le point cliqué
    });
  }

  render() {
    return (
      <div>
        <header>
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
        </header>

        <div className="recherche">
          <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>Créer un Itinéraire</h2>

            <div className="itineraire">
              <form style={{ display: 'flex' }}>
                <label htmlFor="aeroportDepart">Aéroport de Départ</label>
                <br /><br /><br />
                <select id="aeroportDepart" name="aeroportDepart">
                  {/* Utilisez JavaScript pour peupler cette liste depuis l'API */}
                </select>
                <div style={{ marginLeft: '30px' }} className="container">
                  <label htmlFor="destinationPays">Destination</label>
                  <select id="destinationPays" name="destinationPays">
                    <option>Arabie Saoudite</option>
                    <option>Argentine</option>
                    <option>Australie</option>
                    {/* Ajoutez d'autres options selon vos besoins */}
                  </select>
                </div>

                <label style={{ marginLeft: '30px' }} htmlFor="dateDepart">Date de Départ</label>
                <input type="date" id="dateDepart" name="dateDepart" />

                <label style={{ marginLeft: '10px' }} htmlFor="dateArrivee">Date d'Arrivée</label>
                <br />
                <input type="date" id="dateArrivee" name="dateArrivee" />

                <label style={{ marginLeft: '10px' }} htmlFor="nbPersonnes">Nombre de Personnes</label><br />
                <input type="number" id="nbPersonnes" name="nbPersonnes" min="1" />

                <label style={{ marginLeft: '30px' }} htmlFor="duree">Durée</label>
                <select style={{ width: '150px' }} id="duree" name="duree">
                  <option value="1">1 jour</option>
                  <option value="3">3 jours</option>
                  {/* Ajoutez d'autres options selon vos besoins */}
                </select>

                <label style={{ marginLeft: '30px' }} htmlFor="budget">Budget</label>
                <select style={{ width: '150px' }} id="budget" name="budget">
                  <option value="low">Bas</option>
                  <option value="medium">Moyen</option>
                  <option value="high">Élevé</option>
                </select>
              </form>
            </div>

            <button style={{ display: 'flex', justifyContent: 'center', width: '30%', alignSelf: 'center' }}>Ajouter un Nouvel Itinéraire</button>
          </section>
        </div>

        <section className="details">
          <h2>Itinéraires Programmés</h2>
          {/* Affichez ici les détails de l'itinéraire sélectionné */}
        </section>

        <section className="statistiques">
          <h2>Statistiques</h2>

          <div className="container">
            <div className="map-container">
              <img src="world-map-1500_vvekl5-modified.png"/>
              {/* Code pour les points sur la carte */}
            </div>
          </div>

          <div className="row">
            <div className="contient">
              <a className="post" href="#">
                <h3 className="post-title">Sauvegarder</h3>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MesItineraires;
