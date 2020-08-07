import React from "react";
import Search from "../components/search/search";
import axios from "axios";
import "../styles/dashboard.scss";
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.history.replace("/newClient");
    console.log(this.state);
    axios
      .post("http://localhost:9000/newClient", this.state, {
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
    return (
      <div className="dashboard">
        <div className="button">
          <button
            type="submit"
            value="submit"
            onClick={() => {
              this.props.history.replace("/newClient");
            }}
          >
            Nouveau Client
          </button>
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
