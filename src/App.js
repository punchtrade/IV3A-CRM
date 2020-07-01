import React from 'react';
import './App.css';

import Header from './client/components/header/header';
import Footer from './client/components/footer/footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentDidMount(){
    this.callAPI();
  }
render() {
  return (
      <div className="App">
        <Header/>
        <Footer/>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}
export default App;
