import React from 'react';
import NewClient from '../components/forms/newClient';
import Search from '../components/search/search';
import ButtonSubmit from '../components/buttons/buttonSubmit';
import '../styles/dashboard.scss';

class Dashboard extends React.Component{
     
render() {
    return (
        <div className="dashboard">
             <h1>Bonjour, </h1>
             <div className="button">
                <button>New Client</button>
             </div>
             <div className="search">
                <Search />
            </div>
        </div>
     )
  }
}

export default Dashboard;