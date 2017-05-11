import React from 'react';
import Label from '../Label';
import './styles.css';

export default () => {
  return (
    <div className="product-detail">
      <section className="product-head">
        <div className="product-head-wrap">
          <h1 className="product-head-name">
            ULTRA <br />BOOST
          </h1>
          <button className="circle-button-gray product-head-save">
            Save
          </button>
        </div>
        <div className="product-head-wrap">
          <div className="product-head-top-line">
            <div className="product-head-colors color-picker">
              <button
                className="color-picker-cirle"
                style={{ backgroundColor: '#c5c5c5' }}
              />
              <button
                className="color-picker-cirle"
                style={{ backgroundColor: '#4d87ca' }}
              />
              <button
                className="color-picker-cirle"
                style={{ backgroundColor: '#4a4a4a' }}
              />
              <button
                className="color-picker-cirle"
                style={{ backgroundColor: '#e0e0e0' }}
              />
            </div>
            <Label styleName="product-head-sticker" />
          </div>
          <div className="product-head-bottom-line">
            <h2 className="product-head-price">170$</h2>
          </div>
        </div>
      </section>
      <section className="product-photo">
        <div className="product-photo-big">
          <img src={require(`./photos/bitmap-copy.jpg`)} />
        </div>
        <div className="product-photo-previews">
          <img src={require(`./photos/bitmap_2.jpg`)} />
          <img src={require(`./photos/bitmap.jpg`)} />
          <img src={require(`./photos/bitmap_3.jpg`)} />
          <img src={require(`./photos/bitmap-copy-2.jpg`)} />
          <div className="product-photo-more more-photo">
            <button className="more-photo-hamburger">
              <div className="more-photo-hamburger-line" />
              <div className="more-photo-hamburger-line" />
              <div className="more-photo-hamburger-line" />
            </button>
            <div className="more-photo-text">
              <span>see </span><span>more </span><span>photo</span>
            </div>
          </div>
        </div>
      </section>
      <section className="product-description">
        <p>
          {' '}
          <span className="text-accent">Adidas </span>
          is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
          {' '}
        </p>
      </section>
      <button className="buy-now-button">Buy now</button>
    </div>
  );
};
