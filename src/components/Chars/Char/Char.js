import React, { Component } from 'react';
import './Char.css';


class YYYYY extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Char.js] Inside Constructor', props );
    }

    //Este método sólo se ejecuta antes de que el componente sea montado en el DOM
    componentWillMount () {
        console.log( '[Char.js] Inside componentWillMount()' );
    }
    //Este método solo se ejecuta justo después de que el componente haya sido montado en el DOM
    componentDidMount () {
        console.log( '[Char.js] Inside componentDidMount()' );
    }

    render () {
        console.log( '[Char.js] Inside render()' );

        return (
        <div className="charCSS" onClick={this.props.click}>
            <p>{this.props.caracter}</p>
            <p>{this.props.children}</p>
        </div>
        )
    }
};

export default YYYYY;
