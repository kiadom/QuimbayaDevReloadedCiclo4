import React from 'react'
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { HeaderInicio } from '../components/HeaderInicio';

const InicioLayout = ({ children }) => {
    return (
        <div className='miInicio'>
            <HeaderInicio />
            <Outlet />
            <main>{ children }</main>            
        </div>
    )
};

export {InicioLayout};
