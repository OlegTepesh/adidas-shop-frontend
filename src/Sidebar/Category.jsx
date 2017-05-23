import React, { Component } from 'react';
import { CategoryStyled, Title } from './styled';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive || false,
    };
  }

  handleClick() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <CategoryStyled>
        <Title
          onClick={() => this.handleClick()}
          isActive={this.state.isActive}
        >
          {this.props.title}
        </Title>
        {this.state.isActive && this.props.children}
      </CategoryStyled>
    );
  }
}
