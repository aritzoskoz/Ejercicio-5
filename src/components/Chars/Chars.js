import React, { Component } from 'react';

import Char from './Char/Char';

class YYYYY extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Chars.js] Inside Constructor', props );
    }

    //Este método sólo se ejecuta antes de que el componente sea montado en el DOM
    componentWillMount () {
        console.log( '[Chars.js] Inside componentWillMount()' );
    }
    //Este método solo se ejecuta justo después de que el componente haya sido montado en el DOM
    componentDidMount () {
        console.log( '[Chars.js] Inside componentDidMount()' );
    }

    render () {
        console.log( '[Chars.js] Inside render()' );

        return this.props.caracterSTATE.map( ( char, index ) => {
            return <Char
            click={() => this.props.clicked(index)}
            caracter={char.caracter}/>
        } );

    }
}

export default YYYYY;