import React from "react";
import axios from 'axios';
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

  onSubmitHandler = e => {
	e.preventDefault()
	console.log(this.state)
	axios
		.post('http://localhost:9000/register', this.state, {headers:{"Content-Type": "application/json"}})
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
			<div>
				<form onSubmit={this.onSubmitHandler} action="http://localhost:9000/register" method="post">
					<div>
						<input 
							className="mb-3 mt-3"
							type="text"
							name="firstName"
							placeholder="firstName"
							value={firstName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="lastName"
							placeholder="lastName"
							value={lastName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="idCard"
							placeholder="idCard"
							value={idCard}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
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
							type="text"
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

export default FormRegister;


