import { useParams, Link } from "react-router-dom";

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../../hooks/useFormData";

import { GET_AVANCES2 } from "../../graphql/avances/queries";
import { EDITAR_AVANCE } from "../../graphql/avances/mutations"


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function DetalleAvances () {
    
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

   /*PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
    const { data: queryData, loading: queryLoading } = useQuery(GET_AVANCES2, {
        variables:{ _id },
    });

       
    const [editarAvance, { data: mutationData, loading: mutationLoading }] = useMutation(EDITAR_AVANCE);

    const submitForm = (e) => {
        e.preventDefault();
        editarAvance({
            variables: { _id, ...formData },
        });
    };

     
    if(!queryLoading){
        return (
            <div className = "body-text">
                <table>
                    <tr>
                        <td>
                            <Link to = {`/Avances/EntradaAvances/`}>
                                <button onClick={() => {}}> Regresar a Menu principal Avances </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                
                <h1>Editar Avance</h1> 
                
                
                {/*
                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                */}

                <table>
                        
                        <tr>
                            <td>
                                <p>Proyecto: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvance.proyecto.nombre }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Titulo: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvance.titulo }
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>ID Del Avance: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvance._id }
                            </td>
                        </tr>
                        
                        
                </table>
                        

                {/*<h1>Estos son los datos a modificar</h1>*/}

                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                    <table>
                        <tr>
                            <td>
                                <p>Descripcion: </p>
                            </td>
                            <td>
                                <input 
                                    name = '$descripcion' 
                                    defaultValue = { queryData.DetalleAvance.descripcion } 
                                    type = "text" 
                                    size = "50"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Observaciones Lider: </p>
                            </td>
                            <td>
                                <input 
                                    name = '$observacionesLider' 
                                    defaultValue ={ queryData.DetalleAvance.observacionesLider } 
                                    type = "text" 
                                    size = "50"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input className = "boton_1"
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
    

    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};


export { DetalleAvances };

