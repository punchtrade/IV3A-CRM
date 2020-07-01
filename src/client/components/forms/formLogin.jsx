import React from "react";
import axios from 'axios';
import { MDBContainer, MDBInputGroup, MDBInput } from "mdbreact";
import ButtonSubmit from "../buttons/buttonSubmit";
import '../../styles/formLogin.scss';


class FormLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      method: 'POST'
    }
    
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
    this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
  }

  
  onSubmitHandler() {
    if (!(this.state.email === '' || this.state.password === '')
    && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    axios.post('http://localhost:9000/login', {
        email: this.state.email,
        password: this.state.password
    }).then(res => {
        this.setState({
            token: res.data.token
        });
        const data = {
            token: this.state.token,
            time: new Date().getTime()
        }
        localStorage.setItem('userTokenTime', JSON.stringify(data));
        this.setState({
            redirect: true
          });
    }).catch(err => {
        console.log(err);
    });
  else {
    alert('Veuillez entrer des détails valides');
 }
 
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
  render() {    return (             
    <MDBContainer className="form-login" onSubmit={this.onSubmitHandler.bind(this)}>
      <MDBInputGroup 
        containerClassName="mb-3 mt-3"
        prepend="Email"
        value={this.state.email}
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
        value={this.state.password}
        onChange={this.passwordInputChangeHandler} required
        inputs={
          <>
            <MDBInput noTag type="text" hint="Mot de passe" />
          </>          
        }        
      />
       <ButtonSubmit onClick={this.onSubmitHandler} type="button"/>
    </MDBContainer> 
    );
  }
}

export default FormLogin;