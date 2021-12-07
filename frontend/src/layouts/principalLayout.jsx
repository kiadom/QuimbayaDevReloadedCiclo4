import React from 'react'
import '../styles/estilos.css';

export default function PrincipalLayout({ children }) {
    return (
        <div>
            <main>{ children }</main>
        </div>
    )
};

export { PrincipalLayout };