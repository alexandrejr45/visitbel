import React, { Fragment } from 'react';
import MainPatrimonio from './MainPatrimonio';

export default function Patrimonio(props) {
  const patrimonios_validos = [
    'igreja-da-se',
    'igreja-de-santo-alexandre',
    'casa-das-onze-janelas',
  ];
  let patrimonio_atual = null;
  
  if (patrimonios_validos.includes(props.match.params.id)) {
    patrimonio_atual = props.match.params.id;
  }else{
    patrimonio_atual = 'error'
  }
  
  return (
    <MainPatrimonio patrimonio={patrimonio_atual} />
  );
}
