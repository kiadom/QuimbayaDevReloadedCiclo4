import gestion_ventas from '../images/gestion-ventas.png';
import estado_ventas from '../images/estado-ventas.png';
import gestion_usuario from '../images/gestion-usuario.png';
import gestion_informacion from '../images/gestion-informacion.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const Principal = () => {
    return (
        <body className = 'bodyMain'>
            <div class="container overflow-hidden" id="grid">
                <div class="row gy-5">
                    <div class="col-6">  
                    <div class="p-3 bg-light">
                        <Link to = '/admin_ventas'>
                            <img src={gestion_ventas} alt="" width="100" height="100"/>
                        </Link>
                        Gestion de Ventas</div>
                    </div>
                    
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <Link to = '/registro_estado_ventas'>
                            <img src={estado_ventas} alt="" width="100" height="100"/>
                        </Link>
                        Estado de Ventas</div>
                    </div>
                    
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <Link to = '/admin_usuarios'>
                            <img src={gestion_usuario} alt="" width="100" height="100"/>
                        </Link>
                        Gestion de Usuarios</div>
                    </div>
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <Link to = '/admin_vendedores'>
                            <img src={gestion_informacion} alt="" width="100" height="100"/></Link>
                        Gestion de Información</div>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default Principal;