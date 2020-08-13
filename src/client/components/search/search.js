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



import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Search() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["firstName", "lastName", "card"]);

  useEffect(() => {
    fetch("http://localhost:9000/search")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {

    return rows.filter((row) => searchColumns.some(
      (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase) > -1
    )
    );

  }
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
      {columns && columns.map((column) => <label>
        <input type="checkbox" checked={searchColumns.includes(column)}
          onChange={(e) => {
            const checked = searchColumns.includes(column)
            setSearchColumns(prev =>
              checked
                ? prev.filter(sc => sc !== column)
                : [...prev, column]
            );
          }}
        />
      </label>)}
      <div className="container-fluid mt-5">
        <table className="table" cellPadding={0} cellSpacing={0}>
          <thead  classname="thead-dark">

            <tr>{data[0] && columns.map((heading) => <th scope="col">{heading}</th>)}</tr>
          </thead>
          <tbody className="container-fluid mt-5">
            {data.map((row) => {
              return (<tr>
                {
                  columns.map(column =>
                    <td>{row[column]}</td>)
                }
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}