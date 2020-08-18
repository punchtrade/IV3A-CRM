import React from "react";
import Search from "../components/search/search";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NavbarDashboard from '../components/header/navbarDashboard';

class Dashboard extends React.Component {
  // onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   // this.props.history.replace("/newClient");
  //   console.log(this.state);
  //   axios
  //     .post("http://localhost:9000/dashboard", this.state, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  render() {
    return (
      <div className="dashboard">
        <NavbarDashboard />
        <br></br>
        <br></br>
        {/* <div>
          <button
            className="btn btn-primary-green btn-lg btn-block"
            type="submit"
            value="submit"
            onClick={() => {
              this.props.history.replace("/newClient");
            }}
          >
            Nouveau Client
          </button>
        </div> */}
        <br></br>
        <br></br>
        {/* <div>
          <button
            className="btn btn-primary-green btn-lg btn-block"
            type="submit"
            value="submit"
            onClick={() => {
              this.props.history.replace("/leads");
            }}
          >
            Leads
          </button>
          <br></br>
          <br></br>
        </div> */}
        {/* <div className="search">
          <Search />
        </div> */}
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(Dashboard);
