//import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { ModulesLayout } from './layouts/ModulesLayout';
import AuthLayout from './layouts/AuthLayout';
import { PrincipalLayout } from './layouts/principalLayout';

import { GestionAvances } from './pages/GestionAvances';
import { GestionInscripciones } from './pages/GestionInscripciones';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionUsuarios } from './pages/GestionUsuarios';
import Registro from './pages/auth/Registro';
import Login from './pages/auth/Login';
import { AuthContext } from "./context/authContext";


import {Principal} from './pages/Principal';

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

          <Routes>
            <Route path='/' element={<ModulesLayout />}>
              <Route exact path="/GestionAvances" element={<GestionAvances />} />
              <Route exact path="/GestionInscripciones" element={<GestionInscripciones />} />
              <Route exact path="/GestionProyectos" element={<GestionProyectos />} />
              <Route exact path="/GestionUsuarios" element={<GestionUsuarios />} />
            </Route>
            <Route path='/auth' element={<AuthLayout />}>
              <Route exact path="Registro" element={<Registro />} />
              <Route exact path="Login" element={<Login />} />
            </Route>
            <Route path="/Principal" element={<PrincipalLayout/>}>
              <Route exact path="/Principal" element={<Principal/>}/>              
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>


  );
}

export default App;