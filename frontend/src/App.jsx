import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { ModulesLayout } from './layouts/ModulesLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { GestionInscripciones } from './pages/GestionInscripciones';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionProyectosEditar } from './pages/GestionProyectosEditar';
import { GestionUsuarios } from './pages/GestionUsuarios';
import Registro from './pages/auth/Registro';
import Login from './pages/auth/Login';
import { AuthContext } from "./context/authContext";

import { IndexAvances } from "./pages/Avances/IndexAvances";
import { AvancesPorProyecto } from "./pages/Avances/AvancesPorProyecto";
import { DetalleAvances } from "./pages/Avances/DetalleAvances";

//import { GestionAvances } from './pages/GestionAvances';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(true);

  const setToken = (data) => {
    setAuthToken(data);
    console.log('dt token', data);
    if (data) {
      localStorage.setItem('token', JSON.stringify(data));
    } else {
      localStorage.removeItem('token');
    }
    setLoadingAuth(false);
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setToken, loadingAuth }}>

        <Router>
          <ModulesLayout>
            <Routes>
              <Route exact path="/GestionUsuarios" element={<GestionUsuarios/>}/>
              <Route exact path="/GestionProyectos" element={<GestionProyectos/>}/>
              <Route exact path="/GestionProyectos/Editar/:_id" element={<GestionProyectosEditar />}/>
              <Route exact path="/GestionInscripciones" element={<GestionInscripciones/>}/>
              <Route exact path="/Avances/IndexAvances" element={<IndexAvances/>}/>
              <Route exact path="/Avances/AvancesPorProyecto/:proyecto" element={<AvancesPorProyecto/>}/>
              <Route exact path="/Avances/DetalleAvances/:_id" element={<DetalleAvances/>}/>
            </Routes>
          </ModulesLayout>

          <AuthLayout>
            <Routes>
              <Route exact path="/auth/Registro" element={<Registro />} />
              <Route exact path="/auth/Login" element={<Login />} />
            </Routes>
          </AuthLayout>
        </Router>

      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;