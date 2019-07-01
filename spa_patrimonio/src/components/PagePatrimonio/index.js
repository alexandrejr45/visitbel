import './page_patrimonio.css'
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  }
});

export default props => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <section id="patrimonio-content" style={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={igreja_se_icon}
                  title="Igreja da Sé"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Igreja da Sé
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Igreja da Sé
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={igreja_santo_alexandre_icon}
                  title="Igreja de Santo Alexandre"
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
                    Igreja de Santo Alexandre
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardActionArea>
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
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};
