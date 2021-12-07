import React from 'react';
import logoNerd from './media/logoheader.png';
import '../styles/estilos.css';

function Header(){
    return (
        <div class="header">
            <div className="logoNerdALert">
                <img src={ logoNerd } alt="logo header" />
            </div>
            <h1>Este es el Header</h1>
        </div>
    )
}

export { Header };