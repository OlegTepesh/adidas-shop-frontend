import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BrandLogoLink = styled(Link)`
  position: relative;
  display: inline-block;
  width: 94px;
  height: 94px;
  @media (max-width: 992px) {
    width: 45px;
    height: 52px;
  }
`;

const BrandLogo = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  @media (max-width: 992px) {
    width: inherit;
  }
`;

const Aside = styled.aside`
  flex: 28%;
  max-width: 414px;
  padding: 30px 22px;
  background-color: #0e0e0e;
  text-align: center;
  min-height: 100vh;
  position: relative;
  transition: .3s all ease-out;
  @media (max-width: 992px) {
    flex: 100%;
    max-width: 100%;
    min-height: auto;
    height: ${props => (props.isOpen ? 'auto' : '64px')};
    overflow: ${props => (props.isOpen ? 'visible' : 'hidden')};
    text-align: left;
    padding: 6px 15px;
  }
`;

const Nav = styled.nav`
  margin-top: 150px;
  @media (max-width: 992px) {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const StyledMenu = styled.div`
  margin-top: 30px;
  ${props => props.isActive && `
    padding-bottom: 20px;
  `}
`;

const Dropdown = styled.button`
  border: none;
  outline: 0;
  transition: 0.3s color ease-out;
  position: relative;
  display: block;
  font-size: 24px;
  line-height: 33px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin: auto;
  background: none;
  font-weight: bold;
  &:hover {
    color: #fff;
  }
  &:after {
    content: ' ';
    width: 14px;
    height: 9px;
    background: url(${require('./group-2.png')}) no-repeat;
    position: absolute;
    top: 12px;
    margin-left: 7px;
    transition: 0.2s transform ease-out;
    ${props => props.isActive && `
      transform: rotateX(180deg);
    `}
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 27px;
  font-family: 'AndaleMono';
  font-weight: normal;
  transition: 0.3s color ease-out;
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  text-decoration: none;
  margin-top: 25px;
  &:hover {
    color: #fff;
  }
`;

const MenuButton = styled.button`
  display: none;
  outline: 0;
  background: none;
  border: none;
  @media (max-width: 992px) {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 17px;
    width: 50px;
    height: 30px;
  }
`;

export {
  BrandLogo,
  BrandLogoLink,
  Aside,
  Nav,
  StyledMenu,
  Dropdown,
  StyledLink,
  MenuButton,
};
