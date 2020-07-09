import React from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/formLogin.scss';
import { Redirect } from "react-router-dom";
import Dashboard from '../../pages/dashboard';


class FormLogin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      redirect: localStorage.getItem('userTokenTime') ? true : false
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state)
    axios
    .post('http://localhost:9000/login', this.state, {headers:{"Content-Type": "application/json"}})
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  // }
}
  
  render() {   
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
              <button type="submit" onClick={<Redirect to={Dashboard}/>}>Submit</button>
          </form>
        </div>  
    )
  }
}

export default FormLogin;