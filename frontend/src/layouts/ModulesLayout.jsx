import React from 'react';
import { Outlet } from 'react-router';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import '../styles/estilos.css'

function ModulesLayout ({ children }){
    return (
        <div className = 'mainContainer'>
            <Sidebar />
            <Header />
            <main>{ children }</main>
            <Footer />
            <Outlet />
        </div>
    );
};

export { ModulesLayout } ;