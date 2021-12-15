import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import PrivateComponent from './PrivateComponent';

library.add(faAddressCard);

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/auth/login'>
            <FontAwesomeIcon icon={faSignOutAlt} size='1x' color='#092133'/>
            <span ></span> Cerrar Sesión
        </NavLink>
      </li>
    );
  };

function Sidebar(){
    return (
        <div className="wrapper">
            <div className ="sidebar">
                <div className ="EncabezadoModulo">
                    <div className='iconoEncabezado'>
                    <FontAwesomeIcon icon={ faProjectDiagram } size="5x" color='#092133'/>
                    </div>
                    <h4 className='tituloEncabezado'>Sistema de Información y <br/> Soporte a la Gestión <br /> de Proyectos de Investigación</h4>
                    <ul>
                        <li>
                        <NavLink to ='/'>
                            <FontAwesomeIcon icon={faHome} size='1x' color='#092133'/>
                            <span className=''></span> Inicio
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to ='/GestionUsuarios'> 
                            <FontAwesomeIcon icon={faUsers} size='1x' color='#092133'/>
                            <span className=''></span> Usuarios
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink to ='/GestionInscripciones'> 
                            <FontAwesomeIcon icon={faFileSignature} size='1x' color='#092133'/>
                            <span className=''></span> Inscripciones
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink to ='/GestionProyectos'>
                            <FontAwesomeIcon icon={faProjectDiagram} size='1x' color='#092133'/>
                            <span className=''></span> Proyectos
                        </NavLink>
                        </li>
                        <li>
                            
                        <NavLink to ='/Avances/EntradaAvances'> 
                            <FontAwesomeIcon icon={faClipboardCheck} size='1x' color='#092133'/>
                            <span className=''></span> Avances
                        </NavLink> 
                        
                        </li>
                        <li>
                            <p><Logout/></p>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}


export { Sidebar };