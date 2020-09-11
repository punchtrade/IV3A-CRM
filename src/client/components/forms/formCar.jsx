import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Modal, TextField, Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";




const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));
class FormCar extends Component {
  constructor() {
    super();
    this.state = {
      brandId: "",
      modelId: "",
      fuelId: "",
      carCatalogue: "",
      price1: "",
      carOrder: "",
      price2: "",
      brand: "",
      model: "",
      fuel: "",
      serialNumber: "",
      // type: "",
      // typeSeries: "",
      // body: "",
      // power: "",
      // places: "",
      // grossWeight: "",
      // mma: "",
      // payload: "",
      // tara: "",
      // previousNumber: "",
      // firtsRegistration: "",
      // dateManufacture: "",
      errors: "",
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isValidName", (string) => /[a-zA-Z \u00E0-\u00FC]{1,20}/g.test(string));
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/car", this.state, {
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
      brandId,
      modelId,
      fuelId,
      carCatalogue,
      price1,
      carOrder,
      price2,
      brand,
      model,
      fuel,
      serialNumber,
      // description,
      // type,
      // typeSeries,
      // body,
      // power,
      // places,
      // grossWeight,
      // mma,
      // payload,
      // tara,
      // previousNumber,
      // firstRegistration,
      // dateManufacture,
    } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <br /><br />
        <h5 className="">Fiche Véhicule</h5>
        <div className="container">
          <div
          // className="container-form"
          >
            <ValidatorForm
              // className="car-left"
              onSubmit={this.onSubmitHandler.bind(this)}
              action='http://localhost:9000/car'
              value="submit"
              method="post"
            >
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Client
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="id"
                placeholder="Client"
                value={id}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Document National d'Identité
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="card"
                placeholder="Document National d'Identité"
                value={card}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Marque
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="brandId"
                placeholder="Marque"
                value={brandId}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Modèle
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="modelId"
                placeholder="Modèle"
                value={modelId}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Combustible
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="fuelId"
                placeholder="Combustible"
                value={fuelId}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Voiture choisie dans le catalogue IV3A
                (Immatriculation de la voiture)
              </InputLabel>
              <FilledInput
                variant="filled "
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="carCatalogue"
                placeholder="Immatriculation de la voiture"
                value={carCatalogue}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Prix (voiture choisie dans le catalogue IV3A)
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="price1"
                placeholder="Voiture choisie dans le catalogue IV3A"
                value={price1}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <div className="line"></div>
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Marque
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="brand"
                placeholder="Marque"
                value={brand}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Modèle
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="model"
                placeholder="Modèle"
                value={model}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Voiture object de la commande (Immatriculation de la voiture)
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="carOrder"
                placeholder="Immatriculation de la voiture"
                value={carOrder}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Prix (Voiture object de la commande)
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="price2"
                placeholder="Voiture object de la commande"
                value={price2}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              <div className="line">
              </div>
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Nº de chassis
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="serialNumber"
                placeholder=" Nº de chassis"
                value={serialNumber}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Genre
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="description"
                placeholder="Genre"
                value={description}
                onChange={this.changeHandler}
              /> */}
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Combustible (diesel ou essence)
              </InputLabel>
              <TextValidator
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="fuel"
                placeholder="Combustible"
                value={fuel}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                ¿TYPE?
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="type"
                placeholder="Type"
                value={type}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                ¿Nº DANS LA SERIE DU TYPE?
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="typeSeries"
                placeholder="Nº dans la serie du type"
                value={typeSeries}
                onChange={this.changeHandler}
              /> */}
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Carrosserie
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="body"
                placeholder="Carrosserie"
                value={body}
                onChange={this.changeHandler}
              /> */}
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Puissance
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="power"
                placeholder="Puissance"
                value={power}
                onChange={this.changeHandler}
              /> */}
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Places assises
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="places"
                placeholder="Places assises"
                value={places}
                onChange={this.changeHandler}
              /> */}
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Poids total en charge
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="grossWeight"
                placeholder="Poids total en charge"
                value={grossWeight}
                onChange={this.changeHandler}
              /> */}
              {/* <InputLabel
                htmlFor="filled-adornment-amount"
              >
                MMA
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="mma"
                placeholder="MMA"
                value={mma}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Charge utile
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="payload"
                placeholder="Charge utile"
                value={payload}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                 Tara
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="tara"
                placeholder="Tara"
                value={tara}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Précédent numéro
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="previousNumber"
                placeholder="Précédent numéro"
                value={previousNumber}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Première mise en circulation
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="firstRegistration"
                placeholder="Première mise en circulation"
                value={firstRegistration}
                onChange={this.changeHandler}
              />
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Date de fabrication
              </InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="dateManufacture"
                placeholder="Date de fabrication"
                value={dateManufacture}
                onChange={this.changeHandler}
              /> */}
              <Button
                variant="contained"
                size="large"
                color="default"
                disabledElevation
                onClick={this.onSubmitHandler.bind(this)}
              >
                Envoyer
          </Button>
          <br/>
              <Button
                variant="contained"
                position="left"
                color="danger"
                fullWidth
                disableFocusRipple
                onClick={() => {
                  this.props.history.push("/dashboard");
                }}
              >
                Panel
          </Button>
          <br/>
            </ValidatorForm>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(FormCar);
