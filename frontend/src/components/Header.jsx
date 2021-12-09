import React from 'react';
import logoheader from '../media/logoheader.png';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header  () {
    return (
        <div className="wrapper">
            {/* //no haynecesidad de poner class name// */}
            <header className="principal"> 
            {/* <div className="topNavBar"> */}
                <div className="iconCompany">
                    <img src= {logoheader} alt="logo-header" height="70px"/>
                </div>
                <div className='botonHeader'>
                <p>Registro</p>
                <p>Ingreso</p>
                <p>Usuario</p>
                </div>
                

            {/* </div> */}
            </header>
        </div>
    );
};

export {Header} ;