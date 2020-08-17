import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class PreOrder extends Component {
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
      nameOfBank: "",
      numberOfBank: "",
      accountName: "",
      iban: "",
      swiftCode: "",
      registrationCar: "",
      brand: "",
      model: "",
      fuel: "",
      errors: "",
      i_agree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ i_agree: !this.state.i_agree });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };
  onSubmitHandler = async (e) => {
    e.preventDefault();
  await  axios
      .get("http://localhost:9000/preOrder", this.state, {
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
      registrationCar,
      brand,
      model,
      fuel,
    } = this.state;
    return (
      <div>
        <h5>Pré-Commande de Véhicule</h5>
        <div className="container">
          <div className="text-info" type="text">
            <br></br>
            Vous souhaitez profiter des nouvelles dispositions de l'Article 110
            de la Loi de Finances pour 2020 qui vous autorise à acheter, une
            fois tous les 3 ans, à l'Étranger, depuis votre compte en Devises, à
            Titre Personnel, un Véhicule Particulier de moins de 3 ans.
            <br></br>
            1. Vous avez identifié le véhicule que vous souhaiteriez acheter sur
            notre site web www.iv3a.com.
            <br></br>
            2. Vous devez maintenant renseigner intégralement le formulaire
            ci-dessous en y indiquant la totalité des données personnelles
            requises pour une pré-commande.
            <br></br>
            3. Merci d'y reporter également les références, soit
            l'immatriculation, la valeur catalogue (1), la marque, le modèle et
            le combustible du véhicule que vous avez choisi.
            <br></br>
            (1) Valeur catalogue IV3A = prix d'achat non négociable net (de tous
            frais de transferts bancaires à votre charge) du véhicule, paiment
            100% à la commande, à notre partenaire européen, par virement
            bancaire depuis votre compte en Euros.
            <br></br>
            Vous devez prévoir les coûts additionnels de transport, douanes
            (15%), TVA (19%), immatriculation et coût de nos services
            d'accompagnement en Algérie.
            <br></br>
            Si le véhicule choisi est toujours disponible, IV3A vous confirmera
            alors votre commande.
            <br></br>
            Au cas où le véhicule choisi aurait déjà été vendu (la demande est
            importante et nous actualisons notre catalogue chaques 24 heures),
            IV3A lancera alors la recherche d'un véhicule similaire à celui que
            vous souhaitez acquérir, et vous fera une offre dans les 24 heures.
          </div>
        </div>
        <div className="container-form">
          <form
            className="client"
            onSubmit={this.onSubmitHandler.bind(this)}
            action="http://localhost:9000/preOrder"
            value="submit"
            method="get"
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
            <div className="details-bank">
              <h6>
                Vos Coordonnées Bancaires
                <br></br>
                <br></br>
              </h6>
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
              <label type="text" name="iban">
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
              Swift BIC Code:
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
            </div>
            <div className="details-car">
              <h6>
                Référence du véhicule choisi sur www.iv3a.com
                <br></br>
                <br></br>
              </h6>
              <div align="left">
              <label type="text" name="registrationCar">
              Matricule:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="registrationCar"
                  placeholder="Matricule"
                  value={registrationCar}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
              <label type="text" name="brand">
              Marque:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="brand"
                  placeholder="Marque"
                  value={brand}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
              <label type="text" name="model">
              Modèle:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="model"
                  placeholder="Modèle"
                  value={model}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
              <label type="text" name="fuel">
              Combustible:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="fuel"
                  placeholder="Combustible"
                  value={fuel}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </form>

          <div className="container">
            <div className="text-info" type="text">
              <br></br>
              IV3A vous remercie pour ces renseignements que nous maintiendrons
              totalement confidentiels tout au long de la durée de notre
              relation.
              <br></br>
              Toutes les données signalées par un * nous sont absolument
              indispensables pour lancer le processus d'acquisition.
              <br></br>
              Ce processus sera inicié par la signature de votre part de la
              commande définitive et du contrat de services d'assitance d'IV3A à
              l'importation de ce véhicule, que nous vous ferons parvenir sous
              24 heures et nécessite également que vous nous fournissiez
              préalablement:
              <br></br>• un scan de votre document national d'identité (DNI).
              <br></br>• un scan de votre facture (datant de moins de 3 mois) de
              consommation de l'Electricité et du Gaz.
              <br></br>• un scan de votre relevé d'identité bancaire de votre
              compte en Euros.
              <br></br>
            </div>
          </div>
        </div>
        <div>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={this.state.i_agree}
              onChange={this.handleChange}
            />{" "}
            <h6>Je remets ma documentation dans les bureaux de IV3A.</h6>
          </label>
        </div>
        <div>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={this.state.i_agree}
              onChange={this.handleChange}
            />{" "}
            <h6>J'envoie ma documentation par la poste à IV3A.</h6>
          </label>
        </div>
        <div>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={this.state.i_agree}
              onChange={this.handleChange}
            />{" "}
            <h6>Je scane et inclue ma documentation à IV3A.</h6>
          </label>
        </div>
        <button
          className="btn btn-primary-green"
          type="submit"
          value="submit"
          onClick={this.onSubmitHandler.bind(this)}
        >
          Envoyer
        </button>
      </div>
    );
  }
}

export default withRouter(PreOrder);
