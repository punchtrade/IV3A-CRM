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
      .then(res => {
        setClients(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search, clients]);

  useEffect(() => {
    setFilteredClients(
     clients.filter(clients =>
          clients.userName.toLowerCase().includes(search.toLowerCase()) 
        + clients.email.toLowerCase().includes(search.toLowerCase()) 
        // + user.website.toLowerCase().includes(search.toLowerCase()) 
      )
    );
  }, [search, clients]);

  // if (loading) {
  //   return <p>Loading users...</p>;
  // }

  return (
    <div className="App">
      {/* <h2>Users Lists</h2> */}
      <input
        className="container mt-5"        
        type="text"
        placeholder="Recherche par nom ou par courrier électronique "
        onChange={e => setSearch(e.target.value)}
      />
    {/* <div className="container-fluid mt-5">    
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
    </div> */}
      {filteredClients.map((clients, idx) => (
        <ClientsDetail key={idx} {...clients} />
      ))}
    </div>
  );
}
const ClientsDetail = props => {
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


// import React from "react";
// import { alertService } from '../services/alert';
// import Axios from "axios";
// // import { API_HOST } from "../config"



// class Search extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state={
//             loading: true,
//             clients: []
//         }
//     }

//     componentDidMount() {
//         Axios.get(`http://localhost:9000/newClient`).then(res => {
//             this.setState({
//                 clients: res.data
//             })
//         }).catch(e => {
//             alertService.showError('Cannot get user data...')
//         }).finally(() => {
//             this.setState({
//                 loading: false
//             })
//         })
//     }

//     render() {
//         return (
//             <div className="row mt-5 justify-content-center">
//                 <div className="col-12 col-lg-8">
//                     <table className="table table-hover table-striped">
//                         <thead>
//                             <tr>
//                                 <th>No</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {this.state.loading ? (
//                             <tr><td>Loading...</td></tr>
//                         ) : (
//                             <>
//                                 {this.state.clients.map((user, index) => {
//                                     return (
//                                         <tr key={index}>
//                                             <td>{index+1}</td>
//                                             <td>{user.name}</td>
//                                             <td>{user.email}</td>
//                                         </tr>
//                                     )
//                                 })}
//                                 {!this.state.clients.length && (
//                                     <tr><td>Loading...</td></tr>
//                                 )}
//                             </>
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Search;