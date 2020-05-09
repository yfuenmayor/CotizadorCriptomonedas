import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div` 
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
 `;

 const Info = styled.p` 
    font-size: 18px;

    span {
        font-weight: bold;
    }
  `;

 const Precio = styled.p` 
    font-size: 30px;

    span {
        font-weight: bold;
    }
  `;

const Cotizacion = ({cotizacion}) => {

    //Validamos si el objeto esta vacio para que no ejecute el componente
    if(Object.keys(cotizacion).length === 0) return null ;

    console.log(cotizacion);

    return (
        <ResultadoDiv>
           <Precio>El precio es: <span>{cotizacion.PRICE}</span></Precio>
           <Info>Precio más alto del día: <span>{cotizacion.HIGHDAY}</span></Info>
           <Info>Precio más bajo del día: <span>{cotizacion.LOWDAY}</span></Info>
           <Info>Variacion últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span></Info>
           <Info>Última actualizacion: <span>{cotizacion.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
};

Cotizacion.propTypes = {
    cotizacion: PropTypes.object.isRequired
};

export default Cotizacion;