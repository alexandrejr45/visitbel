import "../../css/pagina_patrimonio.css";
import React, { Fragment } from "react";

export default function HistoriaPatrimonio(props) {
  return (
    <Fragment>
      <section className="historia">
        <div className="container">
          <div className="col-12">
            <h3 className="ajust-title-conteudo text-center">História</h3>
          </div>
          {props.conteudo.anos.map((ano, index) => {
            return (
              <div className="row" key={props.conteudo.id[index]}>
                <div className="col-lg-5" style={{ marginTop: 100 + "px" }}>
                  <p style={{ color: "#707070", textAlign: "justify" }}>
                    {props.conteudo.historia}
                  </p>
                </div>
                <div className="col-lg-2">
                  <h3 className="ajust-title-conteudo text-center">{ano}</h3>
                  <div id="line_down" className="add-line" />
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
              </div>
            );
          })}
        </div>
      </section>
      <div style={{ marginTop: 3 + "em" }} />
    </Fragment>
  );
}