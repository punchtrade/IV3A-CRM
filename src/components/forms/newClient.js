import React from 'react';
import { MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";

class NewClient extends React.Component {
    constructor() {
        super() 
        this.state = {
            id: '',
            treatment: '',
            firstName: '',
            lastName: '',
            telephone: '',
            email: '',
            address: '',
            city: '',
            province: '',
            postalCode: '',
            errors: ''
        }
    }
    render() {
        return (
        <MDBContainer className="form-client">
            <MDBInputGroup
                containerClassName="mb-3 mt-3 right"
                prepend="Nº"
                value={this.state.first_name}  
                onChange={this.onChange}
                inputs={
                <>
                    <MDBInput noTag type="text" hint="Nº" /> 
                </>
                }
            />    
                <MDBInputGroup
                containerClassName="mb-3 mt-3 left"
                prepend="Traitment"
                value={this.state.first_name}  
                onChange={this.onChange}
                inputs={
                <>
                    <MDBInput noTag type="text" hint="Traitment" /> 
                </>
                }
            />     
              <MDBInputGroup 
                containerClassName="mb-3 mt-3 left"
                prepend="Nom et Prénom"
                value={this.state.first_name}  
                onChange={this.onChange}
                inputs={
          <>
            <MDBInput noTag type="text" hint="Nom" />
            <MDBInput noTag type="text" hint="Prénom" />
          </> 
                 
        }        
      />    
              <MDBInputGroup 
                containerClassName="mb-3 mt-3 left"
                prepend="Téléphone et Email"
                value={this.state.first_name}  
                onChange={this.onChange}
                inputs={
          <>
            <MDBInput noTag type="text" hint="Téléphone" />
            <MDBInput noTag type="text" hint="Email" />
          </> 
                 
        }        
      /> 
              <MDBInputGroup 
                containerClassName="mb-3 mt-3 right"
                prepend="Allée/Rue/Avenue/Ville"
                value={this.state.first_name}  
                onChange={this.onChange}
                inputs={
          <>
            <MDBInput noTag type="text" hint="Allée/Rue/Avenue" />
            <MDBInput noTag type="text" hint="Ville" />
          </> 
                 
        }        
      /> 
        </MDBContainer>
        );
    }

}

export default NewClient;