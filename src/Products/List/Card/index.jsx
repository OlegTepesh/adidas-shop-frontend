import React from 'react';
import {
  StyledCardLink,
  LabelWrapper,
  CardLabel,
  ProductPhoto,
  Price,
} from './styled';

const Card = props => (
  <StyledCardLink to={props.link}>
    {props.isSale && <LabelWrapper><CardLabel /></LabelWrapper>}
    <ProductPhoto src={props.img} alt="" />
    <Price isSale={props.isSale}>${props.price}</Price>
  </StyledCardLink>
);

export default Card;
