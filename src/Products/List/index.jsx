import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';
import ProductsGrid from './styled';

const CardCol = props => (
  <Col xs={12} sm={6} md={6} lg={3}>
    {props.children}
  </Col>
);

export default () => (
  <div>
    <Filters />
    <ProductsGrid>
      <Grid fluid>
        <Row>
          <CardCol>
            <Card
              img={require('./photos/shoes@2x.jpg')}
              link="/detail"
              price="170"
              isSale
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./photos/shoes_3@2x.jpg')}
              link="/detail"
              price="240.99"
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./photos/shoes@2x.jpg')}
              link="/detail"
              price="1024"
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./photos/shoes@2x.jpg')}
              link="/detail"
              price="170"
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./photos/shoes_2@2x.jpg')}
              link="/detail"
              price="170"
              isSale
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./photos/shoes_3@2x.jpg')}
              link="/detail"
              price="170"
            />
          </CardCol>
        </Row>
      </Grid>
    </ProductsGrid>
  </div>
);
