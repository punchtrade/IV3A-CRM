import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, Button, InputLabel, FilledInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneDialog } from 'material-ui-dropzone';


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
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  }
}));

function Search() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [insertModal, setInsertModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
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
    image: "",
    carCatalogue: "",
    price1: "",
    brand: "",
    model: "",
    fuel: "",
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

  const handleSearch = function() {
    window.location.assign('/dashboard');
  }
  // const postRequest = async () => {
  //   await axios.post("http://localhost:9000/newClient")
  //     .then(response => {
  //       setData(data.concat(response.data));
  //       openCloseInsertModal();
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }

  const putRequest = async () => {
    await axios.put("http://localhost:9000/search")
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
            client.image = selectedClient.image;
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

  const uploadRequest = async () => {
    await axios.post("http://localhost:9000/newClient")
      .then(response => {
        setData(data.concat(response.data));
        openCloseUploadModal();
      }).catch(error => {
        console.log(error);
      })
  }

  const clientSelected = (client, caso) => {
    setClientSelected(client);
    (caso === "Edit") ? openCloseEditModal()
      :
      openCloseDeleteModal() || openCloseUploadModal()
  }

  const openCloseInsertModal = () => {
    setInsertModal(!insertModal);
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

  useEffect(() => {
    getRequest();
  }, [])
  // const insertBody = (
  //   <div className={styles.modal}>
  //     <h3>Inserér Client</h3>
  //     <TextField className={styles.inputMaterial} label="Artista" name="artista" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="País" name="pais" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="Ventas" name="ventas" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="Género" name="genero" onChange={handleChange} />
  //     <br /><br />
  //     <div align="right">
  //       <Button color="primary" onClick={() => postRequest()}>Insertar</Button>
  //       <Button onClick={() => openCloseInsertModal()}>Cancelar</Button>
  //     </div>
  //   </div>
  // )

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
      <div align="right">
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() =>
            putRequest()}
        >
          Modifier
          </Button>
        <br />
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() =>
            openCloseEditModal()}
        >
          Annuler
          </Button>
        <br />
      </div>
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
          variant="contained"
          size="small"
          color="secondary"
          Ripple onClick={() =>
            deleteRequest()}
        >
          Oui
          </Button>
        <br />
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
  const uploadBody = (
    <div className={styles.modal}>
      <p>Veuillez sélectionner une image pour l'aperçu
      <b>
          {selectedClient && selectedClient.id}
        </b>
        ?
      </p>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={() =>
          uploadRequest()}
      >
        Ajouter une image
    </Button>

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
            icon: 'contacts',
            tooltip: 'Situation',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Edit")
          },

          {
            icon: 'publish',
            tooltip: 'Télécharger',
            type: 'file',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Publish"),
          },
          {
            icon: 'edit',
            tooltip: 'Client Modifier',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Edit")
          },
          {
            icon: 'C',
            tooltip: 'Voiture livrée',
            onClick: (event, rowData) =>
              clientSelected(rowData, "Edit")
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
          color: 'white',
          backgroundColor: '#036435'
        }}
      />
      {/* <Modal
        open={insertModal}
        onClose={openCloseInsertModal}>
        {insertBody}
      </Modal> */}
      <DropzoneDialog
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        maxFileSize={5000000}
        open={uploadModal}
        onClose={openCloseUploadModal}>
        {uploadBody}
      </DropzoneDialog>
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
      <a href="/dashboard"><input type="submit" value='Panel'></input></a>
    </div>
        
  )
}
export default Search;


