import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


import PageSection from './components/PageSection';
import ProductDetails from './components/ProductDetail';
import Header from './components/header';

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
            <PageSection/>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

