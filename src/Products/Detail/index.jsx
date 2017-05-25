import React, { Component } from 'react';
import Label from '../../components/Label';
import ColorPicker from './ColorPicker';
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
  PhotoSection,
  BigPhotoWrapper,
  BigPhoto,
  Previews,
  Photo,
  DescriptionSection,
  TextAccent,
  BuyNowButton,
} from './styled';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[0],
    };
  }

  setColor(color) {
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
                  this.setColor(color);
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
        <PhotoSection>
          <BigPhotoWrapper>
            <BigPhoto src={require('./photos/bitmap-copy.png')} alt="" />
          </BigPhotoWrapper>
          <Previews>
            {' '}
            <Photo src={require('./photos/bitmap_2.png')} alt="" />
            <Photo src={require('./photos/bitmap.png')} alt="" />
            <Photo src={require('./photos/bitmap_3.png')} alt="" />
            <Photo src={require('./photos/bitmap-copy-2.png')} alt="" />
          </Previews>
        </PhotoSection>
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
