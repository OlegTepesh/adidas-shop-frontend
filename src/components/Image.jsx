import React from 'react';

const Image = props => (
  <img
    className={props.className}
    src={props.src}
    srcSet={`${props.x2} 2x, ${props.x3} 3x`}
    alt=""
  />
);

export default Image;
