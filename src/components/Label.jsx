import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  display: inline-block;
  background-color: #ff5c5c;
  font-size: 14px;
  color: #fff;
  line-height: 32px;
  height: 32px;
  min-width: 50px;
  text-transform: uppercase;
  padding: 0 21px;
`;

const Label = () => (
  <StyledLabel>
    Sale
  </StyledLabel>
);

export default Label;
