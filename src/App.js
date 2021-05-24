import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchBox from './components/SearchBox';
import PageSection from './components/PageSection';
import ProductDetails from './components/ProductDetail';

export default function App(){
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
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

