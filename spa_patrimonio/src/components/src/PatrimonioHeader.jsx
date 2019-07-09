import "../../css/pagina_patrimonio.css";
import React, { Fragment } from "react";

function PatrimonioHeader (props) {
  const tipo_patrimonio = props.conteudo;

  return (
    <Fragment>
      <div
        className="background-conteudo"
        style={{
          background: `linear-gradient(225deg, rgba(105, 28, 72, 0.5), rgba(105, 28, 72, 0.7)), url("${
            tipo_patrimonio.imgBackgroundHeader
          }")`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          width: "auto",
          maxHeight: "auto",
          height: 500 + "px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5" style={{ marginTop: 5 + "em" }}>
              <h2 className="text-color">{tipo_patrimonio.titulo}</h2>
              <div className="col-md-2 line-border" />
            </div>
          </div>
          <div className="row ">
            <div
              className="col-md-8 ajust-text-conteudo text-color"
              style={{ marginTop: 2 + "em" }}
            >
              <h5>{tipo_patrimonio.subtitulo}</h5>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: 5 + "em" }} />
    </Fragment>
  );
}

export default PatrimonioHeader;
