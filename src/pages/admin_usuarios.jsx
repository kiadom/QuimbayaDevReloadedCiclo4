import Sidebar from "../components/Sidebar";
import React, {useState} from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);


const AdminUsuariosPage = () => {
   
    const [datos, setDatos] = useState({
        id_usuario: '',
        tipo_usuario: '',
        estado_usuario: '',
        fecha_de_pago: '',
    })

    const entrada = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
            
        })
    }

    
    const enviarDatos = (e) => {
        e.preventDefault();

        alert("Los datos del pedido ingresado son: "+
        "\nID Usuario: " + datos.id_usuario +
        "\nTipo Usuario: " + datos.tipo_usuario+ 
        "\nEstado Usuario: " + datos.estado_usuario+ 
        "\nFecha de Pago: " + datos.fecha_de_pago);
    }      

    
    return (
        <div>
            <div className="wrapper">
                    <Sidebar icono = {faUsersCog} titulo = 'GESTION DE USUARIOS Y ROLES'/>

                <div className="principal">
                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE USUARIOS Y ROLES</div>
                        <div className="rp_subtitulo">INGRESE EL ID DEL USUARIO Y LOS ROLES A MODIFICAR</div>

                        <div className="rp_formulario1">
                            <form  onSubmit={enviarDatos}>
                                <table className="tabla">
                                    <tr>
                                        <td>ID del Usuario:</td>
                                        <td><input className="input" type="text" id="id_usuario" 
                                        name="id_usuario" placeholder="Id Usuario" onChange={entrada}/></td>
                                    </tr>
                                
                                    <tr>
                                        <td><p>Rol Autorizado:</p></td>
                                        <td><p>< select className="select" id="tipo_usuario" 
                                        name="tipo_usuario" onChange={entrada}>
                                            <option selected disabled>Seleccione Tipo Usuario</option>
                                            <option value="administrador">Administrador</option>
                                            <option value="vendedor">Vendedor</option>
                                        </select></p></td> 
                                    </tr>
                                    
                                    <tr>
                                        <td><p>Estado Usuario:</p></td>                
                                        <td><p><select className="select" id="estado_usuario" 
                                        name="estado_usuario" onChange={entrada} >
                                            <option selected disabled>Seleccione Estado Usuario</option>
                                            <option value="pendiente">Pendiente</option>
                                            <option value="autorizado">Autorizado</option>
                                            <option value="no_autorizado">No autorizado</option>
                                        </select></p></td> 
                                    </tr>

                                    
                                    <tr>
                                        <td><a href="#"><input className="boton2" type="reset" 
                                        value="Borrar"/></a></td>
                                        <td><a href="#"><input className="boton2" type="submit" 
                                        value="Actualizar"/></a></td>
                                        <td><a href="#"><input className="boton2" type="submit" 
                                        value="Generar Listado"/></a></td>
                                    </tr>
                                </table>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminUsuariosPage;