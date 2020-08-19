import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, FilledInput, Button, InputLabel } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const columns = [
  { title: "ID", field: "id" },
  { title: "Nom", field: "firstName" },
  { title: "Prénom", field: "lastName" },
  { title: "Téléphone", field: "telephone" }
];


const useStyles = makeStyles((theme) => ({

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
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))

function Leads() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [insertModal, setInsertModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedClient, setClientSelected] = useState({
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
    branchOffice: "",
    addressBank: "",
    cityBank: "",
    stateBank: "",
    postalCodeBank: "",
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
    description: "",
    type: "",
    typeSeries: "",
    body: "",
    energy: "",
    power: "",
    places: "",
    grossWeight: "",
    mma: "",
    payload: "",
    tara: "",
    previousNumber: "",
    firstRegistration: "",
    dateManufacture: "",
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setClientSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const getRequest = async () => {
    await axios.get("http://localhost:9000/leads")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const insertRequest = async () => {
    await axios.post("http://localhost:9000/leads")
      .then(response => {
        setData(data.concat(response.data));
        openCloseInsertModal();
      }).catch(error => {
        console.log(error);
      })
  }

  const deleteRequest = async () => {
    await axios.delete("http://localhost:9000/leads")
      .then(response => {
        setData(data.filter(client => client.id !== selectedClient.id));
        openCloseDeleteModal();
      }).catch(error => {
        console.log(error);
      })
  }

  const clientSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseInsertModal()
      :
      openCloseDeleteModal()
  }

  const openCloseInsertModal = () => {
    setInsertModal(!insertModal);
  }

  const openCloseDeleteModal = () => {
    setDeleteModal(!deleteModal);
  }

  useEffect(() => {
    getRequest();
  }, [])

  const insertBody = (
    <div className={styles.modal}>
      <h3>Insérer le client</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        ID
        </InputLabel>
      <FilledInput
        multiline variant="outlined"
        placeholder="ID"
        className={styles.inputMaterial}
        name="id"
        onChange={handleChange}
        value={selectedClient && selectedClient.id}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Document National d'Identité
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Document National d'Identité"
        name="card"
        onChange={handleChange}
        value={selectedClient && selectedClient.card}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Traitement
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Traitement"
        name="treatment"
        onChange={handleChange}
        value={selectedClient && selectedClient.treatment}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Nom
        </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Nom"
        name="firstName"
        onChange={handleChange}
        value={selectedClient && selectedClient.firstName}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Prénom
        </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Prénom"
        name="lastName"
        onChange={handleChange}
        value={selectedClient && selectedClient.lastName}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Téléphone
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Téléphone"
        name="telephone"
        onChange={handleChange}
        value={selectedClient && selectedClient.telephone}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Courrier Électronique
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Courrier Électronique"
        name="email"
        onChange={handleChange}
        value={selectedClient && selectedClient.email}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Allée/Rue/Avenue
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Allée/Rue/Avenue"
        name="address"
        onChange={handleChange}
        value={selectedClient && selectedClient.address}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Ville
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Ville"
        name="city"
        onChange={handleChange}
        value={selectedClient && selectedClient.city}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Wilaya
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Wilaya"
        name="state"
        onChange={handleChange}
        value={selectedClient && selectedClient.state}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Code Postal
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Code Postal"
        name="postalCode"
        onChange={handleChange}
        value={selectedClient && selectedClient.postalCode}
      />
      <br /><br />

      <h3>Insérer les Coordonnées Bancaires</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Nom de la Banque
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Nom de la Banque"
        name="nameOfBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.nameOfBank}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Nº de compte
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Nº de compte"
        name="numberOfBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.numberOfBank}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Intitulé du compte
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Intitulé du compte"
        name="accountName"
        onChange={handleChange}
        value={selectedClient && selectedClient.accountName}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        IBAN
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="IBAN"
        name="iban"
        onChange={handleChange}
        value={selectedClient && selectedClient.iban}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Code BIC rapide
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Code BIC rapide"
        name="swiftCode"
        onChange={handleChange}
        value={selectedClient && selectedClient.swiftCode}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Sucursale
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Sucursale"
        name="branchOffice"
        onChange={handleChange}
        value={selectedClient && selectedClient.branchOffice}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Allée/Rue/Av
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Allée/Rue/Av"
        name="addressBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.addressBank}
      />
      <br />
      <InputLabel htmlFor="filled-adornment-amount"
      >
        Ville
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Ville"
        name="cityBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.cityBank}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Wilaya
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Wilaya"
        name="stateBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.stateBank}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Code Postal
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Code Postal"
        name="postalCodeBank"
        onChange={handleChange}
        value={selectedClient && selectedClient.postalCodeBank}
      />
      <br /><br />
      <h3>Insérer le Véhicule</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Marque
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Marque"
        name="brandId"
        onChange={handleChange}
        value={selectedClient && selectedClient.brandId}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Modèle
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Modèle"
        name="modelId"
        onChange={handleChange}
        value={selectedClient && selectedClient.modelId}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Combustible
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Combustible"
        name="fuel"
        onChange={handleChange}
        value={selectedClient && selectedClient.fuel}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Voiture choisie dans le catalogue IV3A (Immatriculation de la voiture)
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Voiture choisie dans le catalogue IV3A (Immatriculation de la voiture)"
        name="carCatalogue"
        onChange={handleChange}
        value={selectedClient && selectedClient.carCatalogue}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Prix (Voiture choisie dans le catalogue IV3A)
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Prix(Voiture choisie dans le catalogue IV3A)"
        name="price1"
        onChange={handleChange}
        value={selectedClient && selectedClient.price1}
      />
      <br />
      <InputLabel htmlFor="filled-adornment-amount"
      >
        Voiture object de la commande (Immatriculation de la voiture)
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Voiture object de la commande (Immatriculation de la voiture)"
        name="carOrder"
        onChange={handleChange}
        value={selectedClient && selectedClient.carOrder}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Prix (Voiture object de la commande)
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Prix (Voiture object de la commande)"
        name="price2"
        onChange={handleChange}
        value={selectedClient && selectedClient.price2}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Nº de chassis
      </InputLabel>
      <TextField multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Nº de chassis"
        name="serialNumber"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.serialNumber}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Genre
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Genre"
        name="description"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.description}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Marque
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Marque"
        name="brand"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.brand}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Modèle
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Modèle"
        name="model"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.model}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Combustible (diesel ou essence)
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Combustible (diesel ou essence)"
        name="fuel"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.fuel}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Type??
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Type??"
        name="type"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.type}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Nº dans la serie du type??
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Nº dans la serie du type??"
        name="typeSeries"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.typeSeries}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Carrosserie
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Carrosserie"
        name="body"
        onChange={handleChange}
        alue={selectedClient &&
          selectedClient.body}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Energie??
      </InputLabel>
      <TextField
        multiline variant="outlined" c
        lassName={styles.inputMaterial}
        placeholder="Energie??"
        name="energy"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.energy}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Puissance
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Puissance"
        name="power"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.power}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Places assises
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Places assises"
        name="places"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.places}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Poids total en charge
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Poids total en charge"
        name="grossWeight"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.grossWeight}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount">MMA</InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="MMA"
        name="mma"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.mma}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Charge utile
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Charge utile"
        name="payload"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.payload}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Tara
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Tara"
        name="tara"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.tara}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Précédent numéro
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Précédent numéro"
        name="previousNumber"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.previousNumber}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Première mise en circulation
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Première mise en circulation"
        name="firstRegistration"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.firstRegistration}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Date de fabrication
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Date de fabrication"
        name="dateManufacture"
        onChange={handleChange}
        value={selectedClient &&
          selectedClient.dateManufacture}
      />
      <br /><br />
      <div align="right">
        <Button
          variant="contained"
          size="small"
          color="link"
          onClick={() =>
            insertRequest()}
        >
          Enregistrer
          </Button>
        <br />
        <Button
          variant="contained"
          size="small"
          color="link"
          onClick={() =>
            openCloseInsertModal()}
        >
          Annuler
          </Button>
        <br />
      </div>
    </div>
  )
  const deleteBody = (
    <div className={styles.modal}>
      <p>Êtes-vous sûr de vouloir supprimer le client <b>
        {selectedClient && selectedClient.id}
      </b>? </p>
      <div align="right">
        <Button
          variant="contained"
          size="small"
          color="link"
          disableRipple onClick={() =>
            deleteRequest()}
        >
          Oui
          </Button>
          <br/>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() =>
            openCloseDeleteModal()}
        >
          Non
          </Button>
      </div>
    </div>
  )

  return (
    <div className="Leads">
      <br /><br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Les prospect"
        actions={[
          {
            icon: 'add',
            tooltip: 'Insérer le Client',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Edit")
          },
          {
            icon: 'delete',
            tooltip: 'Supprimer la base de données client',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Delete")
          }
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: "Actions"
          }
        }}
        style={{
          color: 'white',
          backgroundColor: '#036435'
        }}
      />
      <Modal
        open={insertModal}
        onClose={openCloseInsertModal}>
        {insertBody}
      </Modal>

      <Modal
        open={deleteModal}
        onClose={openCloseDeleteModal}>
        {deleteBody}
      </Modal>
    </div>
  )
}

export default Leads;
