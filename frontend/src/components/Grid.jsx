import React from 'react'
import logoindex from '../media/logoindex-01.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt, faBullseye} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import PrivateComponent from './PrivateComponent';

const Grid = () => {
    return (        
        <div className='Body-index'>
            <div className="square">
                <NavLink to='/GestionProyectos'>
                    <FontAwesomeIcon icon={faProjectDiagram} size='5x'/>            
                    <p>Proyectos</p>                            
                </NavLink>
            </div>
            <div className="square">
            <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
                <NavLink to='/GestionUsuarios'>
                    <FontAwesomeIcon icon={faUsers} size='5x'/>            
                    <p>Usuarios</p>
                </NavLink>
            </PrivateComponent>
            <PrivateComponent roleList={["ESTUDIANTE"]}>
                <FontAwesomeIcon icon={faUsers} size='5x' color="#344857"/>            
                <p>Usuarios</p> 
            </PrivateComponent>                   
            </div>
            <div className="square">
                <NavLink to='/GestionInscripciones'>
                    <FontAwesomeIcon icon={faAddressCard} size='5x'/>
                    <p>Inscripciones</p>
                </NavLink>
            </div>                
            <div className="square">
                <NavLink to='/Avances/EntradaAvances'>
                    <FontAwesomeIcon icon={faClipboardCheck} size='5x'/>
                    <p>Avances</p>
                </NavLink>
            </div>
            <div className="square">
                <a href='https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/release/README.md'>
                    <img src={logoindex}alt="" />
                    <p>NerdAlert</p>
                </a>
            </div>           
            <div className="square">
                <NavLink to='/GestionInscripciones'>
                    <FontAwesomeIcon icon={faSignOutAlt} size='5x'/>
                    <p><Logout className='dark'/></p>
                </NavLink>
            </div>
        </div>
    )
};

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <div>
        <ul>

          <li onClick={() => deleteToken()}>
            <NavLink to='/auth/login'>
              <div class='salirIndex'>
                <span >Cerrar Sesión</span>
              </div>
            </NavLink>
          </li>
            
        </ul>
      </div>
       );
    };

export {Grid};