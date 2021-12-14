import React, { useState }from 'react';
import logoheader from '../media/logoheader.png';
import { useAuth } from '../context/authContext';
import { NavLink } from 'react-router-dom';



function Header  () {
    return (
        <div className="wrapper">
            <header className="principal"> 
              <div className="iconCompany">
                <img src= {logoheader} />
              </div>
              <div className='botonHeader'>
                <bottom>Registro</bottom>
                <bottom>Ingreso</bottom>
                <bottom>Usuario</bottom>
                <p><Logout/></p>
              </div>
            </header>
        </div>
    );
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/auth/login'>
          <div >
            <i  />
            <span >Cerrar Sesión</span>
          </div>
        </NavLink>
      </li>
      
    
    );
  };


export {Header} ;