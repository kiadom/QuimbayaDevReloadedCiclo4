import React, {useEffect} from 'react';
import { useQuery } from "@apollo/client";
import { GET_AVANCES } from "../graphql/avances/querys";

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const GestionAvances = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    // const [textoBoton, setTextoBoton] = useState('Ver Listado de Proyectos' );
    // const [mostrarTabla, setMostrarTabla] = useState(true);

    const { data, error, loading } = useQuery(GET_AVANCES);

    useEffect(() => {
        console.log("data servidor", data);
    }, [data]);




    return (
        <div className="body-text">
            <h1>MODULO DE GESTION DE AVANCES</h1>
        </div>
    )
}

export { GestionAvances };