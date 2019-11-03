import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleMapsImg from '../../img/Google-Maps.png';
// import igreja_santo_alexandre_icon from '../../img/flat1.png';
// import igreja_se_icon from '../../img/flat2.png';
// import casa_das_onze_janelas from '../../img/flat3.png';
const Home = () => {
  const styleCenter = [-50 + '%', -50 + '%'];

  return (
    <Fragment>
      <div className="ajuste-tela">
        <div className="background-img">
          <div className="container">
            <div className="texto-home">
              <h2
                className="text-color"
                style={{
                  top: 50 + '%',
                  left: 50 + '%',
                  position: 'absolute',
                  marginRight: -50 + 'px',
                  transform: `translate(${styleCenter})`,
                }}
              >

                O que você deseja fazer?
              </h2>
            </div>

            <div id="scroll-d" onClick={scrollArrow}>
              <i style={{ fontSize: 30 + 'px' }}>
                <FontAwesomeIcon icon="angle-double-down" />
              </i>
            </div>
          </div>
        </div>
      </div>
      <section id="down" className="background-about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 text-center offset-md-1 ajust-text-conteudo text-color"
              style={{ paddingTop: 5 + 'em' }}
            >
              <h4>O Centro Histórico na Palma da Sua Mão</h4>
              <p
                className="col-lg-10"
                style={{ marginTop: 2 + 'em', fontWeight: 'normal' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mollis felis risus, non vehicula tellus aliquet et. Nam id
                elementum purus. Vivamus ac lobortis massa, et fermentum nisl.
                Vestibulum et ante a mi molestie feugiat.
              </p>
              <div className="col-lg-5">
                <button>Iniciar Imersão</button>
              </div>
            </div>
            <div className="col-lg-3 text-center" style={{ top: 7 + 'em' }}>
              <img src={googleMapsImg} width="250" height="450" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: 10 + 'em' }} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 style={{ textAlign: 'center' }}>
                Sobre Nós
              </h4>
            </div>
          </div>
          <div style={{ marginTop: 3 + 'em' }} />

          <div className="row spacing_align">
            <div className="col-  6 offset-lg-6">
              <h5>Sobre o Visitbell</h5>
            </div>
            <div className="col-6 offset-lg-6">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh blandit, porttitor odio ac, aliquam risus. Proin sagittis vehicula tincidunt.
               Integer ac ante quis felis imperdiet scelerisque eu sit amet nulla.
            
            </p>
               </div>
          </div>

          <div className="row spacing_align">
            <div className="col-12">
              <h5>Projeto de extensão</h5>

            </div>
            <div className="col-6">
              <p>
                O projeto VisitBel, ten por iniciativa iniciar a carreira de historiadores
                de todo o nundo a ser quen você é de verdade!
              </p>
            </div>
          </div>

          <div className="row spacing_align">
            <div className="col-6 offset-lg-6">
              <h5>Colaboradores</h5>

            </div>
            <div className="col-6 offset-lg-6">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh blandit, porttitor odio ac, aliquam risus. Proin sagittis vehicula tincidunt.
                Integer ac ante quis felis imperdiet scelerisque eu sit amet nulla.
              
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

function scrollArrow() {
  let elemento = document.querySelector('#down');
  let offset = elemento.offsetTop;

  window.scroll({
    top: offset,
    left: 0,
    behavior: 'smooth',
  });
}

export default Home;
