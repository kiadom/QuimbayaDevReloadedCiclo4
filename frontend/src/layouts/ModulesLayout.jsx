import React from 'react';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";

function ModulesLayout(){
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Content/>
            <Footer/>
        </div>
    )
}

export { ModulesLayout };