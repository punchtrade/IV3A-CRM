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
import InvoicePage from './client/pages/invoice';
import ContractPage from './client/pages/contract';
import Login from './client/pages/login';
import Register from './client/pages/register';
import FormCarPage from './client/pages/orderCar';
import PrivateRoute from './client/components/private-route/PrivateRoute';
import Crm from './client/components/crm/crm';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./client/actions/authActions";
import {UserContextProvider} from '../src/client/context/UserContext';

import { Provider } from "react-redux";
import store from "./client/store";


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
      <UserContextProvider>
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

            <Route exact path="/crm" component={Crm} />
            <Route exact path="/invoice" component={InvoicePage} />
            <Route exact path="/contract" component={ContractPage} />
            <Route exact path="/formCar" component={FormCarPage} />
          </div>
        </div>
      </Router>
      </Provider>
      </UserContextProvider>
 
    );
  }
}
export default App;
