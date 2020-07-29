import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, } from "mdbreact";
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Logout from '../../pages/logout';




class Header extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
   
    render() {

        return (
            <Router>
              <MDBNavbar className="navbar-green"color="#036435 green darken-4" dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text"></strong>
                </MDBNavbarBrand> 
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>             
                      <MDBNavbarNav right>
                        <MDBNavItem active>
                          <MDBNavLink to="register">S'inscrire</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="login">Connexion</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="logout">Déconnexion</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
              </MDBNavbar>
              <Switch>
                  <Route exact path="/register">
                      <Register />
                  </Route>
                  <Route exact path="/login">
                      <Login />
                  </Route>
                  <Route exact path="/logout">
                      <Logout />
                  </Route>
              </Switch>
            </Router>
            );
          }
        }

export default Header;