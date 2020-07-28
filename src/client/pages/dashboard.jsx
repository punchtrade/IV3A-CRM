import React from 'react';
import Search from '../components/search/search';
import '../styles/dashboard.scss';

class Dashboard extends React.Component{
     
render() {
    return (
        <div className="dashboard">
             <div className="button">
                <button type="submit" value="submit">Nouveau Client</button>
             </div>
             <div className="search">
                <Search />
            </div>
        </div>
     )
  }
}

export default Dashboard;