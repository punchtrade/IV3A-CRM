import React, { Component } from "react";
import axios from "axios";
import { Button, InputLabel, FilledInput } from '@material-ui/core';
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
      firstName: "",
      lastName: "",
      card: "",
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
      errors: "",
    };
  }

  componentDidMount =() => {
    ValidatorForm.addValidationRule("isValidName", (string) => /[a-zA-Z \u00E0-\u00FC]{1,20}/g.test(string));
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = () => {
    this.getClient();
  };

  getClient = () => {
    axios.get("http://localhost:9000/car/client/:_id")
    .then((response) => {
      const data = response.data;
      this.setState({card: data});
      console.log('Data has been recived');
    })
    .catch(() => {
      alert('Error retrievering data!!!');
    });
  }

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
      firstName,
      lastName,
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
    } = this.state;
    return (
      <div className={styles.inputMaterial}>
        <br /><br />
        <h5 className="">Fiche Véhicule</h5>
        <div className="container">
          <div
          >
            <ValidatorForm
              onSubmit={this.onSubmitHandler.bind(this)}
              action='http://localhost:9000/car'
              value="submit"
              method="post"
            >
              <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Nom
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="flastName"
                placeholder="Nom"
                value={lastName}
                onChange={this.changeHandler}
                validators={["required", "isValidName"]}
                errorMessages={["Ce champ est requis", "Format invalide"]}
              />
                            <InputLabel
                htmlFor="filled-adornment-amount"
              >
                Prénom
              </InputLabel>
              <FilledInput
                variant="filled"
                fullWidth
                margin="normal"
                className={styles.inputMaterial}
                name="firstName"
                placeholder="Prénom"
                value={firstName}
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
              <br/>
              <Button
                variant="outlined"
                size="large"
                color="default"
                disabledElevation
                onClick={this.onSubmitHandler.bind(this)}
              >
                Envoyer
          </Button>
            </ValidatorForm>
          </div>
        </div>
      </div>
    );
  }
}
export default FormCar;
