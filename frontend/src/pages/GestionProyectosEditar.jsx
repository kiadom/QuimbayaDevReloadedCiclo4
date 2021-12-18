import { useParams, Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { useUser } from '../context/userContext';
import useFormData from "../hooks/useFormData";
import { Sidebar } from '../components/Sidebar';
import { GET_PROYECTO } from '../graphql/proyectos/queries';
import { EDITAR_PROYECTO } from "../graphql/proyectos/mutations"
import { faDiaspora } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectosEditar () {

    const { _id } = useParams();
    const { userData } = useUser();

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN queryData. loadingData PERMITE CONTROLAR CUANDO SE CARGA EL QUERY  */
    const { data: queryData, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });
    
    if(!queryLoading){

        if (userData.rol == 'ADMINISTRADOR'){
            return (
                <div className = "body-text">
                    <Sidebar icono={faProjectDiagram} titulo='EDITAR PROYECTO'/>
                    <div className='contenedor-body'>
                        <div className="rp_titulo">GESTIÓN DE PROYECTOS</div>
                        <EditarEstadoFase datosProyecto = { queryData } idProyecto = { _id } />
                    </div>
                </div>
            );
        }
    
        if (userData.rol == 'LIDER'){
            return (
                <div className = "body-text">
                    <Sidebar icono={faProjectDiagram} titulo='EDITAR PROYECTO'/>
                    <div className='contenedor-body'>
                    <div className="rp_titulo">GESTIÓN DE PROYECTOS</div>
                    <EditarProyecto datosProyecto = { queryData } idProyecto = { _id } />
                    </div>
                </div>
            );
        }
    
        if (userData.rol == 'ESTUDIANTE'){
            return (
                <div className = "body-text">
                    <Sidebar icono={faProjectDiagram} titulo='EDICIÓN DE PROYECTOS'/>
                    <div className='contenedor-body'>
                    <div className="rp_titulo">GESTIÓN DE PROYECTOS</div>
                    <div className="rend_Dinamica">
                        <table>
                            <tr>
                                <td>
                                    <Link to = {`/GestionProyectos`}>
                                        <button onClick={() => {}} className = "boton_1"> Regresar al Listado de Proyectos </button>
                                    </Link>
                                </td>
                            </tr>
                        </table>
                        <h1 className = "rp_subtitulo">El rol de estudiante no puede editar proyectos</h1>
                    </div>
                    </div>
                </div>
            );
        }
    }

    /* MIENTRAS LA APLICACION ESTÁ CARGANDO SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "contenedor-body">
            <div className='cargando'>        
      </div>
        </div>
    )
};

const EditarEstadoFase = ({ datosProyecto, idProyecto }) => {

    const { form, formData, updateFormData } = useFormData(null);
    const [editarProyecto, { data: mutationData, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
            variables: { _id: idProyecto, estado: formData.estado, fase: formData.fase },
        });
    };
    
    return (
        <div className="rend_Dinamica">
            <table>
                <tr>
                    <td>
                        <Link to = {`/GestionProyectos`}>
                            <button onClick={() => {}} className = "boton_1"> Regresar al Listado de Proyectos </button>
                        </Link>
                    </td>
                </tr>
            </table>
            <h1 className = "rp_subtitulo">Ingrese los nuevos datos del Proyecto</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                <br/>
                <table className='cambios-estado-admon'>
                    <tr>
                        <td>
                            <p>Estado: </p>
                        </td>
                        <td>
                            <input 
                                name = 'estado' 
                                defaultValue = { datosProyecto.Proyecto.estado } 
                                type = "text" 
                                size = "50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Fase: </p>
                        </td>
                        <td>
                            <input 
                                name = 'fase' 
                                defaultValue = { datosProyecto.Proyecto.fase } 
                                type = "text" 
                                size = "50"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className = "boton_1"
                                type = "submit" 
                                value = "          Guardar cambios          "
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

const EditarProyecto = ({ datosProyecto, idProyecto }) => { 

    const { form, formData, updateFormData } = useFormData(null);
    const [editarProyecto, { data: mutationData, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
            variables: { _id: idProyecto, ...formData, presupuesto: parseFloat(formData.presupuesto) },
        });
    };

    if (datosProyecto.Proyecto.estado == 'ACTIVO'){
        return (
            <div className="rend_Dinamica">
                <table>
                    <tr>
                        <td>
                            <Link to = {`/GestionProyectos`}>
                                <button onClick={() => {}} className = "boton_1"> Regresar al Listado de Proyectos </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                <h1 className = "rp_subtitulo">Ingrese los nuevos datos del Proyecto</h1>
                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                    <br/>
                    <table className='cambios-estado-admon'>
                        <tr>
                            <td>
                                <p>Nombre: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'nombre' 
                                    defaultValue = { datosProyecto.Proyecto.nombre } 
                                    type = "text" 
                                    size = "50"
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
                                    defaultValue = { datosProyecto.Proyecto.objetivoGeneral } 
                                    type = "text" 
                                    size = "50"
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
                                    defaultValue = { datosProyecto.Proyecto.objetivoEspecifico1 }
                                    type = "text" 
                                    size = "50"
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
                                    defaultValue = { datosProyecto.Proyecto.objetivoEspecifico2 }
                                    type = "text" 
                                    size = "50"
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
                                    defaultValue = { datosProyecto.Proyecto.presupuesto } 
                                    type = "number"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className = "boton_1"
                                    type = "submit" 
                                    value = "          Guardar cambios          "
                                />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }

    return (
            <div className="rend_Dinamica">
                <table>
                    <tr>
                        <td>
                            <Link to = {`/GestionProyectos`}>
                                <button onClick={() => {}} className = "boton_1"> Regresar al Listado de Proyectos </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                <h1 className = "rp_subtitulo">El estado del proyecto es inactivo, debe ser aprobado por un administrador</h1>
            </div>
    );
};

export { GestionProyectosEditar };