import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import imgMaps1 from "../../img/Google-Maps.png";
import igreja_santo_alexandre_icon from "../../img/flat1.png";
import igreja_se_icon from "../../img/flat2.png";
import forte_icon from "../../img/flat3.png";

const divStyle = {
  marginTop: "2em",
  textAlign: "center"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default props => (
  <React.Fragment>
    <div className="background-img">
      <div className="background-content" />
    </div>
    <Container maxWidth="md">
      <section className={useStyles.root}>
        <Grid container spacing={3} style={divStyle}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">
              O Centro Histórico na Palma da Sua Mão
            </Typography>
            <Typography style={divStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mollis felis risus, non vehicula tellus aliquet et. Nam id
              elementum purus. Vivamus ac lobortis massa, et fermentum nisl.
              Vestibulum et ante a mi molestie feugiat.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={imgMaps1} width="250" height="450" alt="" />
          </Grid>
        </Grid>
      </section>
      <section className={useStyles.root}>
        <Grid container spacing={3} style={divStyle}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Conheça nossos patrimônios</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mollis felis risus, non vehicula tellus aliquet et. Nam id
              elementum purus. Vivamus ac lobortis massa, et fermentum nisl.
              Vestibulum et ante a mi molestie feugiat
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <img
              src={igreja_se_icon}
              width="120"
              height="120"
              alt="Imagem da catedral da Sé"
            />
            <Typography>Catedral da Sé</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src={igreja_santo_alexandre_icon}
              width="120"
              height="120"
              alt="Imagem da catedral da Sé"
            />
            <Typography>Igreja de Santo Alexandre</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src={forte_icon}
              width="120"
              height="120"
              alt="Imagem da catedral da Sé"
            />
            <Typography aria-labelledby="nome_patrimonio">
              Casa das Onze Janelas
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  </React.Fragment>
);
