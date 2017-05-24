import React from 'react';
import Menu from './Menu';
import { Nav, StLink as Link } from './styled';

export default () => (
  <Nav>
    <Menu title="football">
      <Link to="#">
        shoes
      </Link>
      <Link to="#">
        clothing
      </Link>
      <Link to="#">
        accessories
      </Link>
    </Menu>
    <Menu title="running">
      <Link to="#">
        shoes
      </Link>
      <Link to="#">
        clothing
      </Link>
      <Link to="#">
        accessories
      </Link>
    </Menu>
    <Menu title="basketball">
      <Link to="#">
        shoes
      </Link>
      <Link to="#">
        clothing
      </Link>
      <Link to="#">
        accessories
      </Link>
    </Menu>
  </Nav>
);
