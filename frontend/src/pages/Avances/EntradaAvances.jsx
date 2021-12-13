import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSMODAVANCE } from "../../graphql/avances/queries";
import { Link } from "react-router-dom";
import { useUser } from '../../context/userContext';

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
                        <button>
                        <Link to = {`/avances/IndexAvances/${userData._id }` }>
                            {/*<FontAwesomeIcon icon={faPencilAlt}/>*/}
                            Ver Proyectos en los que estoy inscrito
                        </Link> 
                        </button>
                    </td>
                    <td>
                        <button>
                        <Link to = {`/avances/IndexAvancesLider/${userData._id }` }>
                            {/*<FontAwesomeIcon icon={faPencilAlt}/>*/}
                            Ver Proyectos que Lidero
                        </Link> 
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default EntradaAvances
