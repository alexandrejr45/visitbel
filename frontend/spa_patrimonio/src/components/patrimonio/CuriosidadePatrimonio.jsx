import '../../css/pagina_patrimonio.css';
import React, { Fragment } from 'react';
import imgSe from '../../img/igreja_se/img-se-2.jpg';
import {
  Grid, Container, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Button,
  Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

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
export default function CuriosidadePatrimonio(props) {
  const classes = useStyles();
  return (

    <Fragment>
      <Container maxWidth="md">
        <Box component="div" className="col-12">
          <h3 className="ajust-title-conteudo text-center">Curiosidades Sobre a Catedral da Sé</h3>
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
          {/* <Grid item xs={12} sm={6} >
            <CardMedia
              className={classes.media}
              image={imgSe}

              width="250px"
              height="250px"
            />
          </Grid> */}
        </Grid>
      </Container>
    </Fragment>
  );
}
