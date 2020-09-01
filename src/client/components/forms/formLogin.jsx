import React from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
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

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      redirect: localStorage.getItem("userTokenTime") ? true : false,
    };
  }

  changeHandler = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ 
      [e.target.name] : isCheckbox
      ? e.target.checked
      : e.target.value
      // [e.target.name]: e.target.value 
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    this.props.history.push("/dashboard");
    console.log(this.state);
    await axios
      .post("http://localhost:9000/login", this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
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
          <form     
            onSubmit={this.onSubmitHandler.bind(this)}
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
              value={email}
              onChange={this.changeHandler}
              error
              autoComplete=""
              helperText="some validation error"
              required
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
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={this.changeHandler}
              error
              autoComplete=""
              helperText="some validation error"
              required
            />
            <button
              className="btn btn-primary-green"
              type="submit"
              value="Submit"
              onClick={this.onSubmitHandler.bind(this)}
            >
              Connecter
          </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FormLogin);
