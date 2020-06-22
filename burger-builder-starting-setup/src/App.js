import React, { Component } from 'react';
import Layout from "./Components/Layout/Layout"
import BLT from "./containers/BLTContainer/BLT"


class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BLT></BLT>
        </Layout>
       
      </div>
    );
  }
}

export default App;
