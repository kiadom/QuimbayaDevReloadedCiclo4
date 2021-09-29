import Index from './pages';
import AdminUsuariosPage from './pages/admin_usuarios';
import AdminVendedoresPage from './pages/admin_vendedores';
import AdminVentasPage from './pages/admin_ventas';
import ClavePage from './pages/clave';
import PrincipalPage from './pages/principal';
import RegistroEstadoVentasPage from './pages/registro_estado_ventas';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './styles/modulos.css';
import React from "react";
import Layout from './layouts/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Layout>
            <Route path = '/admin_usuarios'>
              <AdminUsuariosPage />
            </Route>
            <Route path = '/admin_vendedores'>
              <AdminVendedoresPage />
            </Route>
            <Route path = '/admin_ventas'>
              <AdminVentasPage />
            </Route>
            <Route path = '/clave'>
              <ClavePage />
            </Route>
            <Route path = '/principal'>
              <PrincipalPage />
            </Route>
            <Route path = '/registro_estado_ventas'>
              <RegistroEstadoVentasPage />
            </Route>
            <Route path = '/'>
              <Index />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;