import React from 'react';

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
    render() {
      const { id, treatment, firstName, lastName, telephone, email, address, city, state, postalCode }
        return (
          <div>
            <form className="form-client" onSubmit="" action="" method="">
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