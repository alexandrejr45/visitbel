import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, BrowserRouter, useLocation } from 'react-router-dom';
import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import MenuPatrimonio from './MenuPatrimonio';
import HeaderPatrimonio from './HeaderPatrimonio';
import CuriosidadePatrimonio from './CuriosidadePatrimonio';
import HistoriaPatrimonio from './HistoriaPatrimonio';

export default class MainPatrimonio extends Component {
  constructor(props) {
    super(props);
    this.location = useLocation();
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

  componentWillUnmount() {
    this.id = null;
  }

  _validaPatrimonio(patrimonio) {

    const patrimoniosValidos = [
      'igreja-da-se',
      'igreja-de-santo-alexandre',
      'casa-das-onze-janelas',
    ];

    if(patrimoniosValidos.includes(patrimonio)){
      return true;
    }

    return;
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
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }

  render() {
    if (this.state.conteudo === null) {
      return <div>Carregando</div>;
    } else {
      return (
        <Fragment>
          <div style={{ paddingTop: 5 + "em" }} />
          <MenuPatrimonio />
          <HeaderPatrimonio conteudo={this.state.conteudo} />
          <BrowserRouter basename="/patrimonio">
            <Switch>
              <Route exact path={`/${this.state.id}/curiosidade`}>
                <CuriosidadePatrimonio conteudo={this.state.conteudo} />
              </Route>
              <Route exact path={`/${this.state.id}/historia`}>
                <HistoriaPatrimonio conteudo={this.state.conteudo} />
              </Route>
              {
               !this._validaPatrimonio(this.state.id) ? 
                <Redirect from={`/${this.state.id}/`} to="/patrimonio" />  : null
              }
            </Switch>
          </BrowserRouter>
        </Fragment>
      );
    }
  }
}
