import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';
import ProductsGrid from './styled';

export default () => (
  <div>
    <Filters />
    <ProductsGrid>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes.jpg')}
              link="/detail"
              price="170"
              isSale
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes_3.jpg')}
              link="/detail"
              price="240.99"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes.jpg')}
              link="/detail"
              price="1024"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes.jpg')}
              link="/detail"
              price="170"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes.jpg')}
              link="/detail"
              price="170"
              isSale
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card
              img={require('./photos/shoes_3.jpg')}
              link="/detail"
              price="170"
            />
          </Col>
        </Row>
      </Grid>
    </ProductsGrid>
  </div>
);
