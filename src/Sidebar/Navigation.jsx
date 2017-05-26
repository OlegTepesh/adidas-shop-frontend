import React from 'react';
import Menu from './Menu';
import { Nav, StyledNavLink as NavLink } from './styled';

export default () => (
  <Nav>
    <Menu title="football">
      <NavLink to="/products/football/shoes">shoes</NavLink>
      <NavLink to="/products/football/clothing">clothing</NavLink>
      <NavLink to="/products/football/accessories">accessories</NavLink>
    </Menu>
    <Menu title="running">
      <NavLink to="/products/running/shoes">shoes</NavLink>
      <NavLink to="/products/running/clothing">clothing</NavLink>
      <NavLink to="/products/running/accessories">accessories</NavLink>
    </Menu>
    <Menu title="basketball">
      <NavLink to="/products/basketball/shoes">shoes</NavLink>
      <NavLink to="/products/basketball/clothing">clothing</NavLink>
      <NavLink to="/products/basketball/accessories">accessories</NavLink>
    </Menu>
  </Nav>
);
