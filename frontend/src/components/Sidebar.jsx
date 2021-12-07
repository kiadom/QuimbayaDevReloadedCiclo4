import React from 'react';
import imagen from '../media/logoheader.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
library.add(faAddressCard);
function Sidebar(){
    return (
        <div className="wrapper">
            <div className ="sidebar">
                <div className ="EncabezadoModulo">
                    <FontAwesomeIcon icon={faAddressCard} size="5x" color='#092133'/>
                    <h4>Gestión Usuarios</h4>
                </div>
                
            </div>
        </div>
    )
}

export { Sidebar };