import styled from 'styled-components';

const Detail = styled.div`
  padding: 25px 30px 115px;
  position: relative;
  @media (max-width: 992px) {
    padding: 35px 15px 75px;
  }
`;

const HeadSection = styled.section`
  display: flex;
  position: absolute;
  left: 30px;
  right: 30px;
  top: 20px;
  justify-content: space-between;
  @media (max-width: 992px) {
    display: block;
    position: relative;
    left: auto;
    right: auto;
    top: auto;
  }
`;

const HeadWrapper = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Name = styled.h1`
  font-size: 64px;
  color: #3a3a3a;
  line-height: 1;
  margin: 0 0 15px 0;
  @media (max-width: 992px) {
    font-size: 36px;
    margin-bottom: 10px;
    & > br {
      display: none;
    }
  }
`;

const CircleButton = styled.button`
  width: 75px;
  height: 75px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  border: none;
  font-family: inherit;
  font-weight: inherit;
  background-color: #e3e3e3;
  color: #fff;
  &:focus {
    outline: 0;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const TopLine = styled.div`
  padding-top: 10px;
  @media (max-width: 992px) {
    padding-top: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const ColorPickerWrapper = styled.div`
  display: inline-block;
`;

const ColorPicker = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  outline: 0;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.1s all ease-out;
  background-color: ${props => props.color};
  &:hover {
    opacity: 0.7;
  }
`;

const LabelWrapper = styled.span`
  display: inline-block;
  margin-left: 30px;
  @media (max-width: 992px) {
    margin-left: 5px;
  }
`;

const BottomLine = styled.div`
`;

const Price = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
  text-align: right;
  margin: 20px 0 0 0;
  @media (max-width: 992px) {
    line-height: 1;
    text-align: left;
    margin: 0 0 10px 0;
  }
`;

const PhotoSection = styled.section`
  text-align: center;
  padding-top: 50px;
  @media (max-width: 992px) {
    padding-top: 15px;
  }
`;

const BigPhoto = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Previews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &>* {
    border: 5px solid transparent;
    margin-left: 15px;
  }
  &>img:hover,
  &>div:hover > button {
    border: 5px solid #e7e7e7;
  }
  @media (max-width: 992px) {
    justify-content: flex-start;
    &>* {
      max-width: 100%;
      height: 100%;
      width: 20%;
      margin-left: 10px;
    }
  }
`;

const MorePhoto = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  min-height: 100px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  width: 160px;
  border: none;
  background: none;
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: #e7e7e7;
  &+& {
    margin-top: 3px;
  }
`;

const MoreText = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #c0c0c0;
  text-align: left;
  align-self: center;
  margin-left: 30px;
  &>span {
    display: block;
  }
`;

const DescriptionSection = styled.section`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.5;
  color: #d8d8d8;
  margin-bottom: 50px;
  @media (max-width: 992px) {
    line-height: 1.4;
    font-size: 20px;
    margin-top: 25px;
  }
`;

const TextAccent = styled.span`
  color: #6e6e6e;
`;

const BuyNowButton = styled.button`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 414px;
  width: calc(100% - 414px);
  height: 115px;
  text-transform: uppercase;
  border: none;
  color: #fff;
  font-size: 32px;
  line-height: 44px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  &:hover {
    background-image: linear-gradient(to right, #3131c4, #1a1a6b);
  }
  @media (max-width: 1480px) {
    width: 72%;
    margin-left: 28%;
  }
  @media (max-width: 992px) {
    margin-left: 0;
    width: 100%;
    height: 74px;
  }
`;

export {
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
};
