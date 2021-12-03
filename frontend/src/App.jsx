//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ModulesLayout } from './layouts/ModulesLayout';
import { GestionAvances } from './pages/GestionAvances';
import { GestionInscripciones } from './pages/GestionInscripciones';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionUsuarios } from './pages/GestionUsuarios';

function App() {
  return (
    <Router>
        <ModulesLayout>
          <Routes>
            <Route exact path="/GestionAvances" element={<GestionAvances/>}/>
            <Route exact path="/GestionInscripciones" element={<GestionInscripciones/>}/>
            <Route exact path="/GestionProyectos" element={<GestionProyectos/>}/>
            <Route exact path="/GestionUsuarios" element={<GestionUsuarios/>}/>
          </Routes>
        </ModulesLayout>
    </Router>
  );
}

export default App;