import logologin from '../images/logologin.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const Index = () => {
    return (
        <body className = 'bodyAuth'>
            <div class="contenedor">
                <div class="contenedor-login">
                    <div class="contenedor-logo">
                        <img class="logo" src={logologin} alt=""/>
                    </div>
                    <form>
                        <input class="input-pass" id="user" name='user' type="text" placeholder="Usuario" required/>
                        <input class="input-pass" id="password" name='password' type="password" placeholder="Contraseña" required/>
                        <button class="boton" type="submit" onclick="obtenerdatos()">Ingresar</button>
                    </form>
                </div>
            </div>
        </body>
    )
};

export default Index;