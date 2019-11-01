import "../../css/pagina_patrimonio.css";
import imgSe from '../../img/igreja_se/img-se-2.jpg';

import React, { Fragment } from "react";
export default function HistoriaPatrimonio(props) {
  return (
    <Fragment>
      <section className="historia">
        <div className="container">
          <div className="col-12">
            <h3 className="ajust-title-conteudo text-center">História</h3>
          </div>
          <div className="timeline">
            <div className="timeline_contanin left">
              <div className="content">
                <img
                  src={imgSe}
                  className="shadow-img img-fluid right"
                  width="250px"
                  height="250px"
                  alt="Homens no telhado da igreja da Sé no ano de 1950"
                />
                <h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="timeline_contanin right">
              <div className="content">
              <img
                  src={imgSe}
                  className="shadow-img img-fluid"
                  width="250px"
                  height="350px"
                  alt="Homens no telhado da igreja da Sé no ano de 1950"
                />
                <h2>2016</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="timeline_contanin left">
              <div className="content">
              <img
                  src={imgSe}
                  className="shadow-img img-fluid"
                  width="250px"
                  height="350px"
                  alt="Homens no telhado da igreja da Sé no ano de 1950"
                />
                <h2>2015</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
            <div className="timeline_contanin right">
              <div className="content">
              <img
                  src={imgSe}
                  className="shadow-img"
                  width="250px"
                  height="350px"
                  alt="Homens no telhado da igreja da Sé no ano de 1950"
                />
                <h2>2012</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              </div>
            </div>
          </div>
          {/* 
          {props.conteudo.anos.map((ano, index) => {
            return (
              <div  className="timeline" key={props.conteudo.id[index]}>
                <div class>
                  <p style={{ color: "#707070", textAlign: "justify" }}>
                    {props.conteudo.historia}
                  </p>
                </div>
                <div className="col-lg-2">
                  <h3 className="ajust-title-conteudo text-center">{ano}</h3>
                </div>
                <div
                  className="col-lg-5  text-center"
                  style={{ marginTop: 100 + "px" }}
                >
                  <div>
                    <img
                      src={props.conteudo.imgConteudo[index]}
                      className="shadow-img"
                      width="350px"
                      height="450px"
                      alt="Homens no telhado da igreja da Sé no ano de 1950"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-5 text-center"
                  style={{ marginTop: 100 + 'px' }}>
                  <p style={{ color: "#707070", textAlign: "justify" }}>
                    {props.conteudo.historia}
                  </p>

                </div>
              </div>
            );
          })} */}
        </div>
      </section>
      <div style={{ marginTop: 3 + "em" }} />
    </Fragment>
  );
}
