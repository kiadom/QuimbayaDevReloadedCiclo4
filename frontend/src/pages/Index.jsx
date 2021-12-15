import React from 'react'
import logoindex from '../media/logoindex.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt, faBullseye} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';

const Index = () => {
    return (        
        <div className='Body-index'>
            <div className="square">
                <NavLink to='/GestionProyectos'>
                    <FontAwesomeIcon icon={faProjectDiagram} size='5x'/>            
                    <p className='proyectos'>Proyectos</p>                            
                </NavLink>
            </div>
            <div className="square">
                <NavLink to='/usuario/EstadoUsuario'>
                    <FontAwesomeIcon icon={faUsers} size='5x'/>            
                    <p>Usuarios</p>
                </NavLink>                    
            </div>
            <div className="square">
                <NavLink to='/GestionInscripciones'>
                    <FontAwesomeIcon icon={faAddressCard} size='5x'/>
                    <p>Inscripciones</p>
                </NavLink>
            </div>                
            <div className="square">
                <NavLink to='Avances/AvancesPorProyecto'>
                    <FontAwesomeIcon icon={faClipboardCheck} size='5x'/>
                    <p>Avances</p>
                </NavLink>
            </div>
            <div className="square">
                <NavLink to='https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/release/README.md'>
                    <img src={logoindex}alt="" />
                    <p>NerdAlert</p>
                </NavLink>
            </div>           
            <div className="square">
                <NavLink to='/GestionInscripciones'>
                    <FontAwesomeIcon icon={faSignOutAlt} size='5x'/>
                    <p>Objetivos</p>
                </NavLink>
            </div>
        </div>
    )
};

export {Index};