import React from 'react';

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";


function ModulesLayout ({ children }){
    return (
        <div className='prueba'>
            <Header />
            <Sidebar />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export { ModulesLayout } ;