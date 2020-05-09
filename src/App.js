import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';


const Contenedor = styled.div` 
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img` 
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1` 
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{   
    content: '';
    width: 100px;
    height: 6px;
    display: block;
    background-color: #66A2FE;
    }
`;


function App() {

  //  STATES  //
    //Resultados para la busqueda
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    //Resultados de la cotizacion
    const [cotizacion, setCotizacion] = useState({});
    //Mostrando el spinner
    const [cargando, setCargando] = useState(false);


  //Ejecutamos la consulta de la cotizacion de la moneda
  useEffect(() => {
    
    //Ejecutamos la consulta de la cotizacion
    const consultaCotizacion = async () => {

      //Validamos la ejecucion y la evitamos la primera vez
      if(moneda === '') return;

      //Definimos la url de la API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      //Ejecutamos la llamada
      const resultado = await axios.get(url);

      //Ejecutamos el Spinner 
      setCargando(true);

      //Colocamos un setTimeout para retardar el efecto del spinner por 3s
      setTimeout(() => {
        //Ocultamos el spinner
        setCargando(false);
        //Guardalos la consulta en el state
        setCotizacion(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 3000);

      
    }
    //Ejecutamos la funcion de la consulta
    consultaCotizacion();
  }, [moneda, criptomoneda]);

  //Condicionamos el componente a mostrar
  const mostrarResultado = (cargando) ? <Spinner /> : <Cotizacion cotizacion={cotizacion} /> ;

  return (
    <Contenedor>
      <div>
        <Imagen 
          src={image}
          alt="Imagen crypto"
        />
      </div>
      <div>

        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario 
          setCriptomoneda={setCriptomoneda}
          setMoneda={setMoneda}
        />

        { mostrarResultado }

      </div>
    </Contenedor>
  );
}

export default App;
