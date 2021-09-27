import logoheader from '../images/logoheader.png';
import footerloginV2 from '../images/footerloginV2.png';

function AdminVentasPage(){
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">

                    <div className="EncabezadoModulo">
                        <span className="icon"><i className="fas fa-search-dollar fa-5x"></i></span>
                        <h3>GESTION DE LA INFORMACION DE VENTAS</h3>
                    </div>

                    <ul>
                        <li><a href="principal.html" >
                            <span className="icon"><i className="fas fa-home"></i></span>
                            <span className="item"></span>Inicio</a></li>
                        <li title="Registrar Pedidos Realizados por los Clientes"><a href="admin_ventas.html">
                            <span className="icon"><i className="fas fa-search-dollar"></i></span>
                            <span className="item"></span>Informacion de Ventas</a></li>
                        <li title="Establecer el Estado Actual de una Venta"><a href="registro_estado_ventas.html">
                            <span className="icon"><i className="fas fa-thermometer-three-quarters"></i></span>
                            <span className="item"></span>Estados de Ventas</a></li>
                        <li title="Ingresar Información de un Vendedor"><a href="admin_vendedores.html">
                            <span className="icon"><i className="fas fa-id-card"></i></span>
                            <span className="item"></span>Información de Vendedores</a></li>
                        <li title="Restringir y Otorgar Accesos al Sistema"> <a href="admin_usuarios.html">
                            <span className="icon"><i className="fas fa-users-cog"></i></span>
                            <span className="item"></span>Gestión de Usuarios y Roles</a></li>
                        <li  title="Salir del Sistema"><a href="">
                            <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                            <span className="item"></span>Salir</a></li>
                    </ul>

                </div>
                
                <div className="principal">
                    <div className="topNavBar">
                        <div className="hamburger">
                            <a href="#"><i className="fas fa-bars"></i></a>
                        </div>
                        
                        <div className="iconCompany">
                            <img src= {logoheader} alt="logo header" height="50px"/>
                        </div>
                    </div>

                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE LA INFORMACION DE VENTAS</div>
                        <div className="rp_subtitulo">INGRESE LA INFORMACION DEL PEDIDO</div>
                        
                        <form className="rp_formulario1" id="formulario" method="POST" action="data.php">
                            <table className="tabla">
                                <tr>
                                    <td><p>Venta ID:</p></td>
                                    <td><p><input className="input" type="text" id="venta_id" name="venta_id" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Venta Total: </p></td>
                                    <td><p><input className="input" type="number" id="venta_total" name="venta_total" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Detalle: </p></td>
                                    <td><p><input className="input" type="text" id="detalle" name="detalle" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Fecha de Pago: </p></td>
                                    <td><p><input className="input" type="date" id="fecha_de_pago" name="fecha_de_pago" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Fecha de Pago Futura:&emsp;&emsp;</p></td>
                                    <td><p><input className="input" type="date" id="fecha_de_pago_futura" name="fecha_de_pago_futura" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Responsable: </p></td>
                                    <td><p><input className="input" type="text" id="responsable" name="responsable" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><br/></td>
                                    <td><br/></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="boton" type="button" onclick="ingresarPedido()">Ingresar Pedido</button>
                                    </td>
                                </tr>
                            </table>
                        </form>

                        <footer>
                            <div className="footer">
                                <img src= {footerloginV2} alt="footer" height="50px"/>
                                <img src= {footerloginV2} alt="footer" height="50px"/>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminVentasPage;