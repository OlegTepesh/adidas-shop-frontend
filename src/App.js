import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';

require('normalize-css');
require('flexboxgrid');
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content-wrapper">
            <Sidebar />
            <main className="main">
              <Route exact path="/" component={ProductsList} />
              <Route path="/detail" component={ProductDetail} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
