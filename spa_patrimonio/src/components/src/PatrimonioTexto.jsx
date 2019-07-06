import '../../css/patrimonio_texto.css'
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

function PatrimonioTexto(props) {
  const tipo_patrimonio = props.name;

  return (
    <Container maxWidth="md">
      <section id="historia">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" className="titulo_historia">
              História
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="texto_historia">
                {tipo_patrimonio.historia}
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}

export default PatrimonioTexto;
