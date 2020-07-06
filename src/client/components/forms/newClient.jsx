import React from 'react';
import axios from 'axios';

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
            state: '',
            postalCode: '',
            errors: ''
        }
    }

    changeHandler = e => {
      this.setState({ [e.target.name] : e.target.value })
    }

    onSubmitHandler = e => {
      e.preventDefault()
      console.log(this.state)
      axios
            .post('http://localhost:9000/newClient', this.state, {headers:{"Content-Type": "application/json"}})
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
    }
    render() {
      const { id, treatment, firstName, lastName, telephone, email, address, city, state, postalCode } = this.state
        return (
          <div>
            <form className="form-client" onSubmit={this.onSubmitHandler} action="http://localhost:9000/newClient" method="post">
              <div>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="id"
                  placeholder="id"
                  value={id}
                  onChange={this.changeHandler}
              />   
              </div> 
                <div>
                  <input
                    className="mb-3 mt-3"
                    type="text"
                    name="treatment"
                    placeholder="Treatment"
                    value={treatment}
                    onChange={this.changeHandler}
                />   
                </div> 
                  <div>
                    <input
                      className="mb-3 mt-3"
                      type="text"
                      name="firstname"
                      placeholder="FirstName"
                      value={firstName}
                      onChange={this.changeHandler}
                  />   
                  </div> 
                    <div>
                    <input
                      className="mb-3 mt-3"
                      type="text"
                      name="lastname"
                      placeholder="LastName"
                      value={lastName}
                      onChange={this.changeHandler}
                  />   
                  </div> 
                    <div>
                      <input
                        className="mb-3 mt-3"
                        type="text"
                        name="telephone"
                        placeholder="Téléphone"
                        value={telephone}
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
                          name="address"
                          placeholder="Allée/Rue/Avenue"
                          value={address}
                          onChange={this.changeHandler}
                      />   
                      </div> 
                        <div>
                          <input
                            className="mb-3 mt-3"
                            type="text"
                            name="city"
                            placeholder="Ville"
                            value={city}
                            onChange={this.changeHandler}
                        />   
                        </div> 
                          <div>
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="state"
                              placeholder="Wilaya"
                              value={state}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                          <div>
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="postalCode"
                              placeholder="Code Postal"
                              value={postalCode}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                    <button type="submit">Submit</button>
            </form>
          </div>
        )
    }

}

export default NewClient;