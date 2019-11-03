import "../../css/page_patrimonio.css";
import React from "react";
import {
  Grid, Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button,
  Typography, Box
} from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import igreja_santo_alexandre_icon from "../../img/flat1.png";
import igreja_se_icon from "../../img/flat2.png";
import forte_icon from "../../img/flat3.png";

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
  font: {
    fontFamily: "montserrat-semibold"
  },

});

export default function HomePatrimonio() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">

      <div style={{ paddingTop: 5 + "em" }} />

      <section id="patrimonio-content" style={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="div">
              <Typography component="h3" className={useStyles.font} >
                Navegue Pelos Nossos Patrimônios
              </Typography>
            </Box>
            <Typography component="p">
              Tenha Experiências Incríveis
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={igreja_se_icon}
                  title="Igreja da Sé" />
                <CardContent>
                  <Typography gutterBottom  component="h4">
                    Igreja da Sé
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Igreja da Sé
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to="/patrimonio/igreja-da-se">Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={igreja_santo_alexandre_icon}
                  title="Igreja de Santo Alexandre"
                />
                <CardContent>
                  <Typography gutterBottom component="h4">
                    Forte do Castelo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Forte do Castelo
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: `rgba(105, 28, 72, 0.6)` }}>
                  <Link to="/patrimonio/igreja-de-santo-alexandre">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardActionArea className="card-content">
                <CardMedia
                  className={classes.media}
                  image={forte_icon}
                  title="Casa das Onze Janelas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Igreja de Santo Alexandre
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Casa das Onze Janelas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to="/patrimonio/casa-das-onze-janelas">
                    Learn More
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};