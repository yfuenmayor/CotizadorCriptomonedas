**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
Builds the app for production to the `build` folder.<br />

## Cotizador de Criptomonedas

Consulta de precios de las diferentes criptomonedas del mercado.

### `Librerias`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `APIS`

Los `Endpoints` utilizados para obtener los resultados del input Select y de la cotizacion de la Criptomoneda se obtuvieron a travez de la siguiente pagina.<br/>
Open : [https://min-api.cryptocompare.com/documentation]

Para obtener los valores del select de las Criptomonedas se uso el siguiente endpoint:<br />
Open: [https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD]

Para obtener los resultados de la cotizacion de la `Criptomoneda` se uso el siguiente endpoint;
Open : [https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR]


### `Dependencias`

Instal `npm i @emotion/core @emotion/styled axios`<br />

Se utilizaron las siguientes dependencias: <br />

#### `Emotion Styled`

Esta libreria se importa en cada modulo a usar y se crea un Style Component con los estilos dentros para luego usarlo en vez de la etiqueta html.<br />

npm install: `npm i @emotion/core @emotion/styled`

#### `Axios`

**Axios** es una biblioteca que nos ayuda a realizar solicitudes http a recursos externos. En nuestras aplicaciones `React` , a menudo necesitamos recuperar datos de **API** externas para que puedan mostrarse en nuestras páginas web. ... Después de recuperar los datos, generalmente los agregamos al estado, de modo que estén listos para ser utilizados por nuestra aplicación

npm install: `npm i axios`

### `Creacion de Custom Hooks`

Estos Hooks personalizados se pueden crear para ser utilizados de diferentes formas, un ejemplo de los hooks que ya hemos usado hasta ahora son: **useState** y **useEffect** <br />

Para crear los `Custom Hooks` se crea una carpeta dentro de **src** con el nombre de `hooks` y luego dentro de ellas creamos el archivo **.js** con el nombre del hook teniendo antepuesto el prefijo **use** como en los hooks nativos de React.<br />

#### `Estructura de Custom Hooks`<br /><br />

import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

**Pueden tener sus estilos**<br />
const Label = styled.label` <br />
    font-family: 'Bebas Neue', cursive;<br />
    color: #FFF;<br />
    text-transform: uppercase;<br />
    font-weight: bold;<br />
    font-size: 2.4rem;<br />
    margin-top: 2rem;<br />
    display: block;<br />
`;<br />
<br />
const Select = styled.select` <br />
    width: 100%;<br />
    display: block;<br />
    padding: 1rem;<br />
    -webkit-appearance: none;<br />
    border: none;<br />
    border-radius: 10px;<br />
    font-size: 1.2rem; <br />
`;

**Inicio de la `func` del hook**<br />
const useMoneda = (label, stateInicial, opciones) => {

    `Creamos el State del hook`
    const [stmoneda, setStmoneda] = useState(stateInicial)
    
    `Funcionalidad del hook`
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

### `Aplicacion finalizada en produccion`
Open [https://vibrant-swartz-f2682c.netlify.app/]


