import React from 'react'
import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { HeaderInicio } from '../components/HeaderInicio';
import {Footer} from '../components/Footer'
const InicioLayout = ({ children }) => {
    return (
        <div className='index'>
            <HeaderInicio />
            <Outlet />
            <main>{ children }</main>
            <Footer/>           
        </div>
    )
};

export {InicioLayout};
