import React from 'react';
import imagen from '../media/logoheader.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import PrivateComponent from './PrivateComponent';

library.add(faAddressCard);

function Sidebar(){
    return (
        <div className="wrapper">
            <div className ="sidebar">
                <div className ="EncabezadoModulo">
                    <div className='iconoEncabezado'>
                    <FontAwesomeIcon className ="iconoEncabezado" icon={ faProjectDiagram } size="5x" color='#092133'/>
                    </div>
                    <h4 className='tituloEncabezado'>Gestión Proyectos</h4>
                    <ul>
                        <li>
                        <NavLink to ='/GestionProyectos'>
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
                        <NavLink to ='/Avances'> 
                            <FontAwesomeIcon icon={faClipboardCheck} size='1x' color='#092133'/>
                            <span className=''></span> Avances
                        </NavLink> 
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}


export { Sidebar };