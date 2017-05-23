/* eslint react/no-multi-comp: 0 */

import React, { Component } from 'react';
import { Nav, CategoryStyled, ElementsList, Element } from './styled';

const Categories = ['football', 'running', 'basketball'];
const Elements = ['shoes', 'clothing', 'accessories'];

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <CategoryStyled
        onClick={() => this.handleClick()}
        isActive={this.state.isActive}
      >
        {this.props.title}
        {this.state.isActive && this.props.children}
      </CategoryStyled>
    );
  }
}

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    return (
      <Nav>
        {Categories.map(category => (
          <Category key={category} title={category}>
            <ElementsList>
              {Elements.map(element => (
                <Element key={category + element} to="#">
                  {element}
                </Element>
              ))}
            </ElementsList>
          </Category>
        ))}
      </Nav>
    );
  }
}
