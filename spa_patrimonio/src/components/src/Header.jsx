import "../../css/header.css";
import React from "react";
import {Link} from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Header = () => {
  return (
    <header className="appBar">
      <Container maxWidth="sm">
        <Grid container spacing={3} className="container-grid">
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">
                <Link to="/home" className="item-menu">
                  Home
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">
                <Link to="/patrimonio" className="item-menu">
                  Patrimônios
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">
                <Link to="/conta" className="item-menu">
                  Contato
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">
                <Link to="/sobre" className="item-menu">
                  Sobre
                </Link>
              </Typography>
            </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
