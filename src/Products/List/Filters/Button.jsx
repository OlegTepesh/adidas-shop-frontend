import React from 'react';
import { StyledButton } from './styled';

const Button = props => (
  <StyledButton isActive={props.isActive}>{props.children}</StyledButton>
);

export default Button;
