import React, { Component } from 'react';
import './styles.css';

class Label extends Component {
  render() {
    return (
      <span className={`accent-sticker ${this.props.styleName}`}>Sale</span>
    );
  }
}
export default Label;
