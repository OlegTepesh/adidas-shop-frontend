import React from 'react';
import Gender from './Gender';
import Sizes from './Sizes';
import Icon from './Icon';
import { Filters } from './styled';

export default () => (
  <Filters>
    <Icon />
    <Gender />
    <Sizes />
  </Filters>
);
