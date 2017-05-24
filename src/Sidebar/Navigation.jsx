import React from 'react';
import Menu from './Menu';
import { Nav, List, ItemLink } from './styled';

export default () => (
  <Nav>
    <Menu title="football">
      <List>
        <ItemLink to="#">
          shoes
        </ItemLink>
        <ItemLink to="#">
          clothing
        </ItemLink>
        <ItemLink to="#">
          accessories
        </ItemLink>
      </List>
    </Menu>
    <Menu title="running">
      <List>
        <ItemLink to="#">
          shoes
        </ItemLink>
        <ItemLink to="#">
          clothing
        </ItemLink>
        <ItemLink to="#">
          accessories
        </ItemLink>
      </List>
    </Menu>
    <Menu title="basketball">
      <List>
        <ItemLink to="#">
          shoes
        </ItemLink>
        <ItemLink to="#">
          clothing
        </ItemLink>
        <ItemLink to="#">
          accessories
        </ItemLink>
      </List>
    </Menu>
  </Nav>
);
