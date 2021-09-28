import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const Sidebar = (props) => {
    return (    
        <div className="wrapper">
            <div className="sidebar">
                <div className="EncabezadoModulo">
                    <FontAwesomeIcon icon={props.icono} size="5x" color='#00ADB5'/> 
                    <h3>{props.titulo}</h3>
                </div>
                <ul>
                    <li><a href="principal.html" >
                        <FontAwesomeIcon icon={faHome}/>
                        <span className="item"></span>  Inicio</a></li>
                    <li title="Registrar Pedidos Realizados por los Clientes">
                        <Link to = '/admin_ventas'>
                        <FontAwesomeIcon icon={faSearchDollar}/>
                        <span className="item"></span>  Informacion de Ventas
                        </Link>
                    </li>
                    <li title="Establecer el Estado Actual de una Venta">
                        <Link to = '/registro_estado_ventas'>
                            <FontAwesomeIcon icon={faThermometerThreeQuarters}/>
                            <span className="item"></span>  Estados de Ventas
                        </Link>
                    </li>
                    <li title="Ingresar Información de un Vendedor">
                        <Link to = '/admin_vendedores'>
                            <FontAwesomeIcon icon={faIdCard}/>
                            <span className="item"></span>  Información de Vendedores
                        </Link>
                    </li>
                    <li title="Restringir y Otorgar Accesos al Sistema">
                        <Link to = '/admin_usuarios'>
                            <FontAwesomeIcon icon={faUsersCog}/>  
                            <span className="item"></span>  Gestión de Usuarios y Roles
                        </Link>
                    </li>
                    <li title="Salir del Sistema">
                        <Link to = '/'>
                            <FontAwesomeIcon icon={faSignOutAlt}/> 
                            <span className="item"></span>  Salir
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar