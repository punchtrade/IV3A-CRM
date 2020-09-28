import React, { useState, useEffect, Component } from "react";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import { Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  Formik } from 'formik';

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


class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "" ,
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
    (this.state.email === !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test) 
    {
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
    }  if  (this.state.email === localStorage.getItem("userTokenTime")) {
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


  onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/login", {
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        localStorage.setItem('cool-jwt', res.data);
        this.props.history.push('/dashboard')
      }).catch(() => this.setState({
  
        error: true
      }));
    }

  render() {
    const { error } = this.state;
    const { id, email, password } = this.state;
    return (
      <Formik>
      <div>
        <ValidatorForm
          className={styles.root} validate autoComplete="on"
          onSubmit={this.onSubmitHandler.bind(this)}
          action="http://localhost:9000/login"
          // value="submit"
          method="post"

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
            required
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
            required
          />
           <br />
          <Button
            variant="outlined"
            size="large"
            color="default"
            disabledElevation
            type="submit"
            // value="Submit"
            onClick={() => {
              this.signIn();
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
