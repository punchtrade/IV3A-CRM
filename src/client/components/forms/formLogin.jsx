import React from "react";
import { withRouter} from "react-router-dom";
import { Button, InputLabel, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm } from "react-material-ui-form-validator";
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { Formik } from 'formik';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";



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
    super();
    this.state = {
      id: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    } if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    console.log(userData);
    // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  
  render() {
    const { errors } = this.state;
    const { id } = this.state;
    return (
      <Formik>
        <div>
          <input type="hidden"
            id={id} 
            name="user"
            value={usuario}></input>
          <ValidatorForm
            className={styles.root} validate autoComplete="on"
            onSubmit={this.onSubmit}
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
              placeholder="Courrier électronique"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              id="email"
              type="email"
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
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              id="password"
              type="password"
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
              onClick={this.onSubmit}
            >
              Connecter
          </Button>
            <br /><br />
          </ValidatorForm>
        </div>
      </Formik>
    );
  }
}

FormLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(FormLogin));
