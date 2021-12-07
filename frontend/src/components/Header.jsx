import React from 'react';
import logoNerd from '../media/logoheader.png';

function Header  () {
    return (
        <div className="header">
            <div className="logoNerdALert">
                <img src={ logoNerd } alt="logo header" />
            </div>
            <button className="botonIngreso">
                INGRESO
            </button>
            <button className="botonRegistro">
                REGISTRO
            </button>
            
        </div>
    )
}

export {Header} ;