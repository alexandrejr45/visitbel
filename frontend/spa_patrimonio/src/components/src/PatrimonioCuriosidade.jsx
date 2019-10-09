import "../../css/pagina_patrimonio.css";
import React, { Fragment } from "react";

function PatrimonioCuriosidade(props) {
  return (
    <Fragment>
      <section
        style={{
          background: `url("${
            props.conteudo.imgBackgroundSection1
          }") no-repeat fixed`,
          backgroundSize: "cover",
          width: 100 + "%"
        }}
      >
        <div className="container">
          <article className="row">
            <div className="col-lg-12">
              <h3
                className="ajust-title-conteudo text-color text-center"
                style={{ paddingTop: 20 + "px" }}
              >
                {props.conteudo.name} Curiosidades
              </h3>
            </div>
            <div className="col-lg-12">
              <p className="text-color" style={{ fontSize: 16 + "px" }}>
                {props.conteudo.curiosidade}
                <br />
                {props.conteudo.curiosidade}
              </p>
            </div>
          </article>
        </div>
      </section>
    </Fragment>
  );
}

export default PatrimonioCuriosidade;
