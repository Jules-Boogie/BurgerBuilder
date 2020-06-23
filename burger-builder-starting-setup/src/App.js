import React, { Component } from 'react';
import Layout from "./Components/Layout/Layout"
import BLT from "./containers/BLTContainer/BLT"
import Checkout from './containers/CheckOut/Checkout'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Layout>
            <Switch>
              <Route exact={true} path="/" component={BLT} />


              <Route exact={true} path="/checkout">
                <Checkout/>
                </Route>
           
          </Switch>
          
        </Layout>
       
      </div>
      </Router>
    );
  }
}

export default App;
