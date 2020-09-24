import React from "react";
import axios from "axios";
// import NavbarDashboard from '../header/navbarDashboard';
import { TextField, FilledInput, Button, InputLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";




const styles = makeStyles((theme) => ({

  modal: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #036435',
    boxShadow: theme.shadows[7],
    padding: theme.spacing(3, 5, 3),
    margin: theme.spacing(1),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    height: '93%',
    display: 'block',
  },
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const value = ["oui", "non"];
const value2 = ["oui", "non"];
const value3 = ["oui", "non"];
const value4 = ["diesel", "essence"];

class NewClient extends React.Component {
  constructor() {
    super();
    this.state = {
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
      comment: "",
      bankAccount: "",
      bankAccount2: "",
      bankAccount3: "",
      errors: "",
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isValidName", (string) => /[a-zA-Z \u00E0-\u00FC]{1,20}/g.test(string));
  }

  handleChange = (event) => {
    this.setState({
      bankAccount: event.target.value,
    });
  }

  handleChange2 = (event) => {
    this.setState({
      bankAccount2: event.target.value
    });
  }
  handleChange3 = (event) => {
    this.setState({
      bankAccount3: event.target.value
    });
  }

  handleChange4 = (event) => {
    this.setState({
      fuel: event.target.value
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/clients", this.state, {
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
      _id,
      card,
      treatment,
      firstName,
      lastName,
      telephone,
      email,
      address,
      city,
      postalCode,
      nameOfBank,
      iban,
      swiftCode,
      carCatalogue,
      price1,
      brand,
      model,
      fuel,
      comment,
      bankAccount,
      bankAccount2,
      bankAccount3,
    } = this.state;
    return (
      <div>
        <div>
          {/* <h5>Fiche Client</h5> */}
        </div>
        <br />
        <h6>
          Données Client <br />
        </h6>
        <ValidatorForm
          className={styles.root} validate autoComplete="on"
          onSubmit={this.onSubmitHandler.bind(this)}
          action="http://localhost:9000/newClient"
          value="submit"
          method="post"
        >
          {/* <InputLabel
            htmlFor="filled-adornment-amount"
          >
            ID
        </InputLabel>
          <FilledInput
            variant="filled"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="_id"
            placeholder="Client"
            value={_id}
            onChange={this.changeHandler}
          /> */}
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Traitement
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="treatment"
            placeholder="Traitement"
            value={treatment}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Nom
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="firstName"
            placeholder="Nom"
            value={firstName}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Prénom
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="lastName"
            placeholder="Prénom"
            value={lastName}
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
            Téléphone
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="telephone"
            placeholder="Téléphone"
            value={telephone}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Courrier électronique
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="email"
            placeholder="Courrier électronique"
            value={email}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Adresse complète
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="address"
            placeholder="Adresse complète"
            value={address}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Ville/Wilaya
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="city"
            placeholder="Ville/Wilaya"
            value={city}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Code Postal
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="postalCode"
            placeholder="Code Postal"
            value={postalCode}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <div>
            <br />
            <div className="line">
            </div>
            <h6>
              Coordonnées Bancaires <br></br>
              (Détails du compte)
            </h6>
          </div>
          <InputLabel
            id="demo-simple-select-outlined-label"
          >
            Avez-vous un compte Bancaire en devises?
            </InputLabel>
          <RadioGroup aria-label="Avez-vous un compte Bancaire en devises" name="compte1" value={value} onChange={this.handleChange}>
            <FormControlLabel value="oui" checked={this.state.bankAccount === "oui"} control={<Radio />} onChange={this.handleChange} label="Oui" />
            <FormControlLabel value="non" checked={this.state.bankAccount === "non"} control={<Radio />} onChange={this.handleChange} label="Non" />
          </RadioGroup>
          <InputLabel
            id="demo-simple-select-outlined-label"
          >
            Souhaitez-vous ouvrir ce compte auprés de notre banque partenaire?
            </InputLabel>
          <RadioGroup aria-label="Avez-vous un compte Bancaire en devises" name="compte2" value={value2} onChange={this.handleChange2}>
            <FormControlLabel value="oui" checked={this.state.bankAccount2 === "oui"} control={<Radio />} onChange={this.handleChange2} label="Oui" />
            <FormControlLabel value="non" checked={this.state.bankAccount2 === "non"} control={<Radio />} onChange={this.handleChange2} label="Non" />
          </RadioGroup>
          <InputLabel
            id="demo-simple-select-outlined-label"
          >
            Souhaitez-vous financer un achat de devisses (prêt bancaire)?
            </InputLabel>
          <RadioGroup aria-label="Avez-vous un compte Bancaire en devises" name="compte3" value={value3} onChange={this.handleChange3}>
            <FormControlLabel value="oui" checked={this.state.bankAccount3 === "oui"} control={<Radio />} onChange={this.handleChange3} label="Oui" />
            <FormControlLabel value="non" checked={this.state.bankAccount3 === "non"} control={<Radio />} onChange={this.handleChange3} label="Non" />
          </RadioGroup>
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Nom de la Banque
              </InputLabel>
          <TextValidator
            variant="outlined"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="nameOfBank"
            placeholder="Nom de la Banque"
            value={nameOfBank}
            onChange={this.changeHandler}
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
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
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
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
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <div>
            <br />
            <div className="line">
            </div>
            <h6>
              Informations sur le véhicule <br></br>
            </h6>
          </div>
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
            id="demo-simple-select-outlined-label"
          >
            Combustible
            </InputLabel>
          <RadioGroup aria-label="Combustible" name="compte3" value={value4} onChange={this.handleChange4}>
            <FormControlLabel value="diesel" checked={this.state.fuel === "diesel"} control={<Radio />} onChange={this.handleChange4} label="Diesel" />
            <FormControlLabel value="essence" checked={this.state.fuel === "essence"} control={<Radio />} onChange={this.handleChange4} label="Essence" />
          </RadioGroup>
          <div className="line">
          </div>
          <InputLabel
            id="demo-simple-select-outlined-label"
          >
            Entrez un commentaire ici
            </InputLabel>
          <TextValidator
            aria-label="empty textarea"
            variant="outlined"
            multiline
            rows={10}
            rowsMax={10}
            margin="normal"
            className={styles.inputMaterial}
            name="comment"
            value={comment}
            onChange={this.changeHandler}
            placeholder="Entrez un commentaire ici"
            validators={["required", "isValidName"]}
            errorMessages={["Ce champ est requis", "Format invalide"]}
          />
          <br />
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

    );
  }
}

export default NewClient;
