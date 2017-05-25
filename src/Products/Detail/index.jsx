import React, { Component } from 'react';
import Label from '../../components/Label';
import ColorPicker from './ColorPicker';
import PhotoSection from './PhotoSection';
import {
  Detail,
  HeadSection,
  HeadWrapper,
  Name,
  CircleButton,
  TopLine,
  LabelWrapper,
  BottomLine,
  Price,
  DescriptionSection,
  TextAccent,
  BuyNowButton,
} from './styled';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

const photos = [
  'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw773341ba/zoom/BA8842_01_standard.jpg',
  'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwa1a41100/zoom/BA8842_02_standard.jpg',
  'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwba3c7ca9/zoom/BA8842_03_standard.jpg',
  'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw78a9db39/zoom/BA8842_04_standard.jpg',
  'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw1a4d7341/zoom/BA8842_05_standard.jpg',
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[0],
    };
  }

  handleChangeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Detail>
        <HeadSection>
          <HeadWrapper>
            <Name>
              ULTRA <br />BOOST
            </Name>
            <CircleButton color={this.state.color}>
              Save
            </CircleButton>
          </HeadWrapper>
          <HeadWrapper>
            <TopLine>
              <ColorPicker
                colors={colors}
                onChange={(color) => {
                  this.handleChangeColor(color);
                }}
              />
              <LabelWrapper>
                <Label />
              </LabelWrapper>
            </TopLine>
            <BottomLine>
              <Price color={this.state.color}>170$</Price>
            </BottomLine>
          </HeadWrapper>
        </HeadSection>
        <PhotoSection photos={photos} />
        <DescriptionSection>
          <p>
            {' '}
            <TextAccent>Adidas </TextAccent>
            is a German multinational corporation, headquartered in Herzogenaurach,
            Germany, that designs and manufactures shoes, clothing and accessories.
            {' '}
          </p>
        </DescriptionSection>
        <BuyNowButton>Buy now</BuyNowButton>
      </Detail>
    );
  }
}
