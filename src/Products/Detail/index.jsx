import React from 'react';
import Label from '../../components/Label';
import {
  Detail,
  HeadSection,
  HeadWrapper,
  Name,
  CircleButton,
  TopLine,
  ColorPickerWrapper,
  ColorPicker,
  LabelWrapper,
  BottomLine,
  Price,
  PhotoSection,
  BigPhoto,
  Previews,
  MorePhoto,
  HamburgerButton,
  HamburgerLine,
  MoreText,
  DescriptionSection,
  TextAccent,
  BuyNowButton,
} from './styled';

const WideHamburger = () => (
  <HamburgerButton>
    <HamburgerLine />
    <HamburgerLine />
    <HamburgerLine />
  </HamburgerButton>
);

const SeeMorePhoto = () => (
  <MorePhoto>
    <WideHamburger />
    <MoreText>
      <span>see </span><span>more </span><span>photo</span>
    </MoreText>
  </MorePhoto>
);

export default () => (
  <Detail>
    <HeadSection>
      <HeadWrapper>
        <Name>
          ULTRA <br />BOOST
        </Name>
        <CircleButton>
          Save
        </CircleButton>
      </HeadWrapper>
      <HeadWrapper>
        <TopLine>
          <ColorPickerWrapper>
            <ColorPicker color="#c5c5c5" />
            <ColorPicker color="#4d87ca" />
            <ColorPicker color="#4a4a4a" />
            <ColorPicker color="#e0e0e0" />
          </ColorPickerWrapper>
          <LabelWrapper>
            <Label />
          </LabelWrapper>
        </TopLine>
        <BottomLine>
          <Price>170$</Price>
        </BottomLine>
      </HeadWrapper>
    </HeadSection>
    <PhotoSection>
      <BigPhoto>
        <img src={require('./photos/bitmap-copy.jpg')} alt="" />
      </BigPhoto>
      <Previews>
        {' '}
        <img src={require('./photos/bitmap_2.jpg')} alt="" />
        <img src={require('./photos/bitmap.jpg')} alt="" />
        <img src={require('./photos/bitmap_3.jpg')} alt="" />
        <img src={require('./photos/bitmap-copy-2.jpg')} alt="" />
        <SeeMorePhoto />
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
