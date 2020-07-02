import React from "react";
import axios from 'axios';
import { MDBContainer, MDBInputGroup, MDBInput, MDBBtn } from "mdbreact";
// import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formRegister.scss';

class FormRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName:'',
      idCard: '',
      email:'',
      password:'',
      errors: {}
    };

  }

  changeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state)

   await axios
          .post('http://localhost:3000/register/', this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
  }

  render() {
      const { firstName, lastName, idCard, email, password } = this.state
        return (
        <MDBContainer className="form" onSubmit={this.submitHandler}>
          <MDBInputGroup 
            containerClassName="mb-3 mt-3"
            prepend="Nom"
            type="text"
            value={firstName}
            onChange= {this.changeHandler} required
            inputs={
              <>
                <MDBInput noTag type="text" hint="Nom" />
              </> 
                    
            }        
          />
          <MDBInputGroup
            containerClassName="mb-3 mt-3"
            prepend="Prénom"
            type="text"
            value={lastName}
            onChange={this.changeHandler} required
            inputs={
              <>
                <MDBInput noTag type="text" hint="Prénom" />
                </>
            }
          />

    <MDBInputGroup       
            containerClassName="mb-3 mt-3"
            prepend="Carte d'identité"
            type="text"
            value= {idCard}
            onChange={this.changeHandler} required
            inputs={
              <>
                <MDBInput noTag type="text" hint="Carte d'identité" />
              </>          
            }        
          />

    <MDBInputGroup       
            containerClassName="mb-3 mt-3"
            prepend="Email"
            type="text"
            value={email}
            onChange={this.changeHandler} required
            inputs={
              <>
                <MDBInput noTag type="text" hint="Email" />
              </>          
            }        
          />

    <MDBInputGroup
            containerClassName="mb-3 mt-3"
            prepend="Mot de passe"
            type="text"
            value={password}
            onChange={this.changeHandler} required
            inputs={
              <>
                <MDBInput noTag type="text" hint="Mot de passe" />
              </>          
            }        
          />
          <MDBBtn onClick={this.submitHandler} type="submit"/>
        </MDBContainer> 
      
        );
      }
    };

export default FormRegister;