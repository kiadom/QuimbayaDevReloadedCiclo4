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
import {faArrowLeft, faClipboardCheck, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../../components/Sidebar";

function AvancesPorProyecto () {

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
            setTextoBoton('Registrar Avance');
        }
        else {
            setTextoBoton('Ver Avances Reportados');
        }
    },[mostrarTabla]);


    if (!loading){
        return (
            <div className = "body-text">
                <Sidebar icono={faClipboardCheck} titulo ='AVANCES DE LOS PROYECTOS INSCRITOS'/>
                <div className="contenedor-body">                
                    <div className="rp_titulo">GESTIÓN DE AVANCES</div>
                    <div className="rend_Dinamica">
                        <button onClick = {() => {
                            setMostrarTabla (!mostrarTabla);
                            }}
                            className="boton_1">{ textoBoton }
                        </button>
                        { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) : (<FormularioRegistroAvances listaAvances = { data } />)}
                    </div>
                </div>
            </div>
        );
    }        

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "body-text">
            <Sidebar icono={faClipboardCheck} titulo ='PROYECTOS EN LOS QUE ESTOY INSCRITO'/>
            <div className="contenedor-body">
                <TablaAvances listaAvances = { data }/>
            </div>
        </div>
    );
};


const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
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
                            <th>Fecha Avance</th>
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
                                    <td>{ p.proyecto._id }</td>
                                    <td>{ p.fechaAvance }</td>
                                    <td>{ p.titulo }</td>
                                    <td>{ p.descripcion }</td>
                                    <td>{ p.observacionesLider }</td>
                                    <td>
                                        <button className="boton_1">
                                        <Link to = {`/avances/DetalleAvances/${p._id}` }>
                                            Editar Avance
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

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS AVANCES */
const FormularioRegistroAvances = ()=> {

    const { form, formData, updateFormData } = useFormData();
    const [crearAvance] = useMutation(CREAR_AVANCE);
    const { proyecto } = useParams();
    const { data, loading } = useQuery(GET_AVANCESPORPROYECTO,{
        variables:{ proyecto }
    });

    const submitForm = (e) => {
        e.preventDefault();
        crearAvance({ 
            variables: {...formData, proyecto: proyecto
                } 
        });
    };

    return (
        <div>
            <h1 className = "rp_subtitulo">Ingrese el Avance</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
            <br/>
                <table>  {/*}
                    <tr>
                        <td>
                            <p>Proyecto: </p>
                        </td>
                        <td>
                            <input 
                                name = 'proyecto' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr> */}
                    <tr> 
                        <td>
                            <p>Fecha del Avance: </p>
                        </td>
                        <td>
                            <input 
                                name = 'fechaAvance' 
                                type = "date" 
                                
                            />
                        </td>
                    </tr>
 

                    <tr>
                        <td>
                            <p>Titulo: </p>
                        </td>
                        <td>
                            <input 
                                name = 'titulo' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Detalle Avance: </p>
                        </td>
                        <td>
                            <input 
                                name = 'descripcion' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <input className="boton_1"
                                type = "submit" 
                                value = "Registrar Nuevo Avance" 
                                
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
};


export {AvancesPorProyecto} ;