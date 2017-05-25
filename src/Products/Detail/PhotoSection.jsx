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
    this.state = { activePhoto: this.props.photos[0] };
  }

  handleChangePhoto(photo) {
    this.setState({ activePhoto: photo });
  }

  render() {
    return (
      <PhotoSection>
        <BigPhotoWrapper>
          <BigPhoto src={this.state.activePhoto} alt="" />
        </BigPhotoWrapper>
        <Previews>
          {this.props.photos.map(photo => (
            <Photo
              key={photo}
              src={photo}
              onClick={() => this.handleChangePhoto(photo)}
              alt=""
            />
          ))}
        </Previews>
      </PhotoSection>
    );
  }
}
