import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import MenuPatrimonio from './MenuPatrimonio';
import HeaderPatrimonio from './HeaderPatrimonio';
import CuriosidadePatrimonio from './CuriosidadePatrimonio';
import HistoriaPatrimonio from './HistoriaPatrimonio';
import DashboardPatrimonio from '../patrimonio/DashboardPatrimonio';
import img_background_section from '../../img/igreja_se/backgrund-se.png';
import img_background_section_1 from '../../img/igreja_se/background-se03.png';
import img_texto from '../../img/igreja_se/img-se-2.jpg';
import img_texto_1 from '../../img/igreja_se/img-se-3.jpg';
import img_texto_2 from '../../img/igreja_se/img-se-5.jpg';
import texto from '../../texts/igreja_da_se.json';
import img_igreja_se from '../../img/igreja_se.jpg';
import img_default from '../../img/igreja_se/c.se.jpg';

export default class MainPatrimonio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: props.patrimonio,
      conteudo: {
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
        imgConteudo: [img_texto, img_texto_1, img_texto_2, img_default],
      },
    };
  }

  async fetchContent() {}

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <Fragment>
        <MenuPatrimonio />
        <HeaderPatrimonio conteudo={this.state.conteudo} />
        <BrowserRouter basename="/patrimonio">
          <Switch>
            <Route exact path={`/${this.state.tipo}/curiosidade`}>
              <CuriosidadePatrimonio conteudo={this.state.conteudo} />
            </Route>
            <Route exact path={`/${this.state.tipo}/historia`}>
              <HistoriaPatrimonio conteudo={this.state.conteudo} />
            </Route>
            <Redirect from={`${!this.state.patrimonio}`} to="/patrimonio" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
