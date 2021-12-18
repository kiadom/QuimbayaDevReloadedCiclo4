import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { useUser } from '../context/userContext';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from '../utils/enums';
import useFormData from "../hooks/useFormData";
import  ButtonLoading from '../components/ButtonLoading';
import PrivateComponent from '../components/PrivateComponent';
import { GET_PROYECTOS, GET_PROYECTOS_POR_LIDER } from '../graphql/proyectos/queries';
import { CREAR_PROYECTO } from "../graphql/proyectos/mutations";
import { CREAR_INSCRIPCION } from '../graphql/inscripciones/mutations';
import {Sidebar} from '../components/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectos () {

    const { userData } = useUser();

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Listado de Proyectos' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Proyecto" Y MOSTRARÁ LA INTERFAZ TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Proyecto');
        }
        else {
            setTextoBoton('Regresar al Listado de Proyectos');
        }
    },[mostrarTabla]);

    /* SI EL USUARIO ES ESTUDIANTE O ADMINISTRADOR, LLAMA AL COMPONENTE TablaProyectos.
    ESTE COMPONENTE NO TIENE EL BOTON DE EDICION Y HACE EL QUERY DE TODOS LOS PROYECTOS */
    if (userData.rol == 'ESTUDIANTE' || userData.rol == 'ADMINISTRADOR'){
        return (
            <div className = "body-text">
                <Sidebar icono={faProjectDiagram} titulo='Sistema de Información y Soporte a la Gestión de Proyectos de Investigación'/>
                <div className="contenedor-body">
                    <div className="rp_titulo">GESTIÓN DE PROYECTOS</div>
                    <TablaProyectos />
                </div>
            </div>
        );
    }

    /* SI EL USUARIO ES LIDER, SE AGREGA UN BOTON QUE PERMITE RENDERIZAR DINAMICAMENTE ENTRE TablaProyectosPorLider y FormularioRegistroProeyctos.
    TablaProyectosPorLider HACE EL QUERY DE LOS PROYECTOS DEL LIDER*/
    if (userData.rol == 'LIDER'){
        return (
            <div className="body-text">
                <Sidebar icono={faProjectDiagram} titulo='Sistema de Información y Soporte a la Gestión de Proyectos de Investigación'/>                
                <div className="contenedor-body">
                    <div className="rp_titulo">GESTIÓN DE PROYECTOS</div>
                    <div className="rend_Dinamica">
                        <button onClick = {() => {
                            setMostrarTabla (!mostrarTabla);
                            }}
                            className="boton_1">{ textoBoton }
                        </button>
                        { mostrarTabla ? (<TablaProyectosPorLider datosUsuarioLogeado = { userData } />) : (<FormularioRegistroProyectos />)}
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

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE PROYECTOS */
const TablaProyectos = () => {
    
    const { data, loading } = useQuery(GET_PROYECTOS);

    if (!loading){
        return (
            <div className = "rp_formulario">
                <h1 className = "rp_subtitulo">Lista de Proyectos</h1>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Objetivo General</th>
                            <th>Objetivos Especificos</th>
                            <th>Presupuesto</th>
                            <th>Fecha de<br/>Inicio</th>
                            <th>Fecha de <br/>Terminacion</th>
                            <th>Identificacion Lider</th>
                            <th>Nombre Lider</th>
                            <th>Estado</th>
                            <th>Fase</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data && 
                            data.Proyectos.map((p) => {
                                return (
                                    <tr className = "proyectos" key = { p._id }>
                                        <td>{ p.nombre }</td>
                                        <td>{ p.objetivoGeneral }</td>
                                        <td>{ p.objetivoEspecifico1 } <p/> { p.objetivoEspecifico2 }</td>
                                        <td>{ p.presupuesto }</td>
                                        <td>{ p.fechaInicio }</td>
                                        <td>{ p.fechaFin }</td>
                                        <td>{ p.lider.identificacion }</td>
                                        <td>{ p.lider.nombre }</td>
                                        <td>{ Enum_EstadoProyecto[p.estado] }</td>
                                        <td>{ Enum_FaseProyecto[p.fase] }</td>
                                        <td>
                                            <Link to = {`/GestionProyectos/Editar/${ p._id }`}>
                                                <button onClick={ () => {} } className="boton_2"> Actualizar </button>
                                            </Link>
    
                                            <InscripcionProyecto
                                                    idProyecto = { p._id }
                                                    estado = { p.estado }
                                                    inscripciones = { p.inscripciones }
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
    
    return (
        <div className = "contenedor-body">
            <div className='cargando'>        
      </div>
        </div>
    );
};

const TablaProyectosPorLider = ({ datosUsuarioLogeado }) => {

    const { data, loading } = useQuery(GET_PROYECTOS_POR_LIDER, {
        variables: { lider: datosUsuarioLogeado._id },
    });

    if (!loading) {
        return (
            // <div className="contenedor-body">
            <div className = "rp_formulario">
                <h1 className = "rp_subtitulo">Lista de Proyectos</h1>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Objetivo General</th>
                            <th>Objetivos Especificos</th>
                            <th>Presupuesto</th>
                            <th>Fecha de<br/>Inicio</th>
                            <th>Fecha de <br/>Terminacion</th>
                            <th>Identificacion Lider</th>
                            <th>Nombre Lider</th>
                            <th>Estado</th>
                            <th>Fase</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data && 
                            data.ProyectosPorLider.map((p) => {
                                return (
                                    <tr className = "proyectos" key = { p._id }>
                                        <td>{ p.nombre }</td>
                                        <td>{ p.objetivoGeneral }</td>
                                        <td>{ p.objetivoEspecifico1 } <p/> { p.objetivoEspecifico2 }</td>
                                        <td>{ p.presupuesto }</td>
                                        <td>{ p.fechaInicio }</td>
                                        <td>{ p.fechaFin }</td>
                                        <td>{ p.lider.identificacion }</td>
                                        <td>{ p.lider.nombre }</td>
                                        <td>{ Enum_EstadoProyecto[p.estado] }</td>
                                        <td>{ Enum_FaseProyecto[p.fase] }</td>
                                        <td>
                                            <Link to = {`/GestionProyectos/Editar/${ p._id }`}>
                                                <button onClick={ () => {} }className="boton_2"> Actualizar </button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
            // </div>
        )
    }

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "contenedor-body">
            <div className='cargando'>        
      </div>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroProyectos = ()=> {

    const { form, formData, updateFormData } = useFormData();
    const [crearProyecto] = useMutation(CREAR_PROYECTO);
    const { userData } = useUser();

    const submitForm = (e) => {
        e.preventDefault();
        crearProyecto({ 
            variables: {...formData, 
                presupuesto: parseFloat(formData.presupuesto), 
                lider: userData._id} 
        });
    };

    return (
        <div className="registro-proyectos">
            <h1 className = "rp_subtitulo">Ingrese el Proyecto</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
            <br/>
                <table>
                    <tr>
                        <td>
                            <p>Nombre: </p>
                        </td>
                        <td>
                            <input 
                                name = 'nombre' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo General: </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivoGeneral' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo Especifico (1): </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivoEspecifico1' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo Especifico (2): </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivoEspecifico2' 
                                type = "text" 
                                size = "50"
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Presupuesto: </p>
                        </td>
                        <td>
                            <input 
                                name = 'presupuesto' 
                                type = "number" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Fecha de Inicio: </p>
                        </td>
                        <td>
                            <input 
                                name = 'fechaInicio' 
                                type = "date" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Fecha de Finalizacion: </p>
                        </td>
                        <td>
                            <input 
                                name = 'fechaFin' 
                                type = "date" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="boton_1"
                                type = "submit" 
                                value = "Registrar Nuevo Proyecto" 
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
};

const InscripcionProyecto = ({ idProyecto, estado, inscripciones }) => {
    const [estadoInscripcion, setEstadoInscripcion] = useState('');
    const [crearInscripcion, { data, loading }] = useMutation(CREAR_INSCRIPCION);
    const { userData } = useUser();
  
    useEffect(() => {
      if (userData && inscripciones) {
        const flt = inscripciones.filter((el) => el.estudianteInscrito._id === userData._id);
        if (flt.length > 0) {
          setEstadoInscripcion(flt[0].estadoInscripcion);
        }
      }
    }, [userData, inscripciones]);
  
    useEffect(() => {
      if (data) {
        console.log(data);
        toast.success('inscripcion creada con exito');
      }
    }, [data]);
  
    const confirmarInscripcion = () => {
      crearInscripcion({ variables: { proyecto: idProyecto, estudianteInscrito: userData._id } });
    };

    if (userData.rol === 'ESTUDIANTE'){
        return (
         
            <>
              {estadoInscripcion !== '' ? (
                <span>Ya estas inscrito en este proyecto y el estado es {estadoInscripcion}</span>
              ) : (
                <ButtonLoading
                  onClick={() => confirmarInscripcion()}
                  disabled={estado === 'INACTIVO'}
                  loading={loading}
                  text='Inscribirse'
                />
              )}
            </>
          );
    }

    return (
        <ButtonLoading
                  onClick={() => {}}
                  disabled={true}
                  loading={loading}
                  text='Inscribirse'
                />
    )
  
    
};

export { GestionProyectos };