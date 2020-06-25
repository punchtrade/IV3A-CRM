/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Search() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("mongodb://localhost:27017/iv3a")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
          user.username.toLowerCase().includes(search.toLowerCase()) 
        + user.email.toLowerCase().includes(search.toLowerCase()) 
        + user.website.toLowerCase().includes(search.toLowerCase()) 
      )
    );
  }, [search, users]);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="App">
      <h2>Users Lists</h2>
      <input
        className="container mt-5"        
        type="text"
        placeholder="Buscar por nombre, email o website"
        onChange={e => setSearch(e.target.value)}
      />
    <div className="container-fluid mt-5">    
    <table className="table" border="1">
            <thead className="thead-dark">        
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Traitment</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Teléphone</th>
                        <th scope="col">E-mail</th>
                    </tr>               
            </thead>
       </table>
    </div>
      {filteredUsers.map((user, idx) => (
        <UsersDetail key={idx} {...user} />
      ))}
    </div>
  );
}
const UsersDetail = props => {
  const { id, traitment, name, lastname, telephone, email } = props;
  return (
    <div className="container-fluid mt-5">   
        <table className="table table-striped table-borderless">
        <tbody className="tbody-light">
                <tr> 
                    <td>{id}</td>
                    <td>{traitment}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{telephone}</td>
                    <td>{email}</td>
                </tr>                            
            </tbody>             
        </table>               
    </div>       
  );
};
export default Search;