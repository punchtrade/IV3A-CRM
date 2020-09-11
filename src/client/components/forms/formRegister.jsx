import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/login");
    console.log(this.state);
    axios
      .post("http://localhost:9000/register", this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { firstName, lastName, idCard, email, password } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <div className="container-form">
          <form
            onSubmit={this.onSubmitHandler.bind(this)}
            action="http://localhost:9000/register"
            method="post"
          >
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Nom
              </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="firstName"
              placeholder="Nom"
              value={firstName}
              onChange={this.changeHandler}
              autoComplete=""
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Prénom
              </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="lastName"
              placeholder="Prénom"
              value={lastName}
              onChange={this.changeHandler}
              autoComplete=""
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
              value={idCard}
              onChange={this.changeHandler}
              autoComplete=""
            />
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
              placeholder="Courrier électronique"
              value={email}
              onChange={this.changeHandler}
              autoComplete=""
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Mot de passe
              </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={this.changeHandler}
              autoComplete=""
            />
            <br/><br/>
            <Button 
             variant="outlined"
             size="large"
             color="default"
             disabledElevation
            type="submit" 
            onClick={this.onSubmitHandler.bind(this)}>
              Envoyer
          </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FormRegister);
