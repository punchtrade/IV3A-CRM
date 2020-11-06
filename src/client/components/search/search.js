import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, InputLabel, FilledInput} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Upload from '../uploadImages/upload';
import Invoice from '../invoice/invoice';
import Contract from '../contract/contract';
import PreOrder from '../forms/preOrder';
import FormCar from '../forms/formCar';
import Crm from '../crm/crm';
import Crm2 from '../crm/crm-2';
import Crm3 from '../crm/crm-3';
import Crm4 from '../crm/crm-4';
import Crm5 from '../crm/crm-5';
import Crm6 from '../crm/crm-6';

const columns = [
  { title: "ID", field: "_id" },
  { title: "Nom", field: "firstName" },
  { title: "Prénom", field: "lastName" },
  { title: "Doc. Identité", field: "card" }
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
  modalUpload: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  },
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    color: "red",
    border: "none",
    alignContent: "left",
    display: "flex"
  },
  button: {
    color: "red",
    border: "none",
    alignContent: "left",
    display: "flex"
  }
}));

var usuario = localStorage.getItem('usuario');

function Search(props) {
  const { history } = props;
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [readModal, setReadModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [crmModal, setCrmModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [preOrderModal, setPreOrderModal] = useState(false);
  const [formCarModal, setFormCarModal] = useState(false);
  const [contractModal, setContractModal] = useState(false);
  const [selectedClient, setClientSelected] = useState({
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
    select: "",
    text: "",
    dueDate: "",
    date: "",
    message: "",
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setClientSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const getRequest = async () => {
    await axios.get("http://localhost:9000/search")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const readRequest = async () => {
    await axios.get("http://localhost:9000/search")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const putRequest = async () => {
    await axios.put("http://localhost:9000/clients")
      .then(response => {
        var newData = data;
        newData.map(client => {
          if (client._id === selectedClient._id) {
            client.card = selectedClient.card;
            client.firstName = selectedClient.firstName;
            client.lastName = selectedClient.lastName;
            client.telephone = selectedClient.telephone;
            client.email = selectedClient.email;
            client.address = selectedClient.address;
            client.city = selectedClient.city;
            client.postalCode = selectedClient.postalCode;
            client.nameOfBank = selectedClient.nameOfBank;
            client.iban = selectedClient.iban;
            client.swiftCode = selectedClient.swiftCode;
            client.carCatalogue = selectedClient.carCatalogue;
            client.price1 = selectedClient.price1;
            client.brand = selectedClient.brand;
            client.model = selectedClient.model;
            client.fuel = selectedClient.fuel;
          }
        });
        setData(newData);
        openCloseEditModal();
      }).catch(error => {
        console.log(error);
      })
  }


  const deleteRequest = async () => {
    await axios.delete("http://localhost:9000/search")
      .then(response => {
        setData(data.filter(client => client.id !== selectedClient.id));
        openCloseDeleteModal();
      }).catch(error => {
        console.log(error);
      })
  }

  const clientSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseEditModal()
      :
      openCloseDeleteModal()
  }

  const uploadClientSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "isFreeAction") ? openCloseReadModal()
      : openCloseUploadModal()
  }

  const crmSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseCrmModal()
      : openCloseCrmModal()
  }

  const preOrderSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openClosePreOrderModal()
    : openClosePreOrderModal()
  }

  const invoiceSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseInvoiceModal()
    : openCloseInvoiceModal()
  }

  const contractSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseContractModal()
    : openCloseContractModal()
  }

  const formCarSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseFormCarModal()
    : openCloseFormCarModal()
  }

  const openCloseReadModal = () => {
    setReadModal(!readModal);
  }

  const openCloseEditModal = () => {
    setEditModal(!editModal);
  }

  const openCloseDeleteModal = () => {
    setDeleteModal(!deleteModal);
  }

  const openCloseUploadModal = () => {
    setUploadModal(!uploadModal);
  }

  const openCloseCrmModal = () => {
    setCrmModal(!crmModal);
  }

  const openClosePreOrderModal = () => {
    setPreOrderModal(!preOrderModal);
  }

  const openCloseInvoiceModal = () => {
    setInvoiceModal(!invoiceModal);
  }

  const openCloseContractModal = () => {
    setContractModal(!contractModal);
  }

  const openCloseFormCarModal = () => {
    setFormCarModal(!formCarModal);
  }

  useEffect(() => {
    getRequest();
  }, [])

  const readBody = (
    <div className={styles.modal}>
      <h3>Information personnel du client</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        ID
    </InputLabel>
      <FilledInput
        multiline variant="outlined"
        placeholder="ID"
        className={styles.inputMaterial}
        name="_id"
        value={selectedClient && selectedClient._id}
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
        value={selectedClient && selectedClient.lastName}
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
        value={selectedClient && selectedClient.card}
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
        value={selectedClient && selectedClient.email}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Adresse compléte
    </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Adresse compléte"
        name="address"
        value={selectedClient && selectedClient.address}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Ville/Wilaya
    </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Ville/Wilaya"
        name="city"
        value={selectedClient && selectedClient.city}
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
        value={selectedClient && selectedClient.postalCode}
      />
      <br /><br />
      <h3>Les Coordonnées Bancaires</h3>
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
        value={selectedClient && selectedClient.nameOfBank}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        IBAN de votre compte
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="IBAN de votre compte"
        name="iban"
        value={selectedClient && selectedClient.iban}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Swift BIC Code
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder=" Swift BIC Code"
        name="swiftCode"
        value={selectedClient && selectedClient.swiftCode}
      />
      <br />
      <br />
      <h3>
        Les informations sur le véhicule <br></br>
      </h3>
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
        value={selectedClient && selectedClient.carCatalogue}
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
        value={selectedClient && selectedClient.price1}
      />
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
        value={selectedClient && selectedClient.brand}
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
        value={selectedClient && selectedClient.model}
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
        value={selectedClient && selectedClient.fuel}
      />
      <InputLabel
        id="demo-simple-select-outlined-label"
      >
        Entrez un commentaire ici
            </InputLabel>
      <TextField
        aria-label="empty textarea"
        variant="outlined"
        multiline
        rows={10}
        rowsMax={10}
        margin="normal"
        className={styles.inputMaterial}
        name="comment"
        value={selectedClient && selectedClient.comment}
        placeholder="Entrez un commentaire ici"
      />
      <br />
      <br />
      <div align="center">
        <Button
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          onClick={() =>
            openCloseReadModal()}
        >
          Fermer
        </Button>
      </div>
    </div>
  )
  const editBody = (
    <div className={styles.modal}>
      <h3>Modifier le Client</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        ID
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        placeholder="ID"
        className={styles.inputMaterial}
        name="_id"
        value={selectedClient && selectedClient._id}
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
        Adresse compléte
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Adresse compléte"
        name="address"
        onChange={handleChange}
        value={selectedClient && selectedClient.address}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Ville/Wilaya
      </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Ville/Wilaya"
        name="city"
        onChange={handleChange}
        value={selectedClient && selectedClient.city}
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
      <h3>Modifier les Coordonnées Bancaires</h3>
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
        IBAN de votre compte
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="IBAN de votre compte"
        name="iban"
        onChange={handleChange}
        value={selectedClient && selectedClient.iban}
      />
      <br />
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Swift BIC Code
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder=" Swift BIC Code"
        name="swiftCode"
        onChange={handleChange}
        value={selectedClient && selectedClient.swiftCode}
      />
      <br />
      <br />
      <h6>
        Modifier les informations sur le véhicule <br></br>
      </h6>
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
        value={selectedClient && selectedClient.carCatalogue}
        onChange={handleChange}
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
        value={selectedClient && selectedClient.price1}
        onChange={handleChange}
      />
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
        value={selectedClient && selectedClient.brand}
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
        value={selectedClient && selectedClient.model}
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
        value={selectedClient && selectedClient.fuel}
        onChange={handleChange}
      />
      <br /> <br />
      <div align="center">
        <Button
          variant="outlined"
          size="large"
          color="default"
          onClick={() =>
            openCloseEditModal()}
        >
          Fermer
          </Button>
        <br />
      </div>
      <div align="right">
        <Button
          variant="outlined"
          size="large"
          color="default"
          onClick={() =>
            putRequest()}
        >
          Modifier
          </Button>
      </div>
      <br />

    </div>
  )
  const deleteBody = (
    <div className={styles.modal}>
      <p>
        Êtes-vous sûr de vouloir supprimer le client
        <b>
          {selectedClient && selectedClient.id}
        </b>
        ?
        </p>
      <div align="right">
        <Button
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          Ripple onClick={() =>
            deleteRequest()}
        >
          Oui
          </Button>
        <br /><br />
        <Button
          variant="contained"
          size="large"
          color="default"
          disabledElevation
          onClick={() =>
            openCloseDeleteModal()}
        >
          Non
          </Button>
      </div>
    </div>
  )

  const uploadBody = (
    <div className={styles.modal}>
            <h3>Télécharger</h3>
      <Upload />
      <b>
      </b>
      <br />
      <br />
      <div align="center">
        <Button
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          onClick={() =>
            openCloseUploadModal()}
        >
          Fermer
          </Button>
      </div>
    </div>
  )
  const crmBody = (
    <div className={styles.modal}>
      <h3>Fiche Suivi Client A ce Jour: {usuario}</h3>
      <Crm />
      <Crm2/>
      <Crm3 />
      <Crm4 />
      <Crm5 />
      <Crm6 />
      <br />
    </div>
  )
  const invoiceBody = (
    <div className={styles.modal}>
      <h3>Facture</h3>
     <Invoice />
      <br />
    </div>
  )
  const contractBody = (
    <div className={styles.modal}>
      <h3>Contrat de Services</h3>
     <Contract />
      <br />
    </div>
  )
  const preOrderBody = (
    <div className={styles.modal}>
      <h3>Commande</h3>
      <br />
     <PreOrder />
      <br />
    </div>
  )
  const formCarBody = (
    <div className={styles.modal}>
      <h3>Fiche Véhicule</h3>
      <br />
     <FormCar />
      <br />
    </div>
  )

  return (
    <div className="Search">
      <br /><br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Clients"
        actions={[
          {
            icon: 'analytics',
            tooltip: 'CRM',
            onClick: (event, rowData) =>
              crmSelected(rowData, "Submit")
          },

          {
            icon: 'contacts',
            tooltip: 'Situation',
            onClick: (event, rowData) =>
              uploadClientSelected(rowData, "isFreeAction")
          },
          {
            icon: 'commute',
            tooltip: 'Fiche Véhicule',
            onClick: (event, rowData) =>
              formCarSelected(rowData, "isFreeAction")
          },
          {
            icon: 'publish',
            tooltip: 'Télécharger',
            type: 'file',
            onClick: (event, rowData) =>
              uploadClientSelected(rowData, "Submit"),
          },
          {
            icon: 'edit',
            tooltip: 'Client Modifier',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Edit")
          },
          {
            icon: 'reorder',
            tooltip: 'Commande',
            onClick: (event, rowData) =>
              preOrderSelected(rowData, "Edit")
          },
          {
            icon: 'receipt',
            tooltip: 'Facture',
            onClick: (event, rowData) =>
              invoiceSelected(rowData, "Edit")
          },
          {
            icon: 'listAlt',
            tooltip: 'Contract de Services',
            onClick: (event, rowData) =>
              contractSelected(rowData, "Edit")
          },
          {
            icon: 'delete',
            tooltip: 'Supprimer la base de données client',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Delete")
          },
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
          color: 'grey',
        }}
      />
      <Modal
        showPreviews={true}
        open={uploadModal}
        onClose={openCloseUploadModal}>
        {uploadBody}
      </Modal>
      <Modal
        open={readModal}
        onClose={openCloseReadModal}>
        {readBody}
      </Modal>
      <Modal
        open={editModal}
        onClose={openCloseEditModal}>
        {editBody}
      </Modal>
      <Modal
        open={deleteModal}
        onClose={openCloseDeleteModal}>
        {deleteBody}
      </Modal>
      <br />
      <Modal
        open={crmModal}
        onClose={openCloseCrmModal}>
        {crmBody}
      </Modal>
      <br />
      <Modal
        open={invoiceModal}
        onClose={openCloseInvoiceModal}>
        {invoiceBody}
      </Modal>
      <br />
      <Modal
        open={contractModal}
        onClose={openCloseContractModal}>
        {contractBody}
      </Modal>
      <br />
      <Modal
        open={preOrderModal}
        onClose={openClosePreOrderModal}>
        {preOrderBody}
      </Modal>
      <br />
      <Modal
        open={formCarModal}
        onClose={openCloseFormCarModal}>
        {formCarBody}
      </Modal>
      <br />
      <Button
        variant="contained"
        color="danger"
        fullWidth
        disableFocusRipple
        onClick={() => {
          props.history.push("/dashboard")
        }}
      >
        Tableau de bord
        </Button>
      <br /> <br />
    </div>
  )
}

export default withRouter(Search);


