import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, InputLabel, FilledInput, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));

function PreOrder(props) {

  const [data, setData] = useState([]);
  const [selectedClient, setClientSelected] = useState({
    date: "",
    _id: "",
    card: "",
    treatment: "",
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    nameOfBank: "",
    iban: "",
    swiftCode: "",
    carCatalogue: "",
    price1: "",
    brand: "",
    model: "",
    fuel: "",
    carOrder: "",
    brandId: "",
    modelId: "",
    fuelId: "",
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setClientSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  //   getClient = async () => {
  //   await axios.all([
  //       axios.get("http://localhost:9000/preOrder/clients"),
  //       axios.get("http://localhost:9000/preOrder/carClient")
  //     ])    
  //       .then(axios.spread((response) => {
  //         console.log(response);
  //         const data = response.data;
  //         this.setState({
  //           date: data.date,
  //            _id: data._id,
  //           card: data.card,
  //           treatment: data.treatment,
  //           firstName: data.firstName,
  //           lastName: data.lastName,
  //           telephone: data.telephone,
  //           email: data.email,
  //           address: data.address,
  //           city: data.city,
  //           postalCode: data.postalCode,
  //           nameOfBank: data.nameOfBank,
  //           iban: data.iban,
  //           swiftCode: data.swiftCode,
  //           carCatalogue: data.carCatalogue,
  //           brand: data.brand,
  //           model: data.model,
  //           fuel: data.fuel,
  //           price1: data.price1,
  //           carOrder: data.carOrder,
  //           brandId: data.brandId,
  //           fuelId: data.fuelId,
  //           modelId: data.modelId,
  //           price2: data.price2,
  //           });

  //         console.log("Data has been received!!");
  //       }))
  //       .catch(() => {
  //         alert("Error retrieving data!!");
  //       })
  //   }

  const getRequest = async () => {
    await axios.get("http://localhost:9000/preOrder/clients")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    getRequest();
  }, [])

  return (
    <div className={styles.inputMaterial}>
      <br /><br />
      {/* <h5>Commande ferme de Véhicule</h5> */}
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
        </div>
      </div>
      <div className="container-form">
        <form
          className="client"
          onSubmit={handleChange}
          action="http://localhost:9000/preOrder"
          value="submit"
          method="post"
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
            value={selectedClient && data.date}
            onChange={handleChange}
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
            name="_id"
            placeholder="ID"
            value={selectedClient && data._id}
            onChange={handleChange}
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
            value={selectedClient && data.treatment}
            onChange={handleChange}
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
            value={selectedClient && data.firstName}
            onChange={handleChange}
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
            value={selectedClient && data.lastName}
            onChange={handleChange}
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
            value={selectedClient && data.card}
            onChange={handleChange}
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
            value={selectedClient && data.telephone}
            onChange={handleChange}
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
            value={selectedClient && data.email}
            onChange={handleChange}
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
            value={selectedClient && data.address}
            onChange={handleChange}
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
            value={selectedClient && data.city}
            onChange={handleChange}
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
            value={selectedClient && data.postalCode}
            onChange={handleChange}
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
              value={selectedClient && data.nameOfBank}
              onChange={handleChange}
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
              value={selectedClient && data.iban}
              onChange={handleChange}
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
              value={selectedClient && data.swiftCode}
              onChange={handleChange}
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
              name="carCatalogue"
              placeholder=" Immatriculation"
              value={selectedClient && data.carCatalogue}
              onChange={handleChange}
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
                name="price1"
                placeholder="Voiture choisie dans le catalogue IV3A"
                value={selectedClient && data.price1}
                onChange={handleChange}
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
              value={selectedClient && data.brand}
              onChange={handleChange}
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
              value={selectedClient && data.model}
              onChange={handleChange}
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
              value={selectedClient && data.fuel}
              onChange={handleChange}
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
      <br />
      <Button
        variant="outlined"
        size="large"
        color="default"
        disabledElevation
        onClick={handleChange}
      >
        Envoyer
          </Button>
    </div >


  )
}

export default PreOrder;
