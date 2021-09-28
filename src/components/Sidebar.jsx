import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li><a href="principal.html" >
                    <span className="icon"><i className="fas fa-home"></i></span>
                    <span className="item"></span>Inicio</a></li>
                <li title="Registrar Pedidos Realizados por los Clientes">
                    <Link to = '/admin_ventas'>
                        <span className="icon"><i className="fas fa-search-dollar"></i></span>
                        <span className="item"></span>Informacion de Ventas
                    </Link>
                </li>
                <li title="Establecer el Estado Actual de una Venta">
                    <Link to = '/registro_estado_ventas'>
                        <span className="icon"><i className="fas fa-thermometer-three-quarters"></i></span>
                        <span className="item"></span>Estados de Ventas
                    </Link>
                </li>
                <li title="Ingresar Información de un Vendedor">
                    <Link to = '/admin_vendedores'>
                        <span className="icon"><i className="fas fa-id-card"></i></span>
                        <span className="item"></span>Información de Vendedores
                    </Link>
                </li>
                <li title="Restringir y Otorgar Accesos al Sistema">
                    <Link to = '/admin_usuarios'>
                        <span className="icon"><i className="fas fa-users-cog"></i></span>
                        <span className="item"></span>Gestión de Usuarios y Roles
                    </Link>
                </li>
                <li title="Salir del Sistema">
                    <Link to = '/'>
                        <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                        <span className="item"></span>Salir
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
