import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import MenuPatrimonio from './MenuPatrimonio';
import HeaderPatrimonio from './HeaderPatrimonio';
import CuriosidadePatrimonio from './CuriosidadePatrimonio';
import HistoriaPatrimonio from './HistoriaPatrimonio';

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

  componentWillUnmount() {
    this.id = null;
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
              <Redirect from={`${!this.state.patrimonio}`} to="/patrimonio" />
            </Switch>
          </BrowserRouter>
        </Fragment>
      );
    }
  }
}
