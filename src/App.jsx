import Index from './pages';
import AdminUsuariosPage from './pages/admin_usuarios';
import AdminVendedoresPage from './pages/admin_vendedores';
import AdminVentasPage from './pages/admin_ventas';
import ClavePage from './pages/clave';
import EntradaPage from './pages/entrada';
import RegistroEstadoVentasPage from './pages/registro_estado_ventas';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './styles/modulos.css';
import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faHamburger  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faHamburger);

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path = '/admin_usuarios'>
            <AdminUsuariosPage />
          </Route>
          <Route path = '/admin_vendedor'>
            <AdminVendedoresPage />
          </Route>
          <Route path = '/admin_ventas'>
            <AdminVentasPage />
          </Route>
          <Route path = '/clave'>
            <ClavePage />
          </Route>
          <Route path = '/entrada'>
            <EntradaPage />
          </Route>
          <Route path = '/registro_estado_ventas'>
            <RegistroEstadoVentasPage />
          </Route>
          <Route path = '/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App; 

/*
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
*/