import "../../css/header.css";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className="appBar">
      <Container maxWidth="md">
        <Grid container spacing={3} className="container-grid">
          <Grid item xs={12} className="menu">
            <Typography
              variant="h6"
              className="item-menu icon-ajust"
            >
              <Link to="/home" className="link-menu">
                <i className="icon-ajust">
                  <FontAwesomeIcon icon="home" />
                </i>
                Home
              </Link>
            </Typography>
            <Typography
              variant="h6"
              className="item-menu nav-link nav-item tabbar-item nav-ajust icon-ajust"
            >
              <Link to="/patrimonio" className="link-menu">
                <i className="icon-ajust">
                  <FontAwesomeIcon icon="archway" />
                </i>
                Patrimônios
              </Link>
            </Typography>
            <Typography
              variant="h6"
              className="item-menu nav-link nav-item tabbar-item nav-ajust icon-ajust"
            >
              <Link to="/conta" className="link-menu">
                <i className="icon-ajust">
                  <FontAwesomeIcon icon="envelope-open" />
                </i>
                Contato
              </Link>
            </Typography>
            <Typography
              variant="h6"
              className="item-menu nav-link nav-item tabbar-item nav-ajust icon-ajust"
            >
              <Link to="/sobre" className="link-menu">
                <i className="icon-ajust">
                  <FontAwesomeIcon icon="caret-square-up" />
                </i>
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
