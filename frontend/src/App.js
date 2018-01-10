import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent'
import MainComponent from './Components/MainComponent'
import ListCategoryComponent from './Components/Category/ListCategoryComponent'
import CreateCategoryComponent from './Components/Category/CreateCategoryComponent'
import ListBillComponent from './Components/Bill/ListBillComponent'
import CreateBillComponent from './Components/Bill/CreateBillComponent'

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent />
                <Router>
                    <div>
                        <Route exact path="/" component={ MainComponent } />
                        <Route exact path="/category" component={ ListCategoryComponent } />
                        <Route path="/category/add" component={ CreateCategoryComponent } />
                        <Route exact path="/bill" component={ ListBillComponent } />
                        <Route path="/bill/add" component={ CreateBillComponent } />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
