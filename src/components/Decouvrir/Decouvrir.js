import React from "react";
import "./Decouvrir.css";

class Decouvrir extends React.Component {
  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "xxx-large",
              marginTop: "10%",
            }}
          >
            Un Voyage de Rêve ?
          </h1>
          <b>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 100,
              }}
            >
              Profitez d'un coup de pouce pour le choix de votre destination
              finale !
            </h1>
          </b>
          <a href="mesItinéraires.html">
            <button
              style={{
                display: "flex",
                left: "44%",
                marginBottom: "100px",
              }}
              className="continue-application"
            >
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
                Choisir un Itinéraire
              </div>
            </button>
          </a>
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="figurebarcelone">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="barcelone"></div>
              <figcaption className="figcaptionbarcelone">
                <span className="spanbarcelone">Découvrez</span>
                <span className="spanbarcelone">Barcelone</span>
                <span>
                  Barcelone, la magnifique capitale de la Catalogne, enchante
                  par son mélange unique de culture, d'histoire et de
                  modernité. Sur la côte méditerranéenne, cette ville offre un
                  cadre envoûtant avec ses ruelles médiévales du quartier
                  gothique, ses édifices modernistes, dont l'emblématique
                  Sagrada Família conçue par Gaudí, et ses plages animées le
                  long du littoral.
                </span>
              </figcaption>
              <button className="buttonbarcelone"></button>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="figuremadrid">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="madrid"></div>
              <figcaption className="figcaptionmadrid">
                <span className="spanmadrid">Découvrez</span>
                <span className="spanmadrid">Madrid</span>
                <span>
                  Madrid, la vibrante capitale de l'Espagne, séduit par son
                  énergie effervescente et son riche héritage culturel. Nichée
                  au cœur de la péninsule ibérique, cette métropole
                  cosmopolite regorge de trésors architecturaux, tels que le
                  Palais Royal et la Plaza Mayor, témoins de son passé
                  glorieux.
                </span>
              </figcaption>
              <button className="buttonmadrid"></button>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="figureseville">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="seville"></div>
              <figcaption className="figcaptionseville">
                <span className="spanseville">Découvrez</span>
                <span className="spanseville">Séville</span>
                <span>
                  Séville, la capitale de l'Andalousie, enchante par son mélange
                  envoûtant de culture, d'histoire et de joie de vivre. Nichée sur
                  les rives du Guadalquivir, cette ville flamboyante séduit par
                  son architecture mauresque, ses ruelles pittoresques et ses
                  places animées où l'art de vivre andalou s'exprime
                  pleinement.
                </span>
              </figcaption>
              <button className="buttonseville"></button>
            </figure>
          </div>
        </div>
        <div className="row" style={{ height: "100", marginTop: "30px" }}>
          <span className="paysEsp">
            {" "}
            <img src="748120_flag_spain_icon.png" alt="" />Espagne{" "}
            <img src="748120_flag_spain_icon.png" alt="" />{" "}
          </span>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="figurenewyork">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="newyork"></div>
              <figcaption className="figcaptionnewyork">
                <span className="spannewyork">Découvrez</span>
                <span className="spannewyork">New York</span>
                <span>
                  New York, la ville qui ne dort jamais, fascine par son énergie
                  débordante, sa diversité culturelle et ses symboles
                  emblématiques tels que la Statue de la Liberté, l'Empire State
                  Building et Times Square. Au cœur de l'État de New York, cette
                  métropole cosmopolite offre une expérience inoubliable à chaque
                  coin de rue.
                </span>
              </figcaption>
              <button className="buttonnewyork"></button>
            </figure>
          </div>
          <div style={{ marginLeft: "50px" }} className="col-lg-4 col-md-6 mb-4">
            <figure className="figurelosangeles">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="losangeles"></div>
              <figcaption className="figcaptionlosangeles">
                <span className="spanlosangeles">Découvrez</span>
                <span className="spanlosangeles">Los Angeles</span>
                <span>
                  Los Angeles, la cité des anges, séduit par son ambiance
                  décontractée, ses plages magnifiques, ses quartiers
                  emblématiques comme Hollywood et Beverly Hills, et son riche
                  univers culturel. Capitale mondiale du divertissement, cette
                  ville rayonne par son dynamisme et son caractère cosmopolite.
                </span>
              </figcaption>
              <button className="buttonlosangeles"></button>
            </figure>
          </div>
          <div style={{ marginLeft: "50px" }} className="col-lg-4 col-md-6 mb-4">
            <figure className="figurechicago">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="chicago"></div>
              <figcaption className="figcaptionchicago">
                <span className="spanchicago">Découvrez</span>
                <span className="spanchicago">Chicago</span>
                <span>
                  Chicago, la ville des vents, séduit par son architecture
                  emblématique, ses gratte-ciel majestueux et son riche patrimoine
                  culturel. Située sur les rives du lac Michigan, cette métropole
                  dynamique offre une expérience unique avec ses quartiers animés,
                  ses festivals de musique et sa scène gastronomique réputée.
                </span>
              </figcaption>
              <button className="buttonchicago"></button>
            </figure>
          </div>
        </div>
        <div className="row" style={{ height: "100", marginTop: "30px" }}>
          <span className="paysUsa">
            <img src="748050_flag_usa_icon.png" alt="" />Etats-Unis{" "}
            <img src="748050_flag_usa_icon.png" alt="" />
          </span>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="figureriyad">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="riyad"></div>
              <figcaption className="figcationriyad">
                <span className="spanriyad">Découvrez</span>
                <span className="spanriyad">Riyad</span>
                <span>
                  Riyad, la capitale vibrante de l'Arabie Saoudite, séduit par
                  son mélange unique de tradition et de modernité. Cette ville
                  dynamique est le cœur économique et culturel du royaume, avec
                  ses gratte-ciel étincelants, ses centres commerciaux
                  ultramodernes et ses monuments historiques fascinants.
                </span>
              </figcaption>
              <button className="buttonriyad"></button>
            </figure>
          </div>
          <div style={{ marginLeft: "50px" }} className="col-lg-4 col-md-6 mb-4">
            <figure className="figuremekka">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="mekka"></div>
              <figcaption className="figcaptionmekka">
                <span className="spanmekka">Découvrez</span>
                <span className="spanmekka">La Mecque</span>
                <span>
                  La Mecque, la ville sainte de l'Islam, fascine par son
                  importance religieuse et son histoire millénaire. Nichée au
                  cœur du désert d'Arabie, cette cité sacrée attire des millions
                  de pèlerins chaque année pour le Hajj et la Omra, offrant une
                  expérience spirituelle inoubliable.
                </span>
              </figcaption>
              <button className="buttonmekka"></button>
            </figure>
          </div>
          <div style={{ marginLeft: "50px" }} className="col-lg-4 col-md-6 mb-4">
            <figure className="figuremedine">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter id="outline" mask="url(#mask)">
                    <feFlood floodColor="#ecf0f1" result="base" />
                    <feMorphology in="SourceGraphic" operator="dilate" radius="10" />
                    <feComposite in="base" operator="in" />
                    <feBlend in="SourceGraphic" mode="normal" />
                    <feDropShadow stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
              <div className="medine"></div>
              <figcaption className="figcaptionmedine">
                <span className="spanmedine">Découvrez</span>
                <span className="spanmedine">Médine</span>
                <span>
                  Médine, la deuxième ville sainte de l'Islam, séduit par son
                  ambiance paisible, ses sites historiques et sa spiritualité
                  profonde. Lieu de refuge pour le prophète Mahomet, cette ville
                  sacrée est imprégnée d'une atmosphère spirituelle unique qui
                  attire les fidèles du monde entier.
                </span>
              </figcaption>
              <button className="buttonmedine"></button>
            </figure>
          </div>
        </div>
        <div className="row" style={{ height: "100", marginTop: "30px" }}>
          <span className="paysAs">
            {" "}
            <img src="748058_flag_saudi_arabia_icon.png" alt="" />Arabie
            Saoudite{" "}
            <img src="748058_flag_saudi_arabia_icon.png" alt="" />{" "}
          </span>
        </div>
      </div>
    );
  }
}

export default Decouvrir;
