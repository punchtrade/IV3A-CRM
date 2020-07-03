import React from 'react';
import axios from 'axios';

class Home extends React.Component{
     
// componentDidMount() {
//     axios
//         .get('http://localhost:3000/home')
//         .then(response => {
//             console.log(response)
//             this.setState({ posts: response.data })
//         })
//         .catch(error => {
//             console.log(error)
//             this.setState({errorMsg: 'Error retrieving data'})
//         })
// }

render() {
    return (
        <div>
             <h1>Bonjour, </h1>
        </div>
     )
  }
}

export default Home;

