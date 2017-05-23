import React from 'react';
import Category from './Category';
import { Nav, ElementsList, Element } from './styled';

export default () => (
  <Nav>
    <Category title="football" isActive>
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
    </Category>
    <Category title="running">
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
    </Category>
    <Category title="basketball">
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
    </Category>
  </Nav>
);
