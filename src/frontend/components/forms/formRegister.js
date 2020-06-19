import React from "react";
import {MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formRegister.scss';

class FormRegister extends React.Component {
  render() {
    return (
    <MDBContainer className="form">
      <MDBInputGroup 
        containerClassName="mb-3 mt-3"
        prepend="Nom et Prénom"
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

export default FormRegister;