import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';
import ProductsGrid from './styled';

const API = 'https://erodionov-adidas-fake-api.now.sh/v1';

const CardCol = props => (
  <Col xs={12} sm={6} md={6} lg={4}>
    {props.children}
  </Col>
);

const imageLink = (id, fileName, height = 512) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      products: [],
      url: props.match.url,
    };
  }

  componentDidMount() {
    this.fetchData(this.state.url);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.match.url);
  }

  fetchData(url) {
    fetch(API + url).then(
      (response) => {
        response.json().then((data) => {
          this.setState({ url, products: data.items });
        });
      },
      (error) => {
        console.error(error);
      },
    );
  }

  render() {
    return (
      <div>
        <Filters />
        <ProductsGrid>
          <Grid fluid>
            <Row>
              {this.state.products.map((card, i) => (
                <CardCol key={card.id}>
                  <Card
                    img={imageLink(card.images[0].id, card.images[0].fileName)}
                    link={`${this.state.url}/${card.id}`}
                    price={card.price}
                    isSale={i % 5 === 0}
                  />
                </CardCol>
              ))}
            </Row>
          </Grid>
        </ProductsGrid>
      </div>
    );
  }
}
