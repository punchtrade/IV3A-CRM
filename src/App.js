import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./client/components/header/header";
import Dashboard from "./client/pages/dashboard";
import NewClient from "./client/pages/newClient";
import UploadPage from "./client/pages/uploadPage";
import PreOrderPage from "./client/pages/preOrder";
import Leads from './client/pages/leads';
import CarsPage from './client/pages/cars';
import Search from './client/pages/search';
import CrmPage from './client/pages/crm/crm';
import Crm2Page from './client/pages/crm/crm-2';
import Crm3Page from './client/pages/crm/crm-3';
import Crm4Page from './client/pages/crm/crm-4';
import Crm5Page from './client/pages/crm/crm-5';
import Crm6Page from './client/pages/crm/crm-6';
import InvoicePage from './client/pages/invoice';
import ContractPage from './client/pages/contract';
import Login from './client/pages/login';
import Register from './client/pages/register';
import FormCarPage from './client/pages/orderCar';
import PrivateRoute from './client/components/private-route/PrivateRoute';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "/Users/carmenbuendia/DevProjects/IV3A/src/client/actions/authActions.js";

import { Provider } from "react-redux";
import store from "/Users/carmenbuendia/DevProjects/IV3A/src/client/store.js";


var usuario = localStorage.getItem('usuario');

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      user: undefined, 
      redirect: sessionStorage.getItem('usuario') ? true : false, 
    };
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

    // if (this.state.redirectToReferrer || sessionStorage.getItem('usuario')) {
    //   return (<Redirect to={'usuario'} />)
    // }
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {/* <Route exact path="/home" component={Home} /> */}
          <p>{this.state.apiResponse}</p>
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route exact path="/newclient" component={NewClient} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/preorder" component={PreOrderPage} />

            <Route exact path="/leads" component={Leads} />
            <Route exact path="/cars" component={CarsPage} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/crm" component={CrmPage} />
            <Route exact path="/crm-2" component={Crm2Page} />
            <Route exact path="/crm-3" component={Crm3Page} />
            <Route exact path="/crm-4" component={Crm4Page} />
            <Route exact path="/crm-5" component={Crm5Page} />
            <Route exact path="/crm-6" component={Crm6Page} />
            <Route exact path="/invoice" component={InvoicePage} />
            <Route exact path="/contract" component={ContractPage} />
            <Route exact path="/formCar" component={FormCarPage} />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
