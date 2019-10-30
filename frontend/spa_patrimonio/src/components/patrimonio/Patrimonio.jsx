import React from "react";
import MainPatrimonio from "./MainPatrimonio";


export default function Patrimonio (props) {
  const patrimonios_validos = ['igreja-da-se', 'igreja-de-santo-alexandre', 'casa-das-onze-janelas'];
  let patrimonio_atual = null;

  console.log(props);

  if(patrimonios_validos.includes(props.match.params.id)){
    patrimonio_atual = props.match.params.id;
  }

  return (
    <MainPatrimonio patrimonio={patrimonio_atual} />
  )

}


