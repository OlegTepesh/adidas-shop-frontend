import React, { Component } from 'react';
import { MenuStyled, Dropdown } from './styled';

export default class Menu extends Component {
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
      <MenuStyled>
        <Dropdown
          onClick={() => this.handleClick()}
          isActive={this.state.isActive}
        >
          {this.props.title}
        </Dropdown>
        {this.state.isActive && this.props.children}
      </MenuStyled>
    );
  }
}
