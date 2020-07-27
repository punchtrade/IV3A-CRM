import React from 'react';
import './App.css';
import { Redirect, Switch, Route , BrowserRouter} from 'react-router-dom';
import Header from './client/components/header/header';
import Footer from './client/components/footer/footer';
import Home from '../src/client/pages/home';
import Dashboard from './client/pages/dashboard';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }
    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('token')) {
            return (<Redirect to={'/login'} />)
          }
        return ( 
            <div className="App">
                <Header />
                <Footer />
                <p>{this.state.apiResponse}</p>
                <BrowserRouter>
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              {localStorage.getItem('token')?<Route path='/home' component={Home}/>:<Redirect to={"/login"}/>}
              {localStorage.getItem('token')?<Redirect to={"/home"} />:<Redirect to={"/login"}/>}
            </Switch>
          </BrowserRouter>
            </div>
        );
    }
}
export default App;