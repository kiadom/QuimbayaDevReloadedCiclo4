import { useParams, Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../hooks/useFormData";

import { GET_PROYECTO } from '../graphql/proyectos/queries';
import { EDITAR_PROYECTO } from "../graphql/proyectos/mutations"

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectosEditar () {

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN queryData. loadingData PERMITE CONTROLAR CUANDO SE CARGA EL QUERY  */
    const { _id } = useParams();
    const { data: queryData, loading: loadingData } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const [editarProyecto, { data: mutationData, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO);
    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
            variables: { _id, ...formData },
        });
    };

    /* SI loading ES FALSO, ES DECIR SI YA NO ESTÁ CARGANDO, SE RENDERIZA EL FORMULARIO PARA EDITAR EL PROYECTO SELECCIONADO */
    if(!loadingData){
        return (
            <div className = "body-text">
                <table>
                    <tr>
                        <td>
                            <Link to = {`/GestionProyectos`}>
                                <button onClick={() => {}}> Regresar al Listado de Proyectos </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                <h1>ID del Proyecto Seleccionado: { _id }</h1>
                <h1>Ingrese los nuevos datos del Proyecto</h1>
                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                    <table>
                        <tr>
                            <td>
                                <p>Nombre: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'nombre' 
                                    defaultValue = { queryData.Proyecto.nombre } 
                                    type = "text" 
                                />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>
                                <p>Objetivo General: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'objetivo_general' 
                                    defaultValue = { queryData.Proyecto.objetivo[0].descripcion } 
                                    type = "text" 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Objetivos Especificos: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'objetivos_especificos' 
                                    defaultValue = { queryData.Proyecto.objetivo[1].descripcion, " / ", queryData.Proyecto.objetivo[2].descripcion }
                                    type = "text" 
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
                                    defaultValue = { queryData.Proyecto.presupuesto } 
                                    type = "text" 
                                />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <input 
                                    type = "submit" 
                                    value = "Guardar cambios" 
                                />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};

export { GestionProyectosEditar };