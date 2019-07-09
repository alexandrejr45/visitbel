import '../../css/pagina_patrimonio.css'
import React, {Fragment} from 'react'


function PatrimonioCaracteristica (props) {
    return (
      <Fragment>
        <section
          style={{
            background: `url(${
              props.conteudo.imgBackgroundSection
            }) no-repeat fixed`,
            backgroundSize: "cover",
            width: 100 + "%"
          }}
        >
          <div className="container">
            <article className="row">
              <header className="col-lg-12 text-center">
                <h3
                  className="ajust-title-conteudo text-color"
                  style={{ paddingTop: 20 + "px" }}
                >
                  {props.conteudo.titulo} e suas características
                </h3>
              </header>

              <div style={{ marginBottom: 5 + "em" }} />
              <div className="col-lg-9">
                <p className="text-color" style={{ fontSize: 16 + "px" }}>
                  {props.conteudo.caracteristica}
                </p>
              </div>
              <div className="col-lg-7">
                <img
                  src={props.conteudo.imgConteudo[3]}
                  className="img-fluid"
                  width="250"
                  height="150"
                  alt=""
                />
                <img
                  src={props.conteudo.imgConteudo[3]}
                  className="img-fluid"
                  width="250"
                  height="150"
                  alt=""
                />
              </div>
            </article>

            <div style={{ marginBottom: 3 + "em" }} />

            <article className="row">
              <div className="col-lg-9">
                <p className="text-color" style={{ fontSize: 16 + "px" }}>
                  {props.conteudo.caracteristica}
                </p>
              </div>
            </article>
          </div>
        </section>
        <div
          style={{
            marginTop: 3 + "em",
            background: "rgba(105, 28, 72, 1)"
          }}
        />
      </Fragment>
    );
}

export default PatrimonioCaracteristica;