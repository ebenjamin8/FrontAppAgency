// App.js
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import './App.css'; // Importez votre fichier CSS principal ici
import MonCompte from './components/MonCompte/MonCompte';
import MesItineraires from './components/MesItineraires/MesItineraires';
import Decouvrir from './components/Decouvrir/Decouvrir';
import Pagewrapper from './components/Pagewrapper';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

const App = () => {
  return  ( 
    {location.pathname !== "/" && <Pagewrapper />}
  <Router>
      <Routes>        
        <Route path="/" element={<MainPage/>} /> 
        <Route> 
          <Route path="/user" element={<MonCompte/>} />
          <Route path="/mesitineraires" element={<MesItineraires/>} />
          <Route path="/decouvrir" element={<Decouvrir/>} /> 
        </Route> 
        {/**/}
      </Routes>
</Router >);
};

export default App;
