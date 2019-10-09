import React, {Fragment} from 'react';
import PatrimonioHeader from './PatrimonioHeader';
import PatrimonioHistoria from './PatrimonioHistoria';
import PatrimonioCaracteristica from './PatrimonioCaracteristica'
import PatrimonioCuriosidade from './PatrimonioCuriosidade'
import texto from '../../texts/igreja_da_se.json';
import img_igreja_se from '../../img/igreja_se.jpg';
import img_default from '../../img/c.se.jpg'
import img_background_about from '../../img/igreja_se/background-about.png';
import img_background_about_1 from '../../img/igreja_se/background-about01.png';
import img_background_section from '../../img/igreja_se/backgrund-se.png';
import img_background_section_1 from '../../img/igreja_se/background-se03.png';
import img_texto from '../../img/igreja_se/img-se-2.jpg';
import img_texto_1 from '../../img/igreja_se/img-se-3.jpg';
import img_texto_2 from '../../img/igreja_se/img-se-5.jpg';

const objetoConteudo = {
  id: [0, 1],
  titulo: texto.titulo,
  subtitulo: `"${texto.subtitulo}"`,
  historia: texto.historia,
  caracteristica: texto.caracteristica,
  curiosidade: texto.curiosidade,
  anos: [1978, 2001],
  imgBackgroundHeader: img_igreja_se,
  imgBackgroundSection: img_background_section,
  imgBackgroundSection1: img_background_section_1,
  imgConteudo: [img_texto, img_texto_1, img_texto_2, img_default]
};


export default function IgrejaSePatrimonio() {
  return (
    <Fragment>
      <PatrimonioHeader conteudo={objetoConteudo} />
      <PatrimonioHistoria conteudo={objetoConteudo} />
      <PatrimonioCaracteristica conteudo={objetoConteudo} />
      <PatrimonioCuriosidade conteudo={objetoConteudo} />
    </Fragment>
  );
}
