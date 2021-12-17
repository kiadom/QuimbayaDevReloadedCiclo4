import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSMODAVANCE } from "../../graphql/avances/queries";
import { Link } from "react-router-dom";
import { useUser } from '../../context/userContext';
import { Sidebar } from "../../components/Sidebar";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const EntradaAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        const { userData } = useUser();
        const { data } = useQuery(GET_PROYECTOSMODAVANCE);
        
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSMODAVANCE", data);
        }, [data]);
        
        useEffect(() => {
            console.log("USUARIO", userData);
        }, [data]);
    

    return (
        <div className="body-text">
            <Sidebar icono={faClipboardCheck} titulo='AVANCES'/>
            <div className="contenedor-body">
                <div className="entrada-avances">
                <table>
                    <tr>
                        <td>
                            <p>Nombre Usuario: </p>
                        </td>
                        <td>
                            {(userData.nombre)+ " " +(userData.apellido) }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>ID Usuario: </p>
                        </td>
                        <td>
                            {userData._id }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Correo: </p>
                        </td>
                        <td>
                            {userData.correo }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Rol: </p>
                        </td>
                        <td>
                            {userData.rol }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Acciones: </p>
                        </td>
                        <td>
                            <button className="boton_3">
                            <Link to = {`/avances/IndexAvances/${userData._id }` }>                            
                                Ver Proyectos en los que estoy inscrito
                            </Link> 
                            </button>
                        </td>
                        <td>
                            <button className="boton_3">
                            <Link to = {`/avances/IndexAvancesLider/${userData._id }` }>                            
                                Ver Proyectos que Lidero
                            </Link> 
                            </button>
                        </td>
                    </tr>
                </table>

                </div>
            </div>
        </div>
    );
};

export default EntradaAvances