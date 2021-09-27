import Index from './pages';
import admin_usuarios_page from './pages/admin_usuarios';
import admin_vendedores_page from './pages/admin_vendedores';
import admin_ventas_page from './pages/admin_ventas';
import clave_page from './pages/clave';
import entrada_page from './pages/entrada';
import registro_estado_ventas_page from './pages/registro_estado_ventas';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './styles/modulos.css';
import React from "react";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/admin_usuarios'>
            <admin_usuarios_page/>
          </Route>
          <Route path='/admin_vendedores'>
            <admin_vendedores_page/>
          </Route>
          <Route path='/admin_ventas'>
            <admin_ventas_page/>
          </Route>
          <Route path='/clave'>
            <clave_page/>
          </Route>
          <Route path='/entrada'>
            <entrada_page/>
          </Route>
          <Route path='/registro_estado_ventas'>
            <registro_estado_ventas_page/>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>       
    </div>
  );
}

export default App; 

/*
function App() {
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">

            <div class="EncabezadoModulo">
                <span class="icon"><i class="fas fa-search-dollar fa-5x"></i></span>
                <h3>GESTION DE LA INFORMACION DE VENTAS</h3>
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
                    <img src= "images\logoheader.png" alt="logo header" height="50px"/>
                </div>
            </div>

            <div class="Menu">
                <div class="rp_titulo">GESTION DE LA INFORMACION DE VENTAS</div>
                <div class="rp_subtitulo">INGRESE LA INFORMACION DEL PEDIDO</div>
                
                <form class="rp_formulario1" id="formulario" method="POST" action="data.php">
                    <table class="tabla">
                        <tr>
                            <td><p>Venta ID:</p></td>
                            <td><p><input class="input" type="text" id="venta_id" name="venta_id" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><p>Venta Total: </p></td>
                            <td><p><input class="input" type="number" id="venta_total" name="venta_total" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><p>Detalle: </p></td>
                            <td><p><input class="input" type="text" id="detalle" name="detalle" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><p>Fecha de Pago: </p></td>
                            <td><p><input class="input" type="date" id="fecha_de_pago" name="fecha_de_pago" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><p>Fecha de Pago Futura:&emsp;&emsp;</p></td>
                            <td><p><input class="input" type="date" id="fecha_de_pago_futura" name="fecha_de_pago_futura" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><p>Responsable: </p></td>
                            <td><p><input class="input" type="text" id="responsable" name="responsable" size="30"/></p></td>
                        </tr>
                        <tr>
                            <td><br/></td>
                            <td><br/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class="boton" type="button" onclick="ingresarPedido()">Ingresar Pedido</button>
                            </td>
                        </tr>
                    </table>
                </form>

                <footer>
                    <div class="footer">
                        <img src= "images\footerloginV2.png" alt="footer" height="50px"/>
                    </div>
                </footer>
            </div>
        </div>
    </div>
  </div>
  );
}


export default App;
*/
