import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_AVANCES2 } from "../../graphql/avances/queries";

import Input from '../../components/Input';


const EdicionAvances = () => {
    
    const { _id } = useParams();
    const {data, error, loading} = useQuery(GET_AVANCES2,{
        variables:{_id}
    });
    
    console.log(data);

    return (
        <div cclassName = "body-text">
            <h1>HOLAAAA</h1>
            {/*
            <form
                //onSubmit={submitForm}
                //onChange={updateFormData}
                //ref={form}
            >
                <Input
                    label="Descripcion:"
                    type="text"
                    name="descripcion"
                    defaultValue={data.DetalleAvance.descripcion}
                    required={true}
                />

                <Input
                    label="Observaciones Lider:"
                    type="text"
                    name="observacionesLider"
                    defaultValue={data.DetalleAvance.observacionesLider}
                    required={true}
                />
            </form>
            */}

            
        </div>
    )
}

export default EdicionAvances
