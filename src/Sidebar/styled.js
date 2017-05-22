import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

const SearchWrapper = styled.div`
  margin-top: 20px;
`;

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

const BrandLogo = styled(Image)`
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

const ElementsToggleAfter = `
  &:after {
    content: ' ';
    width: 15px;
    height: 15px;
    background: url(./group-2.png) no-repeat;
    position: absolute;
    top: 13px;
    margin-left: 7px;
  }
`;

const CategoryLink = styled(Link)`
  transition: 0.3s color ease-out;
  position: relative;
  display: block;
  font-size: 24px;
  line-height: 33px;
  color: ${props => (props.isActive ? '#fff' : '#303030')};
  text-decoration: none;
  margin-top: 30px;
  &:hover {
    color: #fff;
  }
  ${props => props.hasElements && ElementsToggleAfter}
`;

const ElementsList = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: 24px;
  line-height: 27px;
  font-family: 'AndaleMono';
  font-weight: normal;
`;

const Element = styled(Link)`
  display: block;
  transition: 0.3s color ease-out;
  color: ${props => (props.isActive ? '#fff' : '#3c3c3c')};
  text-decoration: none;
  margin-bottom: 25px;
  &:hover {
    color: #fff;
  }
`;

const Hamburger = styled.div`
  display: none;
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
  SearchWrapper,
  BrandLogo,
  BrandLogoLink,
  Aside,
  Nav,
  CategoryLink,
  ElementsList,
  Element,
  Hamburger,
};
