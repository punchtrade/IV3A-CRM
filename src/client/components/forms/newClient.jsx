import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class NewClient extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      card: "",
      treatment: "",
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      errors: "",
    };
  }

  changeHandler =  (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
  await  axios
      .post("http://localhost:9000/newClient", this.state, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      id,
      card,
      treatment,
      firstName,
      lastName,
      telephone,
      email,
      address,
      city,
      state,
      postalCode,
      nameOfBank,
      numberOfBank,
      accountName,
      iban,
      swiftCode,
      branchOffice,
      addressBank,
      cityBank,
      stateBank,
      postalCodeBank,
    } = this.state;
    return (
      <div>
        <div>
          <h5>Fiche Client Données</h5>
        </div>
        <form
          className="form-client"
          onSubmit={this.onSubmitHandler.bind(this)}
          action="http://localhost:9000/newClient"
          value="submit"
          method="post"
        >
          <div align="left">
            <label type="text" name="id">
              Nº:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="id"
              placeholder="Nº"
              value={id}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="card">
              Document National d’Idenité - DNI No: IDDZA:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="card"
              placeholder="Document National d’Idenité - DNI No: IDDZA"
              value={card}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="treatment">
              Traitment:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="treatment"
              placeholder="Traitment"
              value={treatment}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="firstName">
              Nom:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="firstName"
              placeholder="Nom"
              value={firstName}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="lastName">
              Prénom:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="lastName"
              placeholder="Prénom"
              value={lastName}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="telephone">
              Téléphone:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="telephone"
              placeholder="Téléphone"
              value={telephone}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="email">
              Courrier électronique:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="email"
              placeholder="Courrier électronique"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="address">
              Allée/Rue/Avenue:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="address"
              placeholder="Allée/Rue/Avenue"
              value={address}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="city">
              Ville:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="city"
              placeholder="Ville"
              value={city}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="state">
              Wilaya:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="state"
              placeholder="Wilaya"
              value={state}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="postalCode">
              Code Postal:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="postalCode"
              placeholder="Code Postal"
              value={postalCode}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <h6>
              Coordonnées Bancaires <br></br>
              (Détails du compte)
            </h6>
          </div>
          <div align="left">
            <label type="text" name="nameOfBank">
              Nom de la Banque:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="nameOfBank"
              placeholder="Nom de la Banque"
              value={nameOfBank}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="numberOfBank">
              Nº de compte:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="numberOfBank"
              placeholder="Nº de compte"
              value={numberOfBank}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="accountName">
              Intitulé du compte:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="accountName"
              placeholder="Intitulé du compte"
              value={accountName}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="IBAN">
              IBAN:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="iban"
              placeholder="IBAN"
              value={iban}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="swiftCode">
              Code BIC rapide:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="swiftCode"
              placeholder="Swift BIC Code"
              value={swiftCode}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="branchOffice">
              Sucursale:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="branchOffice"
              placeholder="Sucursale"
              value={branchOffice}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="addressBank">
              Allée/Rue/Av:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="addressBank"
              placeholder="Allée/Rue/Av"
              value={addressBank}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="cityBank">
              Ville:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="cityBank"
              placeholder="Ville"
              value={cityBank}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="stateBank">
              Wilaya:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="stateBank"
              placeholder="Wilaya"
              value={stateBank}
              onChange={this.changeHandler}
            />
          </div>
          <div align="left">
            <label type="text" name="postalCodeBank">
              Code Postal:
                </label>
            <input
              className="mb-3 mt-3"
              type="text"
              name="postalCodeBank"
              placeholder="Code Postal"
              value={postalCodeBank}
              onChange={this.changeHandler}
            />
          </div>
          <button
            className="btn btn-primary-green"
            type="submit"
            value="submit"
            onClick={this.onSubmitHandler.bind(this)}
          >
            Envoyer
          </button>
        </form>
        <button
          className="btn btn-primary-green right"
          type="submit"
          value="submit"
          onClick={() => {
            this.props.history.replace("/preorder");
          }}
        >
          Pre-commande
        </button>
        <button
          className="btn btn-primary-green left"
          type="submit"
          value="submit"
          onClick={() => {
            this.props.history.replace("/upload");
          }}
        >
          Documentation
        </button>
        <button
          className="btn btn-primary-green left"
          type="submit"
          value="submit"
          onClick={() => {
            this.props.history.replace("/formCar");
          }}
        >
          Fiche Véhicule
        </button>
      </div>
    );
  }
}

export default withRouter(NewClient);
