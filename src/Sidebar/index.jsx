import React, { Component } from 'react';
import Search from './Search';
import {
  SearchWrapper,
  BrandLogo,
  BrandLogoLink,
  Aside,
  Nav,
  CategoryLink,
  ElementsList,
  Element,
  Hamburger,
} from './styled';

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
          <BrandLogo
            src={require('./logo.png')}
            x2={require('./logo@2x.png')}
            x3={require('./logo@3x.png')}
          />
        </BrandLogoLink>
        <Hamburger onClick={() => this.handleClick()}>
          <img src={require('./menu.svg')} alt="" />
        </Hamburger>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        {/* <!-- SIDENAVIGATION--> */}
        <Nav>
          <CategoryLink to="#">
            SPORTS
          </CategoryLink>
          <ElementsList>
            <Element className="elements-list-item active" to="#">
              SHOES
            </Element>
            <Element className="elements-list-item" to="#">CLOTHING</Element>
            <Element className="elements-list-item" to="#">ACCESORIES</Element>
          </ElementsList>
          <CategoryLink className="sidenav-category" to="#">
            BRANDS
          </CategoryLink>
          <CategoryLink className="sidenav-category" to="#">
            MICOACH
          </CategoryLink>
        </Nav>
        {/* <!-- !SIDENAVIGATION!--> */}
      </Aside>
    );
  }
}
