import React, { Component } from 'react';
import Search from './Search';
import Navigation from './Navigation';
import { BrandLogo, BrandLogoLink, Aside, MenuButton } from './styled';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Aside isOpen={this.state.isOpen}>
        <BrandLogoLink to="/">
          <BrandLogo src={require('./logo.svg')} />
        </BrandLogoLink>
        <MenuButton onClick={() => this.handleClick()}>
          <img src={require('./menu.svg')} alt="" />
        </MenuButton>
        <Search />
        <Navigation />
      </Aside>
    );
  }
}
