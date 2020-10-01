import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Header from "./client/components/header/header";
import Home from "../src/client/pages/home";
import Dashboard from "./client/pages/dashboard";
import NewClient from "./client/pages/newClient";
import UploadPage from "./client/pages/uploadPage";
import PreOrderPage from "./client/pages/preOrder";
// import formCar from "./client/components/forms/formCar";
import Leads from './client/pages/leads';
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/newclient" component={NewClient} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/preorder" component={PreOrderPage} />
            {/* <Route exact path="/formCar" component={formCar} /> */}
            <Route exact path="/leads" component={Leads} />
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
    );
  }
}
export default App;
