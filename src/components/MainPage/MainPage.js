import React from 'react';
import "./MainPage.css";
import HexagonMenu from '../HexagonMenu'; // Mettez à jour le chemin d'importation
import MonCompte from '../MonCompte/MonCompte';

// ... (le reste du code)


const MainPage = () => {
  const handleInfoCompteClick = () => {
    // Ajoutez ici la logique pour afficher les informations du compte
    console.log('Afficher les informations du compte');
  };

  return (
    <div className="site-wrapper">
      <div className="pt-table desktop-768">
        <div
          className="pt-tablecell page-home relative"
          style={{
            backgroundColor: '#414141',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <div className="infoUser"></div>
            <div
              className="row"
              style={{
                color: '#f5a911',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div>
                <h1>Explore & Achieve</h1>
              </div>
            </div>
            <div className="row">
              <div
                style={{ marginLeft: '10%' }}
                className="col-xs-12 col-md-offset-1 col-md-10 col-lg-8"
              >
                {/* ... Autres éléments de la page ... */}
                <HexagonMenu onInfoCompteClick={handleInfoCompteClick} style={{justifyContent: 'center'}} />
              </div>
            </div>
            <div className="row">
              <div className="contient">
                {/* Code pour la déconnexion */}
                <a className="post" href="#">
                  <h2 className="post-title">Déconnexion</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
