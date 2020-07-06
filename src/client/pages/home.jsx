import React from 'react';
import NewClient from '../components/forms/newClient';
import Search from '../components/search/search';

class Home extends React.Component{
     
render() {
    return (
        <div>
             <h1>Bonjour, </h1>
             <NewClient />
             <Search />
        </div>
     )
  }
}

export default Home;

