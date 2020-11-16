import React from "react";
import { withRouter } from "react-router-dom";
import { Button, InputLabel, FilledInput, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, LockRounded, Person, SupervisorAccount } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));

class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      idCard: "",
      email: "",
      password: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
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

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      idCard: this.state.idCard,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <div className="container-form">
          <form noValidate
            onSubmit={this.onSubmit}
            action="http://localhost:9000/register"
            method="post"
          >
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Prénom
              </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                )
              }}
              className={styles.inputMaterial}
              name="lastName"
              placeholder="Prénom"
              value={this.state.lastName}
              onChange={this.onChange}
              error={errors.lastName}
              id="lastName"
              autoComplete=""
              type="text"
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Nom
              </InputLabel>
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SupervisorAccount />
                  </InputAdornment>
                )
              }}
              className={styles.inputMaterial}
              name="firstName"
              placeholder="Nom"
              value={this.state.firstName}
              onChange={this.onChange}
              error={errors.firstName}
              id="firstName"
              autoComplete=""
              type="text"
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Carte d'identité
              </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="idCard"
              placeholder="Carte d'identité"
              value={this.state.idCard}
              onChange={this.onChange}
              error={errors.idCard}
              id="idCard"
              autoComplete=""
              type="text"
            />
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
              errors={errors.email}
              id="email"
              autoComplete=""
              type="email"
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
              type="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.onChange}
              errors={errors.password}
              id="password"
              autoComplete=""
              type="password"
            />
            <br /><br /><br />
            <Button
              variant="outlined"
              size="large"
              color="default"
              disabledElevation
              type="submit"
              onClick={this.onSubmit}>
              Envoyer
          </Button>
            <br /><br />
          </form>
        </div>
      </div>
    );
  }
}

FormRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(FormRegister));
