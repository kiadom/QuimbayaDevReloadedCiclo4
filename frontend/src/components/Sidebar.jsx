import React from 'react';
import imagen from '../media/logoheader.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
library.add(faAddressCard);
function Sidebar(){
    return (
        <div className="wrapper">
            <div className ="sidebar">
                <div className ="EncabezadoModulo">
                    <FontAwesomeIcon icon={ faProjectDiagram } size="5x" color='#092133'/>
                    <h4>Gestión Proyectos</h4>
                    <ul>
                        <li>
                        {/* <Link to ='/GestionProyectos'> */}
                            <FontAwesomeIcon icon={faHome} size='1x' color='#092133'/>
                            <span className=''></span> Inicio
                        {/* </Link> */}
                        </li>
                        <li>
                        {/* <Link to ='/GestionProyectos'> */}
                            <FontAwesomeIcon icon={faUsers} size='1x' color='#092133'/>
                            <span className=''></span> Usuarios
                        {/* </Link> */}
                        </li>
                        <li>
                        {/* <Link to ='/GestionProyectos'> */}
                            <FontAwesomeIcon icon={faFileSignature} size='1x' color='#092133'/>
                            <span className=''></span> Inscripciones
                        {/* </Link> */}
                        </li>
                        <li>
                        {/* <Link to ='/GestionProyectos'> */}
                            <FontAwesomeIcon icon={faClipboardCheck} size='1x' color='#092133'/>
                            <span className=''></span> Avances
                        {/* </Link> */}
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export { Sidebar };