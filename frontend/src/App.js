import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";
import Searchresults from './components/Searchresults';
import ProductDetails from './components/Productdetail';
import Header from './components/Header';

export default function App(){
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}> 
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

