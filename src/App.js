import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./client/components/header/header";
// import Footer from "./client/components/footer/footer";
import Home from "../src/client/pages/home";
import Dashboard from "./client/pages/dashboard";
import NewClient from "./client/components/forms/newClient";
import UploadPage from "./client/pages/uploadPage";
import PreOrder from "./client/components/forms/preOrder";
import formCar from "./client/components/forms/formCar";
import NavbarDashboard from './client/components/header/navbarDashboard';
import Leads from './client/pages/leads';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    // if (this.state.redirectToReferrer || sessionStorage.getItem('token')) {
    //     return (<Redirect to={'/login'} />)
    //   }
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/home" component={Home} />
          <p>{this.state.apiResponse}</p>
          <div className="container">
            {/* <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/navbarDashboard" component={NavbarDashboard} />
            <Route exact path="/newclient" component={NewClient} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/preorder" component={PreOrder} />
            <Route exact path="/formCar" component={formCar} />
            <Route exact path="/leads" component={Leads} />
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
export default App;
