import React from "react";
import axios from 'axios';
import '../../styles/formRegister.scss';
import { withRouter } from 'react-router-dom';

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
	e.preventDefault();
	this.props.history.push('/login');
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
				<form onSubmit={this.onSubmitHandler.bind(this)} action="http://localhost:9000/register" method="post">
					<div>
						<input 
							className="mb-3 mt-3"
							type="text"
							name="firstName"
							placeholder="Nom"
							value={firstName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="lastName"
							placeholder="Prénom"
							value={lastName}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="idCard"
							placeholder="Carte d'identité"
							value={idCard}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="email"
							placeholder="Courrier électronique"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							className="mb-3 mt-3"
							type="text"
							name="password"
							placeholder="Mot de passe"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit" onClick={this.onSubmitHandler.bind(this)}>Envoyer</button>
				</form>
			</div>
		)
	}
}

export default withRouter(FormRegister);


