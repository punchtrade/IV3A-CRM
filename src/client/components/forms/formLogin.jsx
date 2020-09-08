import React, {useState, useEffect} from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import { Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      message: "",
      open: false,
      // redirect: localStorage.getItem("userTokenTime") ? true : false,
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
    if (this.state.email === "react" && this.state.password === "password") {
      this.setState({
        open: true,
        message: "Vous vous êtes connecté avec succès!"
      });
    } else {
      this.setState({
        open: true,
        message: "Identifiant ou mot de passe incorrect!"
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  initSession = async () => {
    await axios
      .post("http://localhost:9000/login", this.state, {
      })
      .then((response) => {
        return response.data;
      })
      .then(response => {
        if(response.length>0){
          var respuesta=response[0];
          localStorage.getItem('email', respuesta.email, {path: "/login"});
          alert('Bienvenido ${respuesta.firstName}');
          window.location.href="/dashboard";
        // }else{
        //   alert('El usuario o la contraseña no son correctos');
         }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { id, email, password } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <div>
          <ValidatorForm
            onSubmit={this.initSession.bind(this)}
            action="http://localhost:9000/login"
            value="submit"
            method="post"
            required
          >
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Courrier électronique
              </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="email"
              type="email"
              placeholder="Courrier électronique"
              value={this.state.email}
              onChange={this.setEmail}
              validators={["required"]}
              errorMessages={["Ce champ est requis"]}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Mot de passe
              </InputLabel>
            <TextValidator
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.setPassword}
              validators={["required"]}
              errorMessages={["Ce champ est requis"]}
            />
            <Button
              className="btn btn-primary-green"
              type="submit"
              value="Submit"
              onClick={() => {
                this.signIn();
              }}
            >
              Connecter
          </Button>
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
      </div>
    );
  }
}

export default withRouter(FormLogin);
