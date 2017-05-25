import React from 'react';
import { ColorPicker, Color } from './styled';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

export default props => (
  <ColorPicker>
    {colors.map(color => (
      <Color
        key={color}
        color={color}
        onClick={() => {
          props.onChange(color);
        }}
      />
    ))}
  </ColorPicker>
);
