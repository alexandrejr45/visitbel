import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';
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
    this.ref = firebase.firestore().collection('patrimonio');
    this.id = null;
    this.state = {
      conteudo: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.prevId) {
      return {
        conteudo: null,
        prevId: props.id,
      };
    }

    return null;
  }

  componentDidMount() {
    this._fetchContent(this.props.id);
  }

  componentDidUpdate() {
    if (this.state.conteudo === null) {
      this._fetchContent(this.props.id);
    }
  }

  _fetchContent(id) {
    if (id === this.id) return;

    this.id = id;

    this.ref
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({ conteudo: doc.data() });
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
  }

  render() {
    if (this.state.conteudo === null) {
      return <div>Carregando</div>;
    } else {
      console.log(this.id)
      console.log(this.state.conteudo)

      return (
        <Fragment>
          <MenuPatrimonio />
          {/* <HeaderPatrimonio conteudo={this.state.conteudo} /> */}
          <BrowserRouter basename="/patrimonio">
            <Switch>
              <Route exact path={`/${this.state.id}/curiosidade`}>
                <CuriosidadePatrimonio conteudo={this.state.conteudo} />
              </Route>
              <Route exact path={`/${this.state.id}/historia`}>
                <HistoriaPatrimonio conteudo={this.state.conteudo} />
              </Route>
              <Redirect from={`${!this.state.patrimonio}`} to="/patrimonio" />
            </Switch>
          </BrowserRouter>
        </Fragment>
      );
    }
  }
}
