import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Searchresults from './components/Searchresults';
import ProductDetails from './components/Productdetail';
import Header from './components/Header';

export default function App(){

  return (
    <div className="App">
      <Router > 
      <Header ></Header>
        <Switch>
          <Route path="/items/:id">
            <ProductDetails/>
          </Route>
          <Route path="/items">
            <Searchresults/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

