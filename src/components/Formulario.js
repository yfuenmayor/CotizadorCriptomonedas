import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import axios from 'axios';
//Importamos el custom hook del select
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
//Importamos el componente de error
import Error from './Error'


const Boton = styled.input` 
    font-weight: bold;
    margin-top: 20px;
    font-size: 20px;
    padding: 10px;
    border: none;
    width: 100%;
    color: #FFF;
    border-radius: 10px;
    background-color: #66A2FE;
    transition: background-color .3s ease;
    
    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {
    
    //Creamos array con la informacion de las monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Estadounidense'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]
    // States //
    //listado de criptomonedas
    const [criptolistado, setCriptolistado] = useState([]);
    //Error de validacion
    const [error, setError] = useState(false);

    //Usando nuestro CustomHook: se toman los valores retornados en el hook (pueden ser todos o varios)
    const [moneda, SelectMoneda] = useMoneda('Elije tu moneda', '', MONEDAS);
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elije tu Criptomoneda', '',criptolistado);

    //Utilizamos useEffect para que ejecute la consulta de la api y obtener los tipos de cripto monedas al iniciar 
    useEffect(() => {
        //Funcion para tomar los datos de la API
        const consultarAPI = async () => {
            //Declaramos la url
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            //Usamos AXIOS para llamar la consulta
            const resultado = await axios.get(url);
            //Guardando el listado en el state correspondiente
            setCriptolistado(resultado.data.Data);
        }
        
        //Llamamos la funcion 
        consultarAPI()

    }, []);

    //Function para el submit 
    const cotizarMoneda = e => {
        e.preventDefault();

        // 1.- Validacion de campos
        if (moneda === '' || criptomoneda === '') {
            setError(true);
            return;
        } 

        //Ocultamos el error 
        setError(false);
        //Pasamos los datos al componente principal
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);

    }
    

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            { error ? <Error mensaje='Todos los campos son requeridos' /> : null}
             
            {/* Mostrando el select del hook Monedas Paises */}
            <SelectMoneda />

            {/* Mostrando el select del hook Criptomonedas */}
            <SelectCripto />

            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
};

Formulario.propTypes = {
    setCriptomoneda: PropTypes.func.isRequired,
    setMoneda: PropTypes.func.isRequired
};

export default Formulario;