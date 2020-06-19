import React from "react";
import {MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formLogin.scss';

class FormLogin extends React.Component {
  render() {
    return (             
    <MDBContainer className="form-login">
      <MDBInputGroup 
        containerClassName="mb-3 mt-3"
        prepend="Email"
        inputs={
          <>
            <MDBInput noTag type="text" hint="Email" />
          </>          
        }        
      />
<MDBInputGroup
        containerClassName="mb-3 mt-3"
        prepend="Mot de passe"
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