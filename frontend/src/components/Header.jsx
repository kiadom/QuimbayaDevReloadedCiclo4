import React from 'react';
import logoNerd from '../media/logoheader.png';
import '../styles/estilos.css';

function Header(){
    return (
        <div class="header">
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

export { Header };