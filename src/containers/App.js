import React, { Component } from 'react';

import clasesApp from './App.module.css';

import ValidationComponents from '../components/ValidationComponents/ValidationComponents';
import Chars from '../components/Chars/Chars';


class App extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      validationSTATE: [ { id: 'aritz1', texto: '', longitud:'Texto demasiado corto', } ],
      caracterSTATE: [],
    };
  }


textoChangedHandler = ( event ) => {

  //Cojo la frase
  const frase = event.target.value; 

  //COMPONENTE1 (ValidationComponents)
      //Copio validationSTATE en X
      const X = [...this.state.validationSTATE];
        //Nuevo valor para X[0].texto
        X[0].texto = frase;
        //Nuevo valor para X[0].longitud según su longitud
        if (frase.length>5) {
          X[0].longitud = 'Texto demasiado largo';
        }
        if (frase.length<=5) {
          X[0].longitud = 'Texto demasiado corto';
        }
      //Actualizo el estado validationSTATE
      this.setState( {validationSTATE: X} ); 

      
  //COMPONENTE2 (Chars)
      //Vacío caracterSTATE
      const nuevo = [...this.state.caracterSTATE];
      nuevo.length = 0;
      this.setState( {caracterSTATE: nuevo} );
      //Actualizo el caracterSTATE con la frase
      for (var i=0; i<frase.length; i++) {
        const referencia = {...this.state.caracterSTATE[i] };
        referencia.caracter = frase.slice(i,i+1);
        nuevo[i] = referencia;
      }
      
      this.setState( {caracterSTATE: nuevo} );
}

  

deleteCaracter = (index) => {
      const borro = [...this.state.caracterSTATE]; //Cojo todo del estado caracterSTATE
      borro.splice(index, 1);    //Extraigo el componente con el índice pulsado 
      this.setState({caracterSTATE: borro}); //Actualizo caracterSTATE
    
    const A = [...this.state.validationSTATE]; 
    const FraseVieja = A[0].texto; //Copio la Frase Vieja 
      const Parte1 = FraseVieja.substr(0,index); //Cojo de inicio al caracter que quiero eliminar
      const Parte2 = FraseVieja.substr(index+1,FraseVieja.length); //Cojo del caracter que quiero eliminar al final
    const FraseNueva = Parte1.concat(Parte2); //Uno las dos partes
    A[0].texto = FraseNueva; //FraseNueva

     //Vuelvo a comprobar su longitud
    if (A[0].texto.length>5)  { A[0].longitud = 'Texto demasiado largo'; }
    if (A[0].texto.length<=5) { A[0].longitud = 'Texto demasiado corto'; }
    
    this.setState( {validationSTATE: A} ); //Actualizo el validationSTATE
}

  
  render () {

        //COMO EL EJERCICIO 4 PERO EN ESTE CASO:
          //Código reorganizado
          //Hemos creado un componente Chars:
          //que recorre el texto insertado y realiza el bucle para mostrar Char
          //(App importa Chars, y Chars importa Char)
          //Componentes organizados en carpetas como en "cmp-deep-dive--01-after-cmp-split"
          //Hacemos lo mismo con ValidationComponents
          //(App importa ValidationComponents, y ValidationComponents importa ValidationComponent)

    //Componente1 (ValidationComponents)
    let validationSTATE = null;
      validationSTATE = <ValidationComponents
          validationSTATE={this.state.validationSTATE}
          changed={this.textoChangedHandler}
      />;

    //Componente2 (Chars)
    let caracterSTATE = null;
      caracterSTATE = <Chars
          caracterSTATE={this.state.caracterSTATE}
          clicked={this.deleteCaracter}
      />; 
     
    //Creo claseARITZ y doy color a validationSTATE según la longitud
      const claseCOLOR = [];
      if ( this.state.validationSTATE[0].texto.length <= 5 ) {
        claseCOLOR.push( clasesApp.red ); // claseCOLOR = ['red']
      }
      if ( this.state.validationSTATE[0].texto.length > 5 ) {
        claseCOLOR.push( clasesApp.blue ); // claseCOLOR = ['blue']
      }

    //return
    return (
      <div className={clasesApp.App}> 
        <h1>ARITZ OSCOZ IRUROZQUI</h1>
        <div className={claseCOLOR.join( ' ' )}>
          {validationSTATE}
        </div>
          {caracterSTATE}
      </div>
    );

}

}

export default App;