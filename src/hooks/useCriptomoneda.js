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


const useCripto = (label, stateInicial, opciones) => {

    //Creamos el State del hook
    const [ctmoneda, setCtmoneda] = useState(stateInicial)
    
    //Funcionalidad del hook
    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                //Tomando el valor seleccionado y agregandolo al state
                onChange={e => setCtmoneda(e.target.value)}
                //Asignando el valor al value
                value={ctmoneda}
            >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name} >{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )
    
    //Retorna State, Interfaz y Fn que modifica el state
    return [ctmoneda, SelectCripto, setCtmoneda]

}
 
export default useCripto;


