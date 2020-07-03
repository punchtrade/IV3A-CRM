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

  // async componentDidMount(){
  //   const res = await axios.get('http://localhost:3000/register');
  //   this.setState({ users: res.data });
  //   console.log(this.state.users)
  // }

  changeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmitHandler =  (e) => {
    e.preventDefault();
    console.log(this.state)

  const sendData = async () => {
   await axios
          .post("http://localhost:3000/api/register", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            idCard: this.state.idCard,
            email: this.state.email,
            password: this.state.password,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error, error.response)
          })
    }
  }
  render() {
      const { firstName, lastName, idCard, email, password } = this.state
        return (
        <MDBContainer className="form" onSubmit={this.onSubmitHandler}>
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
          <MDBBtn onClick={this.onSubmitHandler} type="button" color="green"/>
        </MDBContainer> 
      
        );
      }
    };

export default FormRegister;