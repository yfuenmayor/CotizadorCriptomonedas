import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label` 
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select` 
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem; 
`;


const useMoneda = (label, stateInicial, opciones) => {

    //Creamos el State del hook
    const [stmoneda, setStmoneda] = useState(stateInicial)
    
    //Funcionalidad del hook
    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                //Tomando el valor seleccionado y agregandolo al state
                onChange={e => setStmoneda(e.target.value)}
                //Asignando el valor al value
                value={stmoneda}
            >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                <option key={opcion.codigo} value={opcion.codigo} >{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )
    
    //Retorna State, Interfaz y Fn que modifica el state
    return [stmoneda, Seleccionar, setStmoneda]

}
 
export default useMoneda;


