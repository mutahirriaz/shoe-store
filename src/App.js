import React from 'react';
import Header from './Components/Header'
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Men from './Components/Men';
import Product from './Components/Product'



function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/product/:id' component={Product} />
      <Route path='/Men' component={Men}></Route>
      <Route exact path ='/:id' component={Product}></Route>

      </Switch>
      </Router>


      </div>
  );
}

export default App;
