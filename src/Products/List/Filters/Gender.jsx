import React from 'react';
import Button from './Button';
import { Gender } from './styled';

export default () => (
  <Gender>
    <Button isActive>Man</Button>
    <Button>Woman</Button>
  </Gender>
);
