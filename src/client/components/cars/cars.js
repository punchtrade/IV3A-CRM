import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import { Modal, TextField, FilledInput, Button, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';



const columns = [
    { title: "ID", field: "_id" },
    { title: "Marque", field: "brand" },
    { title: "Modèle", field: "model" },
    { title: "immatriculation", field: "carCatalogue" }
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


function Cars(props) {
  const { history } = props;
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [insertModal, setInsertModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedClient, setClientSelected] = useState({
    _id: ""
  })

  const getRequest = async () => {
    await axios.get("http://localhost:9000/leads")
    // await axios.get("http://localhost:9000/databaseCars")
      .then(response => {
        setData(response.data);
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

  const carSelected = (client, caso) => {
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
    <h3>Vue Véhicule</h3>

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
        title="Véhicules"
        actions={[
          {
            icon: 'add',
            tooltip: 'Vue Véhicule',
            onClick: (event, rowData) =>
              carSelected(rowData, "Edit")
          },
          {
            icon: 'delete',
            tooltip: 'Supprimer la base de données client',
            onClick: (event, rowData) =>
              carSelected(rowData, "Delete")
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

export default withRouter(Cars);
