import React, { useState }from 'react';
import logoheader from '../media/logoheader.png';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <p>Registro</p>
                <p>Ingreso</p>
                <p>Usuario</p>
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