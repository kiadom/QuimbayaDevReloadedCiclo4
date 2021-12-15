import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { HeaderInicio } from '../components/HeaderInicio';
import {Footer} from '../components/Footer'
import { Grid } from '../components/Grid';
const InicioLayout = () => {
    return (
        <div className='index'>
            <HeaderInicio />
            <Grid/>
            <Outlet />
            <main></main>
            <Footer/>           
        </div>
    )
};

export {InicioLayout};
