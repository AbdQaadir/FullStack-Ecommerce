import React , {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { store } from './redux/store'



// Actions
import { POPULATE_PRODUCTS } from './redux/actionCreators';
// Pages
import Homepage from './pages/Homepage/Homepage'
import ProductPage from './pages/ProductPage/ProductPage';

// Components
import ScrollToTop from './ScrollToTop';

import './App.css';
const App:React.FC = () => {
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
      // setProducts(json);
      store.dispatch(POPULATE_PRODUCTS(json));
    })
    .catch(err => console.log({err}))

  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/store/:category/:id" component={ProductPage}/>
      </Switch>
    </Router>
  );
}

export default App;
