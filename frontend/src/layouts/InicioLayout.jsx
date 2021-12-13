import React from 'react'
import { Outlet } from 'react-router';

const InicioLayout = ({ children }) => {
    return (
        <div className='miInicio'>
            <Outlet />
            <main>{ children }</main>            
        </div>
    )
};

export {InicioLayout};
