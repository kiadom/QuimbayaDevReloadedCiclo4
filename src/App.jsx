import Index from './pages';
import admin_usuarios_page from './pages/admin_usuarios';
import admin_vendedores_page from './pages/admin_vendedores';
import admin_ventas_page from './pages/admin_ventas';
import clave_page from './pages/clave';
import entrada_page from './pages/entrada';
import registro_estado_ventas_page from './pages/registro_estado_ventas';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './styles/modulos.css';
import React from "react";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/admin_usuarios'>
            <admin_usuarios_page>admin_usuarios_page</admin_usuarios_page>
          </Route>
          <Route path='/admin_vendedores'>
            <admin_vendedores_page>admin_vendedores_page</admin_vendedores_page>
          </Route>
          <Route path='/admin_ventas'>
            <admin_ventas_page>admin_ventas_page</admin_ventas_page>
          </Route>
          <Route path='/clave'>
            <clave_page>clave_page</clave_page>
          </Route>
          <Route path='/entrada'>
            <entrada_page>entrada_page</entrada_page>
          </Route>
          <Route path='/registro_estado_ventas'>
            <registro_estado_ventas_page>registro_estado_ventas_page</registro_estado_ventas_page>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>       
    </div>
  );
}

export default App; 