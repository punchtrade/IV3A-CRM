import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, FilledInput, Button, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';



const columns = [
  { title: "ID", field: "_id" },
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
}));


function Leads(props) {
  const { history } = props;
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [insertModal, setInsertModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
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
    bankAccount: "",
    bankAccount2: "",
    bankAccount3: "",
    errors: "",
  })

  // handleChange = (event) => {
  //   this.setState({
  //     bankAccount: event.target.value,
  //   });
  // }

  // handleChange2 = (event) => {
  //   this.setState({
  //     bankAccount2: event.target.value
  //   });
  // }
  // handleChange3 = (event) => {
  //   this.setState({
  //     bankAccount3: event.target.value
  //   });
  // }

  // handleChange4 = (event) => {
  //   this.setState({
  //     fuel: event.target.value
  //   })
  // }

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
    await axios.post("http://localhost:9000/clients")
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
        name="_id"
        onChange={handleChange}
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
        Adresse complète
        </InputLabel>
      <TextField
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Adresse complète"
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

      <h3>Coordonnées Bancaires</h3>
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
        placeholder="Swift BIC Code"
        name="swiftCode"
        onChange={handleChange}
        value={selectedClient && selectedClient.swiftCode}
      />
      <br /><br />
      <h3>Informations sur le véhicule</h3>
      <InputLabel
        htmlFor="filled-adornment-amount"
      >
        Voiture choisie dans le catalogue IV3A
        (Immatriculation de la voiture)
      </InputLabel>
      <FilledInput
        multiline variant="outlined"
        className={styles.inputMaterial}
        placeholder="Immatriculation de la voiture"
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
        placeholder="Voiture choisie dans le catalogue IV3A"
        name="price1"
        onChange={handleChange}
        value={selectedClient && selectedClient.price1}
      />
      <br />
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
      <br /><br />
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
        value={selectedClient &&
          selectedClient.comment}
        onChange={handleChange}
        placeholder="Entrez un commentaire ici"
      />
      <div align="right">
        <Button
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          onClick={() =>
            insertRequest()}
        >
          Enregistrer
          </Button>
        <br /> <br />
        <Button
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          onClick={() =>
            openCloseInsertModal()}
        >
          Annuler
          </Button>
        <br /><br />
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
          variant="outlined"
          size="large"
          color="default"
          disabledElevation
          disableRipple onClick={() =>
            deleteRequest()}
        >
          Oui
          </Button>
        <br /><br/>
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
          <br /><br/>
      </div>
    </div>
  )

  return (
    <div className="Leads">
      <br /><br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Prospects"
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
          color: 'grey',
          // backgroundColor: '#d21134'
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
      <br />
      <Button
        variant="contained"
        position="left"
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

export default withRouter(Leads);
