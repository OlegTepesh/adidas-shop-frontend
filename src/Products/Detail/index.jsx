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
  BuyNowButton,
} from './styled';
import API from '../../api';
import { imageLink } from '../../utils';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.state = {
      url: props.match.url,
      colorIndex: 0,
      product: {},
      photos: [],
    };
  }

  componentDidMount() {
    this.fetchData(this.state.url);
  }

  fetchData(url) {
    fetch(API + url).then(
      (response) => {
        response.json().then((data) => {
          this.setState({
            product: data,
            photos: data.images.map(item => imageLink(item.id, item.fileName, 1024)),
          });
        });
      },
      (error) => {
        console.error(error);
      },
    );
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
              {this.state.product.title}
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
              <Price color={colors[this.state.colorIndex]}>{this.state.product.price}$</Price>
            </BottomLine>
          </HeadWrapper>
        </HeadSection>
        <PhotoSection photos={this.state.photos} />
        <DescriptionSection>
          <p>
            {this.state.product.description}
          </p>
        </DescriptionSection>
        <BuyNowButton>Buy now</BuyNowButton>
      </Detail>
    );
  }
}
