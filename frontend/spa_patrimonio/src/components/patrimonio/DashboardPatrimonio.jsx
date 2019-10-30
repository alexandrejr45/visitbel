import React, { Fragment } from 'react';
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
import img_historia from '../../img/old-letters-1082299_640.jpg'

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


export default function DashboardPatrimonio(props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <section>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardActionArea className="card-content">
                  <CardMedia
                    className={classes.media}
                    image={img_historia}
                    title="História"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      História
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: `rgba(105, 28, 72, 0.6)` }}>
                    <Link to="#">
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
                    title="Curiosidades"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Curiosidades
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: `rgba(105, 28, 72, 0.6)` }}>
                    <Link to="#">
                     Leia Mais
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
                    title="Galeria"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Galeria
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: `rgba(105, 28, 72, 0.6)` }}>
                    <Link to="#">
                     Leia Mais
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
                    title="Eventos"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Eventos
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" style={{ color: `rgba(105, 28, 72, 0.6)` }}>
                    <Link to="#">
                     Leia Mais
                  </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </section>
      </Container>
    </Fragment>
  );
}
