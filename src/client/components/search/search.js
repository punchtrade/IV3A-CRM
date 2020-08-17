import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const columns = [
  { title: "Nº", field: "id" },
  { title: "Nom", field: "firstName" },
  { title: "Prénom", field: "lastName" },
  { title: "DNI Nº/IDDZA", field: "card" }
];
// const baseUrl = "http://localhost:9000/search";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #036435',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    height: '100%',
    display: 'block'
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

  // const readRequest = async () => {
  //   await axios.get("http://localhost:9000/search")
  //     .then(response => {
  //       setData(data.concat(response.data));
  //       openCloseInsertModal();
  //     }).catch(error => {
  //       console.log(error);
  //     })
  // }


  const putRequest = async () => {
    // await axios.put("http://localhost:9000/search")
    // .then(res => {
    //   console.log(res.data);
    // })
    await axios.put("http://localhost:9000/search")
      .then(response => {
        var newData = data;
        newData.map(client => {
          if (client.id === selectedClient.id) {
            client.card = selectedClient.card;
            client.firstName = selectedClient.firstName;
            client.lastName = selectedClient.lastName;
            client.telephone = selectedClient.telephone;
            client.email = selectedClient.email;
            client.address = selectedClient.address;
            client.city = selectedClient.city;
            client.state = selectedClient.state;
            client.postalCode = selectedClient.postalCode;
            client.nameOfBank = selectedClient.nameOfBank;
            client.numberOfBank = selectedClient.numberOfBank;
            client.accountName = selectedClient.accountName;
            client.iban = selectedClient.iban;
            client.swiftCode = selectedClient.swiftCode;
            client.branchOffice = selectedClient.branchOffice;
            client.addressBank = selectedClient.addressBank;
            client.cityBank = selectedClient.cityBank;
            client.stateBank = selectedClient.stateBank;
            client.postalCodeBank = selectedClient.postalCodeBank;
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

  const openCloseInsertModal = () => {
    setInsertModal(!insertModal);
  }


  const openCloseEditModal = () => {
    setEditModal(!editModal);
  }

  const openCloseDeleteModal = () => {
    setDeleteModal(!deleteModal);
  }

  useEffect(() => {
    getRequest();
  }, [])
  // const insertBody = (
  //   <div className={styles.modal}>
  //     <h3>Ajouter un nouvel client</h3>
  //     <TextField className={styles.inputMaterial} label="Nº" name="id" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="Nom" name="firstName" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="Prénom" name="lastName" onChange={handleChange} />
  //     <br />
  //     <TextField className={styles.inputMaterial} label="DNI" name="card" onChange={handleChange} />
  //     <br /><br />
  //     <div align="right">
  //       <Button color="primary" onClick={() => readRequest()}>Insérer</Button>
  //       <Button onClick={() => openCloseInsertModal()}>Annuler</Button>
  //     </div>
  //   </div>
  // )

  const editBody = (
    <div className={styles.modal}>
      <h3>Modifier le client</h3>
      <TextField className={styles.inputMaterial} label="DNI" name="card" onChange={handleChange} value={selectedClient && selectedClient.card} />
      <br />
      <TextField className={styles.inputMaterial} label="Nom" name="firstName" onChange={handleChange} value={selectedClient && selectedClient.firstName} />
      <br />
      <TextField className={styles.inputMaterial} label="Prénom" name="lastName" onChange={handleChange} value={selectedClient && selectedClient.lastName} />
      <br />
      <TextField className={styles.inputMaterial} label="Téléphone" name="telephone" onChange={handleChange} value={selectedClient && selectedClient.telephone} />
      <br />
      <TextField className={styles.inputMaterial} label="Courrier Électronique" name="email" onChange={handleChange} value={selectedClient && selectedClient.email} />
      <br />
      <TextField className={styles.inputMaterial} label="Allée/Rue/Avenue" name="address" onChange={handleChange} value={selectedClient && selectedClient.address} />
      <br />
      <TextField className={styles.inputMaterial} label="Ville" name="city" onChange={handleChange} value={selectedClient && selectedClient.city} />
      <br />
      <TextField className={styles.inputMaterial} label="Wilaya" name="state" onChange={handleChange} value={selectedClient && selectedClient.state} />
      <br />
      <TextField className={styles.inputMaterial} label="Code Postal" name="postalCode" onChange={handleChange} value={selectedClient && selectedClient.postalCode} />
      <br /><br />
      <h3>Modifier le Coordonnées Bancaires</h3>
      <TextField className={styles.inputMaterial} label="Nom de la Banque" name="nameOfBank" onChange={handleChange} value={selectedClient && selectedClient.nameOfBank} />
      <br />
      <TextField className={styles.inputMaterial} label="Nº de compte" name="numberOfBank" onChange={handleChange} value={selectedClient && selectedClient.numberOfBank} />
      <br />
      <TextField className={styles.inputMaterial} label="Intitulé du compte" name="accountName" onChange={handleChange} value={selectedClient && selectedClient.accountName} />
      <br />
      <TextField className={styles.inputMaterial} label="IBAN" name="iban" onChange={handleChange} value={selectedClient && selectedClient.iban} />
      <br />
      <TextField className={styles.inputMaterial} label="Code BIC rapide" name="swiftCode" onChange={handleChange} value={selectedClient && selectedClient.swiftCode} />
      <br />
      <TextField className={styles.inputMaterial} label="Sucursale" name="branchOffice" onChange={handleChange} value={selectedClient && selectedClient.branchOffice} />
      <br />
      <TextField className={styles.inputMaterial} label="Allée/Rue/Av" name="addressBank" onChange={handleChange} value={selectedClient && selectedClient.addressBank} />
      <br />
      <TextField className={styles.inputMaterial} label="Ville" name="cityBank" onChange={handleChange} value={selectedClient && selectedClient.cityBank} />
      <br />
      <TextField className={styles.inputMaterial} label="Wilaya" name="stateBank" onChange={handleChange} value={selectedClient && selectedClient.stateBank} />
      <br />
      <TextField className={styles.inputMaterial} label="Code Postal" name="postalCodeBank" onChange={handleChange} value={selectedClient && selectedClient.postalCodeBank} />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => putRequest()}>Modifier</Button>
        <Button onClick={() => openCloseEditModal()}>Annuler</Button>
      </div>
    </div>
  )
  const deleteBody = (
    <div className={styles.modal}>
      <p>Êtes-vous sûr de vouloir supprimer le client <b>{selectedClient && selectedClient.id}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={() => deleteRequest()}>Oui</Button>
        <Button onClick={() => openCloseDeleteModal()}>Non</Button>

      </div>

    </div>
  )

  return (
    <div className="Search">
      <br />
      <Button onClick={() => openCloseInsertModal()}>Inseré le client</Button>
      <br /><br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Les clients"
        actions={[
          {
            icon: 'edit',
            backgroundColor: '#d21134',
            tooltip: 'Client Modifier',
            onClick: (event, rowData) => clientSelected(rowData, "Edit")
          },
          {
            icon: 'delete',
            tooltip: 'Supprimer la base de données client',
            onClick: (event, rowData) => clientSelected(rowData, "Delete")
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

      {/* <Modal
        open={insertModal}
        onClose={openCloseInsertModal}>
        {insertBody}
      </Modal> */}

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
    </div>
  )

}

export default Search;


