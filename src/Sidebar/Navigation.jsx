import React from 'react';
import Menu from './Menu';
import { Nav, StLink } from './styled';

export default () => (
  <Nav>
    <Menu title="football">
      <StLink to="#">
        shoes
      </StLink>
      <StLink to="#">
        clothing
      </StLink>
      <StLink to="#">
        accessories
      </StLink>
    </Menu>
    <Menu title="running">
      <StLink to="#">
        shoes
      </StLink>
      <StLink to="#">
        clothing
      </StLink>
      <StLink to="#">
        accessories
      </StLink>
    </Menu>
    <Menu title="basketball">
      <StLink to="#">
        shoes
      </StLink>
      <StLink to="#">
        clothing
      </StLink>
      <StLink to="#">
        accessories
      </StLink>
    </Menu>
  </Nav>
);
