import logoheader from '../images/logoheader.png';
import footerloginV2 from '../images/footerloginV2.png';

function AdminUsuariosPage(){
    return (
        <div>
            
            <div class="wrapper">
                <div class="sidebar">
                    <div class="EncabezadoModulo">
                        <span class="icon"><i class="fas fa-users-cog fa-5x"></i></span>
                        <h3>GESTION DE USUARIOS Y ROLES</h3>
                    </div>

                    <ul>
                        <li><a href="principal.html" >
                            <span class="icon"><i class="fas fa-home"></i></span>
                            <span class="item"></span>Inicio</a></li>
                        <li title="Registrar Pedidos Realizados por los Clientes"><a href="admin_ventas.html">
                            <span class="icon"><i class="fas fa-search-dollar"></i></span>
                            <span class="item"></span>Informacion de Ventas</a></li>
                        <li title="Establecer el Estado Actual de una Venta"><a href="registro_estado_ventas.html">
                            <span class="icon"><i class="fas fa-thermometer-three-quarters"></i></span>
                            <span class="item"></span>Estados de Ventas</a></li>
                        <li title="Ingresar Información de un Vendedor"><a href="admin_vendedores.html">
                            <span class="icon"><i class="fas fa-id-card"></i></span>
                            <span class="item"></span>Información de Vendedores</a></li>
                        <li title="Restringir y Otorgar Accesos al Sistema"> <a href="admin_usuarios.html">
                            <span class="icon"><i class="fas fa-users-cog"></i></span>
                            <span class="item"></span>Gestión de Usuarios y Roles</a></li>
                        <li  title="Salir del Sistema"><a href="">
                            <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                            <span class="item"></span>Salir</a></li>
                    </ul>
                   
                </div>

                <div class="principal">
                    <div class="topNavBar">
                        <div class="hamburger">
                            <a href="#"><i class="fas fa-bars"></i></a>
                        </div>

                        <div class="iconCompany">
                            <img src= {logoheader} alt="logo header" height="50px"/> 
                        </div>
                    </div>

                    <div class="Menu">
                        <div class="rp_titulo">GESTION DE USUARIOS Y ROLES</div>
                        <div class="rp_subtitulo">INGRESE EL ID DEL USUARIO Y LOS ROLES A MODIFICAR</div>


                        <div class="rp_formulario1">
                            <form action="">
                                <table class="tabla">
                                    <tr>
                                        <td>ID del Usuario:</td>
                                        <td><input type="text" name="id_usuario"/></td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Informacion de Ventas</td>
                                        <td><input type="radio" name="gestion_informacion_ventas"/>Si
                                            <input type="radio" name="gestion_informacion_ventas"/>No
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Maestro Estados de Ventas</td>
                                        <td><input type="radio" name="maestro_estados_ventas"/>Si
                                            <input type="radio" name="maestro_estados_ventas"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Información de Vendedores</td>
                                        <td><input type="radio" name="informacion_vendedores"/>Si
                                            <input type="radio" name="informacion_vendedores"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Usuarios y Roles</td>
                                        <td><input type="radio" name="roles_y_usuarios"/>Si
                                            <input type="radio" name="roles_y_usuarios"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><a href="#"><input class="botons" type="reset" value="Borrar ID"/></a></td>
                                        <td><a href="#"><input class="botons" type="submit" value="Buscar Usuario"/></a></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>
                    <div class="footer">
                        <img src= {footerloginV2} alt="footer" height="50px"/>
                    </div>
                </footer>
                
            </div>

        </div>
    )
}

export default AdminUsuariosPage;