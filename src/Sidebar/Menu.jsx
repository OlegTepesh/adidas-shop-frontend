import React, { Component } from 'react';
import { StyledMenu as Menu, Dropdown } from './styled';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <Menu isActive={this.state.isActive}>
        <Dropdown onClick={() => this.toggle()} isActive={this.state.isActive}>
          {this.props.title}
        </Dropdown>
        {this.state.isActive && this.props.children}
      </Menu>
    );
  }
}
