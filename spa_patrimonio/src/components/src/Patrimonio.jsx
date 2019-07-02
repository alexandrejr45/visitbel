import React, { Component } from "react";
import PatrimonioTexto from './PatrimonioTexto';
import texto_igreja_da_se from "../../texts/igreja_da_se.json";
import texto_igreja_st_alexandre from '../../texts/igreja_de_santo_alexandre.json'
import texto_casa_das_onze_janelas from '../../texts/casa_das_onze_janelas.json'

class Patrimonio extends Component {
  constructor(props) {
    super(props);
    this.state = { parametro: this.props.match.params.id };
  }

  retornaTextoPatrimonio() {
    if (this.state.parametro) {
      if (this.state.parametro === "igreja-da-se") {
        return texto_igreja_da_se;
      }else if(this.state.parametro === 'igreja-de-santo-alexandre'){
        return texto_igreja_st_alexandre;
      }else{
        return texto_casa_das_onze_janelas;
      }
    }
  }

  render() {
    const texto_patrimonio = this.retornaTextoPatrimonio();

    return (
      <PatrimonioTexto name={texto_patrimonio} />
    );
  }
}

export default Patrimonio;
