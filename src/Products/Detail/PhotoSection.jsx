import React, { Component } from 'react';
import {
  PhotoSection,
  BigPhotoWrapper,
  BigPhoto,
  Previews,
  Photo,
} from './styled';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePhotoIndex: 0,
    };
  }

  handleChangePhoto(activePhotoIndex) {
    this.setState({ activePhotoIndex });
  }

  render() {
    return (
      <PhotoSection>
        <BigPhotoWrapper>
          <BigPhoto
            src={this.props.photos[this.state.activePhotoIndex]}
            alt=""
          />
        </BigPhotoWrapper>
        <Previews activePhotoIndex={this.state.activePhotoIndex}>
          {this.props.photos.map((photo, i) => (
            <Photo
              key={photo}
              src={photo}
              isActive={this.state.activePhotoIndex === i}
              onClick={() => this.handleChangePhoto(i)}
              alt=""
            />
          ))}
        </Previews>
      </PhotoSection>
    );
  }
}
