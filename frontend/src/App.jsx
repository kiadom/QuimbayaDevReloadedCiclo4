import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { InicioLayout } from "./layouts/InicioLayout";
import PrivateLayout from './layouts/PrivateLayout'
import { AuthLayout } from './layouts/AuthLayout';
import { Index } from "./pages/Index";
import { GestionInscripciones } from './pages/GestionInscripciones';
import { InscripcionesPorProyecto } from './pages/InscripcionesPorProyecto';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionProyectosEditar } from './pages/GestionProyectosEditar';
import GestionUsuarios from './pages/usuario/GestionUsuarios';
import EstadoUsuarios from "./pages/usuario/EstadoUsuarios";
import Registro from './pages/auth/Registro';
import Login from './pages/auth/Login';
import Perfil from "./pages/usuario/Perfil";
import PerfilEditar from "./pages/usuario/PerfilEditar";
import jwt_decode from 'jwt-decode';
import { AuthContext } from "./context/authContext";
import { UserContext } from './context/userContext';

import EntradaAvances from "./pages/Avances/EntradaAvances";
import { IndexAvances } from "./pages/Avances/IndexAvances";
import { IndexAvancesLider } from "./pages/Avances/IndexAvancesLider";
import { AvancesPorProyecto } from "./pages/Avances/AvancesPorProyecto";
import { AvancesPorProyectoLider } from "./pages/Avances/AvancesPorProyectoLider";
import { DetalleAvances } from "./pages/Avances/DetalleAvances";
import { DetalleAvancesLider } from "./pages/Avances/DetalleAvancesLider";
//import { AvancesFinal } from "./pages/Avances/AvancesFinal";
//import EdicionAvances from "./pages/Avances/EdicionAvances";



//import { GestionAvances } from './pages/GestionAvances';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    console.log('set token', token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      console.log(decoded.nombre)
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Routes>
              <Route path='/' element={<InicioLayout />}>
                <Route path="/Index" element={<Index />} />
              </Route>
              <Route path='' element={<PrivateLayout/>}>
                <Route path="/GestionUsuarios" element={<GestionUsuarios />} />
                <Route path="/GestionUsuarios/Editar/:_id" element={<EstadoUsuarios />} />
                <Route path="/GestionProyectos" element={<GestionProyectos />} />
                <Route path="/GestionProyectos/Editar/:_id" element={<GestionProyectosEditar />} />
                <Route path="/GestionInscripciones" element={<GestionInscripciones />} />
                <Route path="/InscripcionesPorProyecto/:proyecto" element={<InscripcionesPorProyecto />} />
                <Route path="/Avances/EntradaAvances/" element={<EntradaAvances />} />
                <Route path="/Avances/IndexAvances/:estudianteInscrito" element={<IndexAvances />} />
                <Route path="/Avances/IndexAvancesLider/:lider" element={<IndexAvancesLider />} />
                <Route path="/Avances/AvancesPorProyecto/:proyecto" element={<AvancesPorProyecto />} />
                <Route path="/Avances/AvancesPorProyectoLider/:proyecto" element={<AvancesPorProyectoLider />} />
                <Route path="/Avances/DetalleAvances/:_id" element={<DetalleAvances />} />
                <Route path="/Avances/DetalleAvancesLider/:_id" element={<DetalleAvancesLider />} />                <Route path="/Perfil" element={<Perfil/>}/>
              </Route>
              <Route path='/auth' element={<AuthLayout />}>
                <Route path="Registro" element={<Registro />} />
                <Route path="Login" element={<Login />} />
              </Route>
            </Routes>
          </Router>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;