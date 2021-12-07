import React from 'react';
import logoheader from '../media/logoheader.png';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header  () {
    return (
        <div className="wrapper">
            <header className="principal">
            <div className="topNavBar">
                <div className="hamburger">
                    <br />
                    <FontAwesomeIcon icon={faBars}/> 
                </div>

                <div className="iconCompany">
                    <img src= {logoheader} alt="logo-header" height="70px"/>
                </div>
            </div>
            </header>
        </div>
    );
};

export {Header} ;