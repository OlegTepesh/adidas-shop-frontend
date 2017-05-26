import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={ProductsList} />
          <Route path="/detail" component={ProductsDetail} />

          <Route exact path="/products/:group/:type" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductsDetail} />
        </Main>
      </ContentWrapper>
    </Application>
  </Router>
);
