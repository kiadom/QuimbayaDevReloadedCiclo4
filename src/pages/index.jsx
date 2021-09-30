import logo from '../images/logologin.png';
import React, {useState} from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const Index = () => {
    const [datos, setDatos] = useState({
        user: '',
        password: ''
    })

    const entrada = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
            
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        
        let credencial = new Map();
            credencial.set("administrador","admin")
            credencial.set("operario","operario")
            credencial.set("vendedeor","vendedor")
        
        if (credencial.has(datos.user)){
            if (datos.password === credencial.get(datos.user)){
                alert("Bienvenido " + datos.user);
                window.open("./principal", "_self");
                return false;
            }else{
            alert("Datos incorrectos")
            }
            
        }else{
        alert("Datos incorrectos")
        }
    }

    return (
        <body className = 'bodyAuth'>
            <div className="contenedor">
                <div className="contenedor-login">
                    
                    <div className="contenedor-logo">
                        <img className="logo" src={logo} alt="logo-quimbaya"></img>
                    </div>

                    <form className="contenedor-info" id="form" name="Ingreso" onSubmit={enviarDatos}>
                        <input className="input" id="user" name="user" type="text" placeholder="Usuario" onChange={entrada} required=""></input>
                        <input className="input" id="password" name="password" type="password" placeholder="Contraseña" onChange={entrada} required=""></input>
                        <button className="boton" type="submit">Ingresar</button>
                    </form>

                </div>
            </div>
        </body>
    )
};

export default Index;