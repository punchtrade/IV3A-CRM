import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../../styles/formLogin.scss';

class FormLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {},
      token: '',
      redirect: localStorage.getItem('userTokenTime') ? true : false
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }
  
  onSubmitHandler() {
    console.log(this.state);
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
  render() {   
    if (this.state.redirect) return <Redirect to="/home" />;
    const { id, email, password } = this.state 
    return ( 
      <div>  
        <form onSubmit={this.onSubmitHandler} action="http://localhost:9000/login" method="post">       
            <div>
              <input
                className="mb-3 mt-3"
                id={id}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <input
                className="mb-3 mt-3"
                id={id}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>
              <button type="submit">Submit</button>
          </form>
        </div>  
    )
  }
}

export default FormLogin;