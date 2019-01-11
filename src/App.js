import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import AddProject from "./components/project/AddProject";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/addProject" component={AddProject}/>
            </div>
        </Router>
    );
  }
}

export default App;
