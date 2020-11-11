import React from "react";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import { Button, InputLabel, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Formik } from 'formik';
import { getJwt } from '../../helpers/index';
import AuthComponent from '../Authcomponent';



const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

var usuario = localStorage.getItem('usuario');

class FormLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user: sessionStorage.getItem('usuario'),
      email: "",
      password: "",
      token: sessionStorage.getItem('usuario'),
      message: "",
      open: false,
      accessToken: "",
      redirect: localStorage.getItem("userTokenTime") ? true : false,
    };
  }

  setEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  signIn = () => {
    if
      (this.state.email === !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test) {
      this.setState({
        open: true,
        message: "Vous vous êtes connecté avec succès!"
      });
    }
    else {
      this.setState({
        open: true,
        message: "Identifiant ou mot de passe incorrect!"
      });
    } if (this.state.email === sessionStorage.getItem("userTokenTime")) {
      this.setState({
        open: true,
        messege: "El usuario no existe!!"
      })
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    // axios.get('/login', { headers: { Authorization: getJwt() } }).then(res => {
    //   this.setState({
    //     user: res.data
    //   })
    // });
  }



  onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/login", {
        email: this.state.email,
        password: this.state.password,
        redirect: localStorage.setItem('usuario', this.state.email),

      }).then(res => {
        localStorage.setItem('users', res.data);
        this.props.history.push('/dashboard')
      }).catch(() => this.setState({

        error: true
      }));
  }

  render() {
    const { error } = this.state;
    const { id, email, password, user } = this.state;
    return (
      <Formik>
        <div>
        <input type="hidden" id={id} name="user" value={usuario}></input>
          <ValidatorForm
            className={styles.root} validate autoComplete="on"
            onSubmit={this.onSubmitHandler.bind(this)}
            action="http://localhost:9000/login"
            method="post"

          >
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Courrier électronique
              </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              className={styles.inputMaterial}
              name="email"
              type="email"
              placeholder="Courrier électronique"
              value={email}
              onChange={this.setEmail}
              validators={["required"]}
              errorMessages={["Ce champ est requis"]}
              required
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Mot de passe
              </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                )
              }}
              className={styles.inputMaterial}
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={this.setPassword}
              validators={["required"]}
              errorMessages={["Ce champ est requis"]}
              required
            />
            <br />
            <Button
              variant="outlined"
              size="large"
              color="default"
              disabledElevation
              type="submit"
              onClick={() => {
                this.signIn({usuario});
              }}
            >
              Connecter
          </Button>
            <br /><br />
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">S'inscrire</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.state.message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  D'accord
              </Button>
              </DialogActions>
            </Dialog>
          </ValidatorForm>
        </div>
      </Formik>
    );
  }
}

export default withRouter(FormLogin);
