import React from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";

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
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/dashboard");
    console.log(this.state);
    axios
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
      <div>
        <form
          onSubmit={this.onSubmitHandler.bind(this)}
          action="http://localhost:9000/login"
          value="submit"
          method="post"
        >
          <div>
            <input
              className="mb-3 mt-3"
              id={id}
              type="text"
              name="email"
              placeholder="Courrier électronique"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              className="mb-3 mt-3"
              id={id}
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <button
            type="submit"
            value="Submit"
            onClick={this.onSubmitHandler.bind(this)}
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormLogin);
