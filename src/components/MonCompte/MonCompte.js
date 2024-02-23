import React from "react";
import template from "./MonCompte.jsx";
import './MonCompte.css';

// ... (imports précédents)

const MonCompte = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="styleinfoCompte.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Mon Compte</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <style>
          {`
          body {
            background-color: #000000;
          }

          .container {
            display: flex;
            background-color: #414141;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            padding: 30px;
            
          }

          .form-group {
            margin-bottom: 20px;
          }

          #userCard {
            margin-top: 30px;

        

          }
        `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div></div>
            <h2 style={{color:'#f5a911', fontFamily:'Bebas Neue'}} className="text-center mb-4">Mon Compt</h2><h2 style={{color:'#ffffff', fontFamily:'Bebas Neue'}}>e</h2>
            <div><form className="formulaireCompte">
              <div className="form-group">
                <label style={{color:'#ffffff',}} htmlFor="fullName">Nom complet </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Nom complet"
                />
              </div>
              <div className="form-group">
                <label style={{color:'#ffffff',}} htmlFor="email">Adresse e-mail </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Adresse e-mail"
                />
              </div>
              <div  className="form-group">
                <label style={{color:'#ffffff',}} htmlFor="profilePic">Photo de profil </label>
                <input style={{color:'#ffffff',}} type="file" className="form-control-file" id="profilePic" />
              </div>

              <button
                type="submit"
                className="btn btn-warning"
                style={{
                  height: '40px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Enregistrer
              </button>
            </form>
          </div>

          <div className="row">
            <div id="userCard" className="card" style={{ width: '18rem', marginLeft: '30%' }}>
              <img
                src="font1.png"
                className="card-img-top"
                alt="Photo de Profil"
              />
              <div className="card-body">
                <h5 className="card-title">Nom Complet</h5>
                <p className="card-text">Adresse e-mail : user@example.com</p>
                {/* Ajoutez d'autres informations ici */}
              </div></div>
            </div>
          </div>
        </div>

        {/* Scripts Bootstrap */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
};

export default MonCompte;
