import React from "react";
import { MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import { login } from '../functions/userFunctions';
import '../../styles/formLogin.scss';


class FormLogin extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if(res) {
        this.props.history.push(`/profile`);
      }
    });
  }
  render() {    return (             
    <MDBContainer className="form-login" noValidate onSubmit={this.onSubmit}>
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
       <ButtonSubmit/>
    </MDBContainer> 
    );
  }
}

export default FormLogin;