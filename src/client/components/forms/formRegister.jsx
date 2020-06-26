import React from "react";
import { MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formRegister.scss';
import { register } from '../functions/userFunctions';

class FormRegister extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName:'',
      email:'',
      password:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e){
    e.preventDefault()

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  };
  render() {
    return (
    <MDBContainer className="form" noValidate onSubmit={this.onSubmit}>
      <MDBInputGroup 
        containerClassName="mb-3 mt-3"
        prepend="Nom et Prénom"
        value={this.state.firstName}  
        onChange={this.onChange}
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
        inputs={
          <>
            <MDBInput noTag type="text" hint="Carte d'identité" />
          </>          
        }        
      />

<MDBInputGroup       
        containerClassName="mb-3 mt-3"
        prepend="Email"
        value={this.state.email}
        onChange={this.onChange}
        inputs={
          <>
            <MDBInput noTag type="text" hint="Email" />
          </>          
        }        
      />

<MDBInputGroup
        containerClassName="mb-3 mt-3"
        prepend="Mot de passe"
        value={this.state.password}
        onChange={this.onChange}
        inputs={
          <>
            <MDBInput noTag type="text" hint="Mot de passe" />
          </>          
        }        
      />
       <ButtonSubmit onCange={this.onSubmit}/>
    </MDBContainer> 
   
    );
  }
};

export default FormRegister;