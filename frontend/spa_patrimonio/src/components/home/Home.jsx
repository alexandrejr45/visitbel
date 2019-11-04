import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleMapsImg from '../../img/Google-Maps.png';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';


// import igreja_santo_alexandre_icon from '../../img/flat1.png';
// import igreja_se_icon from '../../img/flat2.png';
// import casa_das_onze_janelas from '../../img/flat3.png';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  inputColor:{
    color: "white"
  },
}));
const Home = () => {
  const classes = useStyles();
  const styleCenter = [-50 + '%', -50 + '%'];
  const [values, setValues] = React.useState({
    nome: '', 
    email: '',
    bio:''  
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Fragment>
      <div className="ajuste-tela">
        <div className="background-img">
          <div className="container">
            <div className="texto-home">
              <h2
                className="text-color"
                style={{
                  top: 50 + '%',
                  left: 50 + '%',
                  position: 'absolute',
                  marginRight: -50 + 'px',
                  transform: `translate(${styleCenter})`,
                }}
              >
                O que você deseja fazer?
              </h2>
            </div>

            <div id="scroll-d" onClick={scrollArrow}>
              <i style={{ fontSize: 30 + 'px' }}>
                <FontAwesomeIcon icon="angle-double-down" />
              </i>
            </div>
          </div>
        </div>
      </div>
      <section id="down" className="background-about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 text-center offset-md-1 ajust-text-conteudo text-color"
              style={{ paddingTop: 5 + 'em' }}
            >
              <h4>O Centro Histórico na Palma da Sua Mão</h4>
              <p
                className="col-lg-12"
                style={{ marginTop: 2 + 'em', fontWeight: 'normal' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mollis felis risus, non vehicula tellus aliquet et. Nam id
                elementum purus. Vivamus ac lobortis massa, et fermentum nisl.
                Vestibulum et ante a mi molestie feugiat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                mollis felis risus, non vehicula tellus aliquet et. Nam id
                elementum purus. Vivamus ac lobortis massa, et fermentum nisl.
                Vestibulum et ante a mi molestie feugiat.
              </p>
            
            </div>
            <div className="col-lg-3 text-center" style={{ top: 7 + 'em' }}>
              <img src={googleMapsImg} width="250" height="450" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: 10 + 'em' }} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 style={{ textAlign: 'center' }}>
                Sobre Nós
              </h4>
            </div>
          </div>
          <div style={{ marginTop: 3 + 'em' }} />

          <div className="row spacing_align">
            <div className="col-  6 offset-lg-6">
              <h5>Sobre o Visitbell</h5>
            </div>
            <div className="col-6 offset-lg-6">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh blandit, porttitor odio ac, aliquam risus. Proin sagittis vehicula tincidunt.
               Integer ac ante quis felis imperdiet scelerisque eu sit amet nulla.
            
            </p>
               </div>
          </div>

          <div className="row spacing_align">
            <div className="col-12">
              <h5>Projeto de extensão</h5>

            </div>
            <div className="col-6">
              <p>
                O projeto VisitBel, ten por iniciativa iniciar a carreira de historiadores
                de todo o nundo a ser quen você é de verdade!
              </p>
            </div>
          </div>

          <div className="row spacing_align">
            <div className="col-6 offset-lg-6">
              <h5>Colaboradores</h5>

            </div>
            <div className="col-6 offset-lg-6">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh blandit, porttitor odio ac, aliquam risus. Proin sagittis vehicula tincidunt.
                Integer ac ante quis felis imperdiet scelerisque eu sit amet nulla.
              
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="background-home">
        <div className="container">
          <div className="col-12">
            <h3 className="ajust-title-conteudo text-center text-color">Contato</h3>
          </div>
          <div className="col-12">
            <h6 className="ajust-title-conteudo text-center text-color">Entre em contato conosco. Mande sua sugestão para melhorarmos
            </h6>
          </div>
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <div className={classes.root}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Nome</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.nome}
                      onChange={handleChange('nome')}
                      labelWidth={60}
                    />
                  </FormControl>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <div className={classes.root}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={values.email}
                      onChange={handleChange('email')}
                      labelWidth={60}
                    />
                  </FormControl>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="offset-lg-3 col-lg-6">
              <div className={classes.root}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Bio</InputLabel>
                    <OutlinedInput
                      multiline={true}
                      className={classes.inputColor}
                      id="outlined-adornment-amount"
                      value={values.bio}
                      onChange={handleChange('bio')}
                      labelWidth={60}
                      rows={6}
                    />
                  </FormControl>
                </div>
            </div>
          </div>
          </div>
      </section>
    </Fragment>
  );
};

function scrollArrow() {
  let elemento = document.querySelector('#down');
  let offset = elemento.offsetTop;

  window.scroll({
    top: offset,
    left: 0,
    behavior: 'smooth',
  });
}

export default Home;

