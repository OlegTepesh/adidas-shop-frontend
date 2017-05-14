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
`;

const Aside = styled.aside`
  flex: 28%;
  max-width: 414px;
  padding: 31px 22px;
  background-color: #0e0e0e;
  text-align: center;
  min-height: 100vh;
  @media (max-width: 992px) {
    flex: 100%;
    max-width: 100%;
    min-height: auto;
  }
`;

const Nav = styled.nav`
  margin-top: 148px;
  @media (max-width: 992px) {
    margin-top: 40px;
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

export {
  SearchWrapper,
  BrandLogo,
  BrandLogoLink,
  Aside,
  Nav,
  CategoryLink,
  ElementsList,
  Element,
};
