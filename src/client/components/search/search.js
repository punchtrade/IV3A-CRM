// // /* eslint-disable no-sequences */
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // const setClients = async () => {
// //   const { data } = await axios.get(
// //     "http://localhost:9000/newClient"
// //   );
// //   return { data };
// // };

// function Search() {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filteredClients, setFilteredClients] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:9000/newClient", {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((res) => {
//         setClients(res.json());
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }, [search, clients]);

//   useState(() => {
//     setFilteredClients(
//       clients.filter(
//         (clients) =>
//           clients.firstName.toLowerCase().includes(search.toLowerCase()) +
//           clients.lastName.toLowerCase().includes(search.toLowerCase())
//           + clients.card.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, clients]);

//   // if (loading) {
//   //   return <p>Loading users...</p>;
//   // }

//   return (
//     <div className="Search">
//       <input
//         className="container mt-5"
//         type="text"
//         placeholder="Recherche par nom ou par courrier électronique "
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <div className="container-fluid mt-5">
//         <table className="table">
//           <thead className="thead-clear">
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Traitment</th>
//               <th scope="col">Nom</th>
//               <th scope="col">Prénom</th>



// import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";


// export default function Search() {
//   const [data, setData] = useState([]);
//   const [q, setQ] = useState("");
//   const [searchColumns, setSearchColumns] = useState(["firstName", "lastName", "card"]);

//   useEffect(() => {
//     fetch("http://localhost:9000/search")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   function search(rows) {

//     return rows.filter((row) => searchColumns.some(
//       (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase) > -1
//     )
//     );

//   }
//   const columns = data[0] && Object.keys(data[0]);
//   return (
//     <div>
//       <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
//       {columns && columns.map((column) => <label>
//         <input type="checkbox" checked={searchColumns.includes(column)}
//           onChange={(e) => {
//             const checked = searchColumns.includes(column)
//             setSearchColumns(prev =>
//               checked
//                 ? prev.filter(sc => sc !== column)
//                 : [...prev, column]
//             );
//           }}
//         />
//         {column}
//       </label>)}
//       <div className="container-fluid mt-5">
//         <table className="table" cellPadding={0} cellSpacing={0}>
//           <thead  classname="thead-dark">

//             <tr>{data[0] && columns.map((heading) => <th scope="col">{heading}</th>)}</tr>
//           </thead>
//           <tbody className="container-fluid mt-5">
//             {data.map((row) => {
//               return (<tr>
//                 {
//                   columns.map(column =>
//                     <td>{row[column]}</td>)
//                 }
//               </tr>)
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from 'material-table';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const columns = [
  {title: "Nº", field: "id"},
  {title: "Nom", field: "firstName"},
  {title: "Prénom", field: "lastName"},
  {title: "DNI No: IDDZA", field: "card"}
];
const baseUrl = "http://localhost:9000/search";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Search() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [artistaSeleccionado, setClientSelected]=useState({
    firstName: "",
    lastName: "",
    id: "",
    card: "",
    sales: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setClientSelected(prevState=>({
      ...prevState,
      [name]: value
    }));
  }


  const getRequest = async() => {
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const postRequest=async() => {
    await axios.post(baseUrl, artistaSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }


  const putRequest=async()=>{
    await axios.put(baseUrl+"/"+artistaSeleccionado.id, artistaSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(artista=>{
        if(artista.id===artistaSeleccionado.id){
          artista.artista=artistaSeleccionado.artista;
          artista.genero=artistaSeleccionado.genero;
          artista.ventas=artistaSeleccionado.ventas;
          artista.pais=artistaSeleccionado.pais;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const deleteRequest=async()=>{
    await axios.delete(baseUrl+"/"+artistaSeleccionado.id)
    .then(response=>{
      setData(data.filter(artista=>artista.id!==artistaSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarArtista=(artista, caso)=>{
    setClientSelected(artista);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(() => {
    getRequest();
  }, [])
  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Artista</h3>
      <TextField className={styles.inputMaterial} label="Artista" name="artista" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="País" name="pais" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Ventas" name="ventas" onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Género" name="genero" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>postRequest()}>Insérer</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Annuler</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Modifier le client</h3>
      <TextField className={styles.inputMaterial} label="Artista" name="artista" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.artista}/>
      <br />
      <TextField className={styles.inputMaterial} label="País" name="pais" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.pais}/>          
<br />
<TextField className={styles.inputMaterial} label="Ventas" name="ventas" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.ventas}/>
      <br />
<TextField className={styles.inputMaterial} label="Género" name="genero" onChange={handleChange} value={artistaSeleccionado&&artistaSeleccionado.genero}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>putRequest()}>Modifier</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Annuler</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Êtes-vous sûr de vouloir supprimer le client <b>{artistaSeleccionado && artistaSeleccionado.artista}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>deleteRequest()}>Oui</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>Non</Button>

      </div>

    </div>
  )

  return (
    <div className="Search">
            <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Inseré le client</Button>
      <br /><br />
      <MaterialTable
      columns={columns}
      data={data}
      title="Les clients"
      actions={[
        {
          icon: 'edit',
          tooltip: 'Editar Artista',
          onClick: (event, rowData) => seleccionarArtista(rowData, "Editar")
        },
        {
          icon: 'delete',
          tooltip: 'Eliminar Artista',
          onClick: (event, rowData) => seleccionarArtista(rowData, "Eliminar")
        }
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
      localization={{
        header:{
          actions: "Actions"
        }
      }}
    />
     <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  )

}

export default Search;