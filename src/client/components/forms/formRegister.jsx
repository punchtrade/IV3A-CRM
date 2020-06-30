import React from "react";
import axios from 'axios';
import { MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formRegister.scss';

class FormRegister extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName:'',
      idCard: '',
      email:'',
      password:'',
      errors: {}
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.firstNameInputChangeHandler = this.firstNameInputChangeHandler.bind(this);
    this.lastNameInputChangeHandler = this.lastNameInputChangeHandler.bind(this);
    this.idCardInputChangeHandler = this.idCardInputChangeHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
    this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
  }

  onSubmitHandler (e) {
    e.preventDefault();
    if (!(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '')
      && (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('http://localhost:3000/register', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        idCard: this.state.idCard,
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        this.setState({
          redirect: true
        });
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert('Please enter valid details');
    }
  }

  firstNameInputChangeHandler(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  lastNameInputChangeHandler(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  idCardInputChangeHandler(event) {
    this.setState({
      idCard: event.target.value
    });
  }

  emailInputChangeHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordInputChangeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }
  render() {
    // if (this.state.redirect) return <Redirect to='/' />
    return (
    <MDBContainer className="form" onSubmit={this.onSubmitHandler.bind(this)} method="POST"  action="/post-feedback">
      <MDBInputGroup 
        containerClassName="mb-3 mt-3"
        prepend="Nom et Prénom"
        value={this.firstName && this.lastName}
        onChange={this.firstNameInputChangeHandler &&  this.lastNameInputChangeHandler} required
        inputs={
          <>
            <MDBInput noTag type="text" hint="Nom" />
            <MDBInput noTag type="text" hint="Prénom" />
          </> 
                 
        }        
      />

<MDBInputGroup       
        containerClassName="mb-3 mt-3"
        prepend="Carte d'identité"
        value={this.idCard}
        onChange={this.idCardInputChangeHandler} required
        inputs={
          <>
            <MDBInput noTag type="text" hint="Carte d'identité" />
          </>          
        }        
      />

<MDBInputGroup       
        containerClassName="mb-3 mt-3"
        prepend="Email"
        value={this.email}
        onChange={this.emailInputChangeHandler} required
        inputs={
          <>
            <MDBInput noTag type="text" hint="Email" />
          </>          
        }        
      />

<MDBInputGroup
        containerClassName="mb-3 mt-3"
        prepend="Mot de passe"
        value={this.password}
        onChange={this.passwordInputChangeHandler} required
        inputs={
          <>
            <MDBInput noTag type="text" hint="Mot de passe" />
          </>          
        }        
      />
       <ButtonSubmit onChange={this.onSubmitHandler} type="submit" value="Submit"/>
    </MDBContainer> 
   
    );
  }
};

export default FormRegister;