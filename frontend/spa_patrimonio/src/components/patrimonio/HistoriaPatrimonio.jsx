import "../../css/pagina_patrimonio.css";
import imgSe from '../../img/igreja_se/img-se-2.jpg';
import {
  Grid, Container, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button,
  Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

import React, { Fragment } from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 220
  },
  root: {
    flexGrow: 1
  },
  margin: "5em"
});
export default function HistoriaPatrimonio() {
  const classes = useStyles();

  return (
    <Fragment>


      <Container maxWidth="md">

        <Box component="section">
          <div className="col-12">
            <h3 className="ajust-title-conteudo text-center">História</h3>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Box component="div" className="timeline">
                <div className="timeline_contanin left">
                  <div className="content">
                    {/* <CardMedia
                      className={classes.media}
                      width="250px"
                      height="250px"
                    /> */}
                    <ExpansionPanel>
                      <ExpansionPanelSummary>
                        <Typography component="h3">
                          1958
                         </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>

                      </ExpansionPanelDetails>

                    </ExpansionPanel>
                    <Typography component="p">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                      perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                      iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
                    </Typography>

                  </div>
                </div>

                <Box component="div" className="timeline_contanin right">
                  <Box component="div" className="content">
                    {/* <CardMedia
                      className={classes.media}
                      width="250px"
                      height="250px"
                    /> */}
                    <Typography component="h3">
                      1970
                    </Typography>
                    <Typography component="p">
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                      perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                      iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
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
                  <divi8>
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
        </Box>

        <div style={{ marginTop: 3 + "em" }} />

        <Box component="div" className="col-12">
          <h3 className="ajust-title-conteudo text-center">Um pouco mais sobre a catedral da sé</h3>
        </Box>

        <div style={{ marginTop: 4 + "em" }} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <Typography color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
              </Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CardMedia
              className={classes.media}
              image={imgSe}

              width="250px"
              height="250px"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
              </Typography>
          </Grid>
          <Box component="div" className="timeline">
            <div className="timeline_contanin left">
              <div className="content">
                {/* <CardMedia
                      className={classes.media}
                      width="250px"
                      height="250px"
                    /> */}
                <Typography component="h3">
                  2017
                 </Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                  perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
                 </Typography>
              </div>
            </div>
            <div className="timeline_contanin right">
              <div className="content">
                {/* <CardMedia
                      className={classes.media}
                      width="250px"
                      height="250px"
                    /> */}
                <Typography component="h3">
                  2017
                 </Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
                  perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.
                 </Typography>
              </div>
            </div>
          </Box>
          <Grid item xs={12} sm={12} >
            <Typography color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie neque nec
               leo fringilla, eu dignissim elit vulputate. Maecenas eleifend feugiat faucibus.
                Nullam in interdum ligula.
              </Typography>
          </Grid>
        </Grid>
      </Container>

      <div style={{ marginTop: 3 + "em" }} />
    </Fragment >
  );
}
