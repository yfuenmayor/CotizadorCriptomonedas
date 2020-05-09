import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const MensajeError = styled.p` 
    font-family: 'Bebas Neue', cursive;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: #b7322c;
`;

const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};

export default Error;