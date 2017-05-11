import React from 'react';
import Label from '../../Label';

import './styles.css';

export default () => {
  return (
    <section className="products-grid">
      <div className="row around-xs start-md">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <Label styleName="card-sticker" />
            <img
              className="card-product-photo"
              src={require(`./photos/shoes.jpg`)}
            />
            <span className="card-price accent">$170</span>
          </a>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <img
              className="card-product-photo"
              src={require(`./photos/shoes_3.jpg`)}
            />
            <span className="card-price">$240.99</span>
          </a>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <img
              className="card-product-photo"
              src={require(`./photos/shoes.jpg`)}
            />
            <span className="card-price">$1024</span>
          </a>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <img
              className="card-product-photo"
              src={require(`./photos/shoes.jpg`)}
            />
            <span className="card-price">$170</span>
          </a>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <Label styleName="card-sticker" />
            <img
              className="card-product-photo"
              src={require(`./photos/shoes_2.jpg`)}
            />
            <span className="card-price accent">$170</span>
          </a>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <a className="card" href="/detail">
            <img
              className="card-product-photo"
              src={require(`./photos/shoes_3.jpg`)}
            />
            <span className="card-price">$170</span>
          </a>
        </div>
      </div>
    </section>
  );
};
