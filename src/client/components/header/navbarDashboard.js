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
import Search from '../../pages/search';
import FormCar from '../forms/formCar';
import PreOrder from '../forms/preOrder';
// import Upload from '../uploadImages/upload';
import Leads from '../../pages/leads';
import Status from '../../pages/status';
import StatusPage from "../../pages/status";

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
                                        <MDBDropdownItem href="search">Search</MDBDropdownItem>
                                        <MDBDropdownItem href="leads">Prospects</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                {/* <MDBNavLink to="newClient">Nouveau Client</MDBNavLink> */}
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBNavLink to="search">Clients</MDBNavLink>
                            </MDBNavItem> */}
                            <MDBNavItem>
                                <MDBNavLink to="formCar">Véhicule</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="preOrder">Commande</MDBNavLink>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBNavLink to="upload">Importer des images</MDBNavLink>
                            </MDBNavItem> */}
                            {/* <MDBNavItem>
                                <MDBNavLink to="leads">Prospects</MDBNavLink>
                            </MDBNavItem> */}
                            <MDBNavItem>
                                <MDBNavLink to="status">Status</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <Switch>
                    <Route exact path="/newClient">
                        <NewClient />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/formCar">
                        <FormCar />
                    </Route>
                    <Route exact path="/preOrder">
                        <PreOrder />
                    </Route>
                    {/* <Route exact path="/upload">
                        <Upload />
                    </Route> */}
                    <Route exact path="/leads">
                        <Leads />
                    </Route>
                    <Route exact path="/status">
                        <StatusPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Navbar;
