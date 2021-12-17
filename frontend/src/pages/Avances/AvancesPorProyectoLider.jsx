import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { useUser } from '../../context/userContext';
import useFormData from "../../hooks/useFormData";
import  ButtonLoading from '../../components/ButtonLoading';
import { GET_AVANCESPORPROYECTO, GET_AVANCES2 } from "../../graphql/avances/queries";
import { CREAR_AVANCE } from "../../graphql/avances/mutations";
import { DetalleAvances } from "./DetalleAvances";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faClipboardCheck, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {Sidebar} from '../../components/Sidebar';

function AvancesPorProyectoLider () {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Avances Reportados' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */

    const { proyecto } = useParams();
    const { data, loading } = useQuery(GET_AVANCESPORPROYECTO,{
        variables:{ proyecto }
    });
    
    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCESPORPROYECTO", proyecto);
    }, [data]);
    

        /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Avance" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Ver Avances Reportados');
        }
        else {
            setTextoBoton('Ver Avances Reportados');
        }
    },[mostrarTabla]);


    if (!loading){
        return (
            <div className = "body-text">
                <Sidebar icono={faClipboardCheck} titulo ='AVANCES DE LOS PROYECTOS LIDERADOS'/>
                <div className="contenedor-body">
                    <div className="rp_titulo">GESTIÓN DE AVANCES</div>
                    <div className="rend_Dinamica">
                        <button onClick = {() => {
                            setMostrarTabla (!mostrarTabla);
                            }}
                            className="boton_1">{ textoBoton }
                        </button>
                        { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) : (<TablaAvances listaAvances = { data } />)}
                     </div>
                </div>
            </div>
        );
    }        

    /* MIENTRAS LA APLICACION ESTÁ CARGANDO SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "contenedor-body">
            <div className='cargando'>        
            </div>
        </div>
    );
};


const TablaAvances = ({ listaAvances }) => {
    return (
        <div className = "rp_formulario">
            <Link to='/Avances/EntradaAvances'>
            <h1 className = "rp_subtitulo">
                <FontAwesomeIcon icon={ faArrowLeft } size="1x" color='#FFFFFF' className='cursor-pointer'/>
                <span>   Volver Menu Avances </span></h1>            
            </Link>
            <h1>Lista de Avances del Proyecto</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre Proyecto</th>
                            <th>ID Avance</th>
                            <th>Titulo Avance</th>
                            <th>Descripcion</th>
                            <th>Observaciones Lider</th>
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
                                    <td>{ p.descripcion }</td>
                                    <td>{ p.observacionesLider }</td>
                                    <td>
                                        <button className="boton_1">
                                        <Link to = {`/avances/DetalleAvancesLider/${p._id}` }>
                                           
                                            Editar Observacion
                                        </Link> 
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
        </div>
    )
};




export {AvancesPorProyectoLider} ;