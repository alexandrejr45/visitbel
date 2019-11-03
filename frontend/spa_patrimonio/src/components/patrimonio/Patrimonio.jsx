import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
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
    
    return <MainPatrimonio id={patrimonio_atual} />;
  } else {
    return <Redirect
      from={`/patrimonio/${props.match.params.id}`}
      to="/patrimonio"
    ></Redirect>;
  }

}
