import React from 'react';
import { ColorPicker, Color } from './styled';

export default props => (
  <ColorPicker>
    {props.colors.map((color, i) => (
      <Color
        key={color}
        color={color}
        onClick={() => {
          props.onChange(i);
        }}
      />
    ))}
  </ColorPicker>
);
