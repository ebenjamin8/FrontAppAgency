import React    from "react";
import { Link } from "react-router-dom";
import Accueil from "../Accueil"

class Menu extends React.Component {
  
  render() {
    return (         
      <nav>
          <ul class="">
              <li><Link to='/'>Accueil</Link></li>
              <li><Link to='/tasks'>Tasks</Link></li>
          </ul>
      </nav>);
  }
}

export default Menu;
