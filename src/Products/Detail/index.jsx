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

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];
const API = 'https://erodionov-adidas-fake-api.now.sh/v1';
const imageLink = (id, fileName, height = 1024) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

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
            photos: data.images.map(item => imageLink(item.id, item.fileName)),
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
