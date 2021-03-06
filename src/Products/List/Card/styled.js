import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../../components/Label';

const StyledCardLink = styled(Link)`
  background-color: #f4f4f4;
  padding: 9px;
  text-align: center;
  position: relative;
  text-decoration: none;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition: 0.2s all ease-out;
  &:hover {
    background-color: #e3e3e3;
  }
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

const LabelWrapper = styled.span`
  position: absolute;
  top: 17px;
  right: 17px;
`;

const CardLabel = styled(Label)`
  position: absolute;
  top: 17px;
  right: 17px;
`;

const ProductPhoto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Price = styled.span`
  margin-top: 6px;
  font-size: 30px;
  line-height: 40px;
  height: 90px;
  display: block;
  background: #fff;
  color: ${props => (props.isSale ? '#fff' : '#111')};
  padding: 25px 5px;
  ${props => props.isSale && 'background-image: linear-gradient(107deg, #0c09bf, #966dd8);'};
`;

export { StyledCardLink, LabelWrapper, CardLabel, ProductPhoto, Price };
