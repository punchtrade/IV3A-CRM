// /* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Search() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9000/newClient")
      .then((res) => {
        setClients(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      }).finally((res) =>{
        
      })
  }, [search, clients]);

  useState(() => {
    setFilteredClients(
      clients.filter(
        (clients) =>
          clients.firstName.toLowerCase().includes(search.toLowerCase()) +
          clients.lastName.toLowerCase().includes(search.toLowerCase())
        + clients.card.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, clients]);

  // if (loading) {
  //   return <p>Loading users...</p>;
  // }

  return (
    <div className="Search">
      <input
        className="container mt-5"
        type="text"
        placeholder="Recherche par nom ou par courrier électronique "
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container-fluid mt-5">    
    <table className="table">
            <thead className="thead-clear">        
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Traitment</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Teléphone</th>
                        <th scope="col">Courrier Éléctronique</th>
                    </tr>               
            </thead>
       </table>
    </div>
      {filteredClients.map((clients, idx) => (
        <ClientsDetail key={idx} {...clients} />
      ))}
    </div>
  );
}
const ClientsDetail = (props) => {
  const { id, traitment, firstName, lastName, telephone, email } = props;
  return (
    <div className="container-fluid mt-5">
      <table className="table table-striped table-borderless">
        <tbody className="tbody-light">
          <tr>
            <td>{id}</td>
            <td>{traitment}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{telephone}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Search;
