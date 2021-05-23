import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBox from './components/SearchBox';
import PageSection from './components/PageSection';
import ProductDetails from './components/ProductDetail';

export default function App(){

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/items/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/items">
            <PageSection></PageSection>
          </Route>
          <Route path="/">
            <SearchBox></SearchBox>
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

