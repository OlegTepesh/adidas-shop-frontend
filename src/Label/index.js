import React, { Component } from 'react';
import './styles.css';

export default props => {
  return <span className={`accent-sticker ${props.styleName}`}>Sale</span>;
};
