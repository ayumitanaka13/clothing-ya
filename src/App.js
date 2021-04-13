import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component';

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
