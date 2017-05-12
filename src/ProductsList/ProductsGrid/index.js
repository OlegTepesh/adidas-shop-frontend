import React from 'react';
import Label from '../../Label';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.css';

export default () => {
  return (
    <section className="products-grid">
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <Label styleName="card-sticker" />
              <img
                className="card-product-photo"
                src={require(`./photos/shoes.jpg`)}
              />
              <span className="card-price accent">$170</span>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <img
                className="card-product-photo"
                src={require(`./photos/shoes_3.jpg`)}
              />
              <span className="card-price">$240.99</span>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <img
                className="card-product-photo"
                src={require(`./photos/shoes.jpg`)}
              />
              <span className="card-price">$1024</span>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <img
                className="card-product-photo"
                src={require(`./photos/shoes.jpg`)}
              />
              <span className="card-price">$170</span>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <Label styleName="card-sticker" />
              <img
                className="card-product-photo"
                src={require(`./photos/shoes_2.jpg`)}
              />
              <span className="card-price accent">$170</span>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a className="card" href="/detail">
              <img
                className="card-product-photo"
                src={require(`./photos/shoes_3.jpg`)}
              />
              <span className="card-price">$170</span>
            </a>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
