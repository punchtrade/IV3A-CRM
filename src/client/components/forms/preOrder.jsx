import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Modal, TextField, Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));

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
      price: "",
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
    await axios
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
      date,
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
      price,
    } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <br /><br />
        <h5>Commande ferme de Véhicule</h5>
        <br /><br />
        <div className="container">
          <div className="text-info" type="text">
            CONFIRMATION DÉFINITIVE de la commande réalisée par l'intermédiaire de IV3A.com le:
            <br></br>
            Vous souhaitez profiter des nouvelles dispositions de l'Article 110 de
            la Loi de Finances pour 2020 qui vous autorise à acheter,
            une fois tous les 3 ans, à l'Étranger, depuis votre compte en Devises,
            à Titre Personnel, un Véhicule Particulier de moins de 3 ans.
            <br></br>
            1. Vous avez identifié le véhicule que vous souhaitez acheter sur notre site web www.iv3a.com.
            <br></br>
            2. Le présent document incluant les données de votre pré-commande est destiné à:
            a. vous confirmer que le véhicule que vous avez choisi est bien disponible.
            b. éventuellement vous proposer un véhicule équivalent, si celui que vous avez choisi n'est plus disponible.
            <br></br>
            3. Merci de vérifier toutes les données de cette commande FERME ci-dessous
            et de bien vouloir la valider en datant et signant le document.
            (1) Rapp4. Ne pas oublier de  reporter également la mention manuscrite
            "Bon pour Commande".
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
            {/* Si le véhicule choisi est toujours disponible, IV3A vous confirmera
            alors votre commande.
            <br></br>
            Au cas où le véhicule choisi aurait déjà été vendu (la demande est
            importante et nous actualisons notre catalogue chaques 24 heures),
            IV3A lancera alors la recherche d'un véhicule similaire à celui que
            vous souhaitez acquérir, et vous fera une offre dans les 24 heures. */}
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
            <div className="details-client">
              <h6>
                Données client
                <br></br>
                <br></br>
              </h6>
            </div>
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Date de confirmation
      </InputLabel>
            <FilledInput
               variant="outlined"
              margin="normal"
              placeholder="Date de confirmation"
              className={styles.inputMaterial}
              name="date"
              placeholder="Date de confirmation"
              value={date}
              onChange={this.changeHandler}
            />
            <br />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              ID
            </InputLabel>
            <FilledInput
              variant="filled"
              fullWidth
              margin="normal"
              placeholder="ID"
              className={styles.inputMaterial}
              name="id"
              placeholder="ID"
              value={id}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Traitement
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="treatment"
              placeholder="Traitement"
              value={treatment}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Nom
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="firstName"
              placeholder="Nom"
              value={firstName}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Prénom
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="lastName"
              placeholder="Prénom"
              value={lastName}
              onChange={this.changeHandler}
            />
                        <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Document National d'Identité
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="card"
              placeholder="Document National d'Identité"
              value={card}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Téléphone
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="telephone"
              placeholder="Téléphone"
              value={telephone}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Courrier électronique
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="email"
              placeholder="Courrier électronique"
              value={email}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Adresse complète
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="address"
              placeholder="Adresse complète"
              value={address}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Ville/Wilaya
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="city"
              placeholder="Ville/Wilaya"
              value={city}
              onChange={this.changeHandler}
            />
            <InputLabel
              htmlFor="filled-adornment-amount"
            >
              Code Postal
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              className={styles.inputMaterial}
              name="postalCode"
              placeholder="Code Postal"
              value={postalCode}
              onChange={this.changeHandler}
            />
            <div className="line">
            </div>
            <div className={styles.inputMaterial}>
              <h6>
                Vos Coordonnées Bancaires
                <br></br>
                <br></br>
              </h6>
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Nom de la Banque
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="nameOfBank"
                placeholder="Nom de la Banque"
                value={nameOfBank}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                IBAN de votre compte
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="iban"
                placeholder="IBAN de votre compte"
                value={iban}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Swift BIC Code
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="swiftCode"
                placeholder="Swift BIC Code"
                value={swiftCode}
                onChange={this.changeHandler}
              />
            </div>
            <div className="line">
            </div>
            <div className="details-car">
              <h6>
                Référence du véhicule choisi sur www.iv3a.com
                <br></br>
                <br></br>
              </h6>
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Immatriculation
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="registrationCar"
                placeholder=" Immatriculation"
                value={registrationCar}
                onChange={this.changeHandler}
              />
              <div align="left">
                <div className="text-info" type="text">
                  <br></br>
                Valeur catalogue IV3A = prix d'achat net
                (de tous frais de transferts bancaires à votre charge)
                non négociable, du véhicule, paiment 100% à la commande,
                à notre partenaire européen, par virement bancaire depuis
                votre compte en Euros:
                <br></br>
                  <br></br>
                Vous devez prévoir les coûts additionnels de transport,
                douanes (15%), TVA (19%),
                immatriculation et coût du dossier d'accompagnement en Algérie.
                </div>

                <InputLabel
                  htmlFor="filled-adornment-amount"
                >
                  Prix (voiture choisie dans le catalogue IV3A)
            </InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className={styles.inputMaterial}
                  name="price"
                  placeholder="Voiture choisie dans le catalogue IV3A"
                  value={price}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="line">
              </div>
              <div className="details-car">
                <h6>
                  Description du véhicule choisi
                <br></br>
                  <br></br>
                </h6>
              </div>
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Marque
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="brand"
                placeholder="Marque"
                value={brand}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Modèle
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="model"
                placeholder="Modèle"
                value={model}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Combustible
            </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="fuel"
                placeholder="Combustible"
                value={fuel}
                onChange={this.changeHandler}
              />
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
              <br></br>
              • un scan de votre document national d'identité (DNI).
              <br></br>
              • un scan de votre facture (datant de moins de 3 mois) de
              consommation de l'Electricité et du Gaz.
              <br></br>
              • un scan de votre relevé d'identité bancaire de votre
              compte en Euros.              
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary-green"
          type="submit"
          value="submit"
          onClick={this.onSubmitHandler.bind(this)}
        >
          Envoyer
        </button>
        <button
          className="btn btn-primary-green left"
          type="submit"
          value="submit"
          onClick={() => {
            this.props.history.replace("/dashboard");
          }}
        >
          Panel
          </button>
      </div >
    );
  }
}

export default withRouter(PreOrder);
