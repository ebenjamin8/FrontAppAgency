import React    from "react";
import template from "./Accueil.jsx";

class Accueil extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Accueil;
