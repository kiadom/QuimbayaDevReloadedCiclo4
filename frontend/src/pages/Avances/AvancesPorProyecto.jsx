import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCESPORPROYECTO, GET_AVANCES2 } from "../../graphql/avances/queries";
import { useParams, Link } from "react-router-dom";


const AvancesPorProyecto = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Avances Reportados' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    const { proyecto } = useParams();
    const { data } = useQuery(GET_AVANCESPORPROYECTO,{
        variables:{ proyecto }
    });

    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCESPORPROYECTO", data);
    }, [data]);



    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Avance" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Avance');
        }
        else {
            setTextoBoton('Ver Avances Reportados');
        }
    },[mostrarTabla]);

    return (
        <div className="body-text">
            <button onClick = {() => {
                setMostrarTabla (!mostrarTabla);
                }}
            >{ textoBoton }</button>
            { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) 
            : (<FormularioRegistroAvances />)}
        </div>
    );
};

const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
            <h1 className="rp_subtitulo">Lista de Avances del Proyecto</h1>
                      <table >
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                               <tr key = { p.proyecto }>
                                    <tr>
                                        <td>Titulo: </td>
                                        <td>{ p.titulo }</td>
                                        <td><Link to = {`/avances/DetalleAvances/${p._id}` }>
                                                <button onClick={() => {}}> Editar Avance </button>
                                            </Link> </td>
                                    </tr>

                                    <tr>
                                        <td>Proyecto: </td>
                                        <td>{ p.proyecto.nombre }</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>ID del Avance: </td>
                                        <td>{ p._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Fecha:</td>
                                        <td>{ p.fecha}</td>    
                                    </tr>
                                    <tr>
                                        <td>Detalle del Avance:</td>
                                        <td>{ p.descripcion}</td>    
                                    </tr>
                                    <tr>
                                        <td>Observaciones Lider:</td>
                                        <td>{ p.observacionesLider}</td>    
                                    </tr>
                                    

                                </tr>
                            )
                        })}
                </table>
        </div>
    )
}

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroAvances = ()=> {
    return (
        <div>
            <h1>Ingrese el Proyecto</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <p>Nombre del Proyecto: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Descripcion: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type = "button" value = "Registrar Avance" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}


export {AvancesPorProyecto} ;