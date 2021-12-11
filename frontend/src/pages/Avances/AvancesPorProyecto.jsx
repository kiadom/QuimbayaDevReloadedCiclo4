import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCESPORPROYECTO } from "../../graphql/avances/queries";
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
            { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) : (<FormularioRegistroAvances listaAvances = { data } />)}
        </div>
    );
};



const TablaAvances = ({ listaAvances }) => {
    return (
        <div className="rp_formulario">
            <h1>Lista de Reportes de Avance del Proyecto</h1>
           

                <table className="table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>ID Avance</th>
                            <th>Titulo Avance</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                                <tr key = { p.proyecto }>
                                    <td>{ p.proyecto.nombre }</td>
                                    <td>{ p._id }</td>
                                    <td>{ p.titulo }</td>
                                    
                                    <td>
                                        <Link to = {`/avances/DetalleAvances/${p._id}` }>
                                           
                                            Detalles Avance
                                        </Link> 
                                    </td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
        </div>
    )
}

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS AVANCES */
const FormularioRegistroAvances = ({ listaAvances })=> {
    return (
        <div className="rp_formulario">
                {/*
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                                <tr key = { p.proyecto }>
                                    <td>{ p.proyecto._id }</td>
                                 </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
                    */}
        <h1>Ingrese el Avance</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <p>Fecha: </p>
                        </td>
                        <td>
                            <input type = "date" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Titulo: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Detalle de Avance: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Proyecto: </p>
                        </td>
                        <td>
                            <input 
                                type = "text" required
                               
                            />
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