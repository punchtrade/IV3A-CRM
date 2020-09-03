import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewClient from '../forms/newClient';
import SearchPage from '../../pages/search';
import FormCar from '../forms/formCar';
import PreOrder from '../forms/preOrder';
// import Upload from '../uploadImages/upload';
import Leads from '../../pages/leads';
import Crm from '../crm/crm';
import StatusPage from "../../pages/status";
import InvoicePage from "../../pages/invoice";
import ContractPage from "../../pages/contract";


class Navbar extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <Router>
                <MDBNavbar
                    className="navbar-green"
                    color="#d21134 red darken-4"
                    dark
                    expand="md"
                >
                    <MDBNavbarBrand>
                        <strong className="white-text"></strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav center>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Clients</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="newClient">Nouveau Client</MDBDropdownItem>
                                        <MDBDropdownItem href="search">Clients</MDBDropdownItem>
                                        <MDBDropdownItem href="leads">Prospects</MDBDropdownItem>
                                        <MDBDropdownItem href="crm">CRM</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> 
                            <MDBNavItem>
                                <MDBNavLink to="formCar">Véhicule</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Contrats</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                    <MDBDropdownItem href="preOrder">Commande</MDBDropdownItem>
                                        <MDBDropdownItem href="invoice">Facture</MDBDropdownItem>
                                        <MDBDropdownItem href="contract">Contrat de Services</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <Switch>
                    <Route exact path="/newClient">
                        <NewClient />
                    </Route>
                    <Route exact path="/search">
                        <SearchPage />
                    </Route>
                    <Route exact path="/formCar">
                        <FormCar />
                    </Route>
                    <Route exact path="/preOrder">
                        <PreOrder />
                    </Route>
                    <Route exact path="/leads">
                        <Leads />
                    </Route>
                    <Route exact path="/crm">
                        <Crm />
                    </Route>
                    <Route exact path="/invoice">
                        <InvoicePage />
                    </Route>
                    <Route exact path="/contract">
                        <ContractPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Navbar;
