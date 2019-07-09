import React, { Component } from "react";
import IgrejaSePatrimonio from "./IgrejaSePatrimonio";


class Patrimonio extends Component {
  constructor(props) {
    super(props);
    this.state = { tipoPatrimonio: this.props.match.params.id };
  }

  retornaPatrimonio() {}

  // retornaImagemPatrimonio() {
  //   if (this.state.tipoPatrimonio === "igreja-da-se") {
  //     return img_igreja_se;
  //   } else if (this.state.tipoPatrimonio === "igreja-de-santo-alexandre") {
  //     return img_igreja_santo_alexandre;
  //   } else {
  //     return img_casa_onze_janelas;
  //   }
  // }

  render() {
    if (
      this.state.tipoPatrimonio === "igreja-da-se" ||
      this.state.tipoPatrimonio === "igreja-de-santo-alexandre" ||
      this.state.tipoPatrimonio === "casa-das-onze-janelas"
    ) {
      return <IgrejaSePatrimonio />;
    }
  }
}

export default Patrimonio;
