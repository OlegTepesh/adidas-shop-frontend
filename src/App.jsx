import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'normalize.css';
import Sidebar from './Sidebar';
import ProductsList from './Products/List';
import ProductsDetail from './Products/Detail';
import { Application, ContentWrapper, Main } from './styled';
import './index.css';

export default () => (
  <Router>
    <Application>
      <ContentWrapper>
        <Sidebar />
        <Main>
          <Switch>
            <Redirect exact from="/" to="/products/football/cleats" />
            <Route exact path="/products/:group/:type" component={ProductsList} />
            <Route exact path="/products/:group/:type/:id" component={ProductsDetail} />
          </Switch>
        </Main>
      </ContentWrapper>
    </Application>
  </Router>
);
