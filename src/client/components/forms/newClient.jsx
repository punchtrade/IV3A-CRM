import React from 'react';
import axios from 'axios';
import '../../styles/formClient.scss';
import { withRouter } from 'react-router-dom';

class NewClient extends React.Component {
    constructor() {
        super() 
        this.state = {
            id: '',
            card:'',
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
      this.props.history.push('/newClient');
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
      const { id, card, treatment, firstName, lastName, 
        telephone, email, address, city, state, postalCode, 
        nameOfBank, numberOfBank, accountName, iban, 
        swiftCode, branchOffice, addressBank, cityBank, 
        stateBank, postalCodeBank} = this.state
        return (         
          <div>
            <div><h5>Fiche Client Données</h5></div>
            <form className="form-client" 
                  onSubmit={this.onSubmitHandler.bind(this)} 
                  action="http://localhost:9000/newClient" 
                  value="submit" 
                  method="post">

              <div className="left-column">
                <input
                  className="mb-3 mt-3 col-3"
                  type="text"
                  name="id"
                  placeholder="Nº"
                  value={id}
                  onChange={this.changeHandler}
              />   
              </div>
              <div className="left-column">
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="card"
                  placeholder="Document National d’Idenité - DNI No: IDDZA"
                  value={card}
                  onChange={this.changeHandler}
              />
              </div> 
                <div className="right-column">
                  <input
                    className="mb-3 mt-3"
                    type="text"
                    name="treatment"
                    placeholder="Traitment"
                    value={treatment}
                    onChange={this.changeHandler}
                />   
                </div> 
                  <div className="left-column">
                    <input
                      className="mb-3 mt-3"
                      type="text"
                      name="firstName"
                      placeholder="Nom"
                      value={firstName}
                      onChange={this.changeHandler}
                  />   
                  </div> 
                    <div className="right-column">
                    <input
                      className="mb-3 mt-3"
                      type="text"
                      name="lastName"
                      placeholder="Prénom"
                      value={lastName}
                      onChange={this.changeHandler}
                  />   
                  </div> 
                    <div className="left-column"> 
                      <input
                        className="mb-3 mt-3"
                        type="text"
                        name="telephone"
                        placeholder="Téléphone"
                        value={telephone}
                        onChange={this.changeHandler}
                    />   
                    </div> 
                    <div className="right-column">
                      <input
                        className="mb-3 mt-3"
                        type="text"
                        name="email"
                        placeholder="Courrier électronique"
                        value={email}
                        onChange={this.changeHandler}
                    />   
                    </div> 
                      <div className="left-column">
                        <input
                          className="mb-3 mt-3"
                          type="text"
                          name="address"
                          placeholder="Allée/Rue/Avenue"
                          value={address}
                          onChange={this.changeHandler}
                      />   
                      </div> 
                        <div className="right-column">
                          <input
                            className="mb-3 mt-3"
                            type="text"
                            name="city"
                            placeholder="Ville"
                            value={city}
                            onChange={this.changeHandler}
                        />   
                        </div> 
                          <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="state"
                              placeholder="Wilaya"
                              value={state}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                          <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="postalCode"
                              placeholder="Code Postal"
                              value={postalCode}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div><h6>Coordonnées Bancaires <br></br>
                          (Détails du compte)</h6></div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="nomdelaBanque"
                              placeholder="Nom de la Banque"
                              value={nameOfBank}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="numberOfBank"
                              placeholder="Nº de compte"
                              value={numberOfBank}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="accountName"
                              placeholder="Intitulé du compte:"
                              value={accountName}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="iban"
                              placeholder="IBAN:"
                              value={iban}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="swiftCode"
                              placeholder="Swift BIC Code:"
                              value={swiftCode}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="branchOffice"
                              placeholder="Sucursale:"
                              value={branchOffice}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="addressBank"
                              placeholder="Allée/Rue/Av:"
                              value={addressBank}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="cityBank"
                              placeholder="Ville:"
                              value={cityBank}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="stateBank"
                              placeholder="Wilaya:"
                              value={stateBank}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        <div className="right-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="postalCodeBank"
                              placeholder="Code Postal:"
                              value={postalCodeBank}
                              onChange={this.changeHandler}
                          />   
                        </div>
                    <button type="submit" value="submit" onClick={this.onSubmitHandler.bind(this)}>Envoyer</button>
                    <button className="button-pre-order"type="submit" value="submit">Pre-commande</button>
                    <button className="button-scans"type="submit" value="submit">Scans de la documentation</button>

            </form>
          </div>
        )
    }

}

export default withRouter(NewClient);