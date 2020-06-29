import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, } from "mdbreact";
import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Logout from '../../pages/logout';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);

    let shouldRedirect = false;
    if(localStorage.getItem('userTokenTime')) {
      const data = JSON.parse(localStorage.getItem('userTokenItem'));
      if(new Date().getTime() - data.time > (1 * 60 * 60 * 1000 )) {
        localStorage.removeItem('userTokenTime');
        shouldRedirect = true;
      }
    } else {
      shouldRedirect = true;
    }

    this.state = {
      redirect: shouldRedirect,
      usersList: []
    }
  }

  componentDidMount() {
    if(localStorage.getItem('userTokenTime')) {
      axios.get('http://127.0.0.1:3000/users', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + JSON.parse(localStorage.getItem('userTokenTime')).token
        }
      }).then(res => {
        this.setState({
          usersList: res.data
        });
      });
    }
  }
  
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
   
    render() {
      if (this.state.redirect) return <Redirect to="/signIn" />

      const users = this.state.usersList.map(users => {
        return (
            <Router>
              <MDBNavbar color="#036435 light-green darken-4" dark expand="md">
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
                          <MDBNavLink to="login" key={users._id}>Connexion</MDBNavLink>
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
                  <Route path="/register">
                      <Register />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
                  <Route path="/logout">
                      <Logout />
                  </Route>
              </Switch>
            </Router>
            );
          })
          }
        }

export default Header;