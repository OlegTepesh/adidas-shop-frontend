import React from 'react';
import Menu from './Menu';
import { Nav, ElementsList, Element } from './styled';

export default () => (
  <Nav>
    <Menu title="football" isActive>
      <ElementsList>
        <Element to="#">
          shoes
        </Element>
        <Element to="#">
          clothing
        </Element>
        <Element to="#">
          accessories
        </Element>
      </ElementsList>
    </Menu>
    <Menu title="running">
      <ElementsList>
        <Element to="#">
          shoes
        </Element>
        <Element to="#">
          clothing
        </Element>
        <Element to="#">
          accessories
        </Element>
      </ElementsList>
    </Menu>
    <Menu title="basketball">
      <ElementsList>
        <Element to="#">
          shoes
        </Element>
        <Element to="#">
          clothing
        </Element>
        <Element to="#">
          accessories
        </Element>
      </ElementsList>
    </Menu>
  </Nav>
);
