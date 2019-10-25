import React, {Fragment} from 'react';
import PatrimonioHeader from './PatrimonioHeader';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PatrimonioHistoria from './PatrimonioHistoria';
import PatrimonioCaracteristica from './PatrimonioCaracteristica'
import PatrimonioCuriosidade from './PatrimonioCuriosidade'
import img_historia from '../../img/old-letters-1082299_640.jpg'
import texto from '../../texts/igreja_da_se.json';
import img_igreja_se from '../../img/igreja_se.jpg';
import img_default from '../../img/c.se.jpg'
import img_background_about from '../../img/igreja_se/background-about.png';
import img_background_about_1 from '../../img/igreja_se/background-about01.png';
import img_background_section from '../../img/igreja_se/backgrund-se.png';
import img_background_section_1 from '../../img/igreja_se/background-se03.png';
import img_texto from '../../img/igreja_se/img-se-2.jpg';
import img_texto_1 from '../../img/igreja_se/img-se-3.jpg';
import img_texto_2 from '../../img/igreja_se/img-se-5.jpg';

const objetoConteudo = {
  id: [0, 1],
  titulo: texto.titulo,
  subtitulo: `"${texto.subtitulo}"`,
  historia: texto.historia,
  caracteristica: texto.caracteristica,
  curiosidade: texto.curiosidade,
  anos: [1978, 2001],
  imgBackgroundHeader: img_igreja_se,
  imgBackgroundSection: img_background_section,
  imgBackgroundSection1: img_background_section_1,
  imgConteudo: [img_texto, img_texto_1, img_texto_2, img_default]
};

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


export default function IgrejaSePatrimonio() {
  const classes = useStyles();

  return (
    <Fragment>
      <PatrimonioHeader conteudo={objetoConteudo} />
       <Container>
         <section>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={img_historia}
                  title="Igreja de Santo Alexandre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   História
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: `rgba(105, 28, 72, 0.6)`}}>
                  <Link to="/patrimonio/igreja-de-santo-alexandre">
                    Leia mais 
                  </Link>
                </Button>
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={img_historia}
                  title="Igreja de Santo Alexandre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Curiosidades
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: `rgba(105, 28, 72, 0.6)`}}>
                  <Link to="/patrimonio/igreja-de-santo-alexandre">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={img_historia}
                  title="Igreja de Santo Alexandre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Galeria
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: `rgba(105, 28, 72, 0.6)`}}>
                  <Link to="/patrimonio/igreja-de-santo-alexandre">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={img_historia}
                  title="Igreja de Santo Alexandre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Eventos
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{color: `rgba(105, 28, 72, 0.6)`}}>
                  <Link to="/patrimonio/igreja-de-santo-alexandre">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
            </Grid>
          </Grid>
         </section>
       </Container>
       {/* <PatrimonioHistoria conteudo={objetoConteudo} />
       <PatrimonioCuriosidade conteudo={objetoConteudo} />
       <PatrimonioCaracteristica conteudo={objetoConteudo} /> */}
    </Fragment>
  );
}
