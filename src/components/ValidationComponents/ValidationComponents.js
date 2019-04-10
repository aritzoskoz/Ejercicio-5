import React from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';

const XXXXX = ( props ) => props.validationSTATE.map((validate) => {
    return <ValidationComponent
        texto={validate.texto}
        longitud={validate.longitud}
        changed={( event ) => props.changed( event )} />
    } );

export default XXXXX;