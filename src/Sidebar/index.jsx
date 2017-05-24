import React, { Component } from 'react';
import Search from './Search';
import Navigation from './Navigation';
import {
  SearchWrapper,
  BrandLogo,
  BrandLogoLink,
  Aside,
  MenuButton,
} from './styled';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <Aside isOpen={this.state.isOpen}>
        <BrandLogoLink to="/">
          <BrandLogo
            src={require('./logo.svg')}
            x2={require('./logo.svg')}
            x3={require('./logo.svg')}
          />
        </BrandLogoLink>
        <MenuButton onClick={() => this.handleClick()}>
          <img src={require('./menu.svg')} alt="" />
        </MenuButton>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        <Navigation />
      </Aside>
    );
  }
}
