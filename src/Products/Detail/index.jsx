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
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);

    this.state = {
      colorIndex: 0,
    };
  }

  handleChangeColor(colorIndex) {
    this.setState({ colorIndex });
  }

  render() {
    return (
      <Detail>
        <HeadSection>
          <HeadWrapper>
            <Name>
              ULTRA <br />BOOST
            </Name>
            <CircleButton color={colors[this.state.colorIndex]}>
              Save
            </CircleButton>
          </HeadWrapper>
          <HeadWrapper>
            <TopLine>
              <ColorPicker colors={colors} onChange={this.handleChangeColor} />
              <LabelWrapper>
                <Label />
              </LabelWrapper>
            </TopLine>
            <BottomLine>
              <Price color={colors[this.state.colorIndex]}>170$</Price>
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
