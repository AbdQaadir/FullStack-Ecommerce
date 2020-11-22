import React , {useEffect, useState} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


// Pages
import Homepage from './pages/Homepage/Homepage'
import ProductPage from './pages/ProductPage/ProductPage';

import './App.css';
const App:React.FC = () => {
  const [products, setProducts] = useState<object[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
      setProducts(json);
      console.log(json)
    })
    .catch(err => console.log({err}))

  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} products={products}/>}/>
        <Route path="/product/:category/:id" render={(props) => <ProductPage {...props} products={products}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
