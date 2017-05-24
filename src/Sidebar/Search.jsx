import React from 'react';
import styled from 'styled-components';

const SeacrhInput = styled.input`
  color: #fff;
  font-size: 22px;
  line-height: 50px;
  padding: 0 15px 0 50px;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background: url(${require('./group.png')}) 14px center/28px 30px no-repeat;
  background-color: inherit;
  border: none;
  border-bottom: 4px solid rgba(55, 55, 55, 0.56);
  transition: all 0.3s ease-out;
  text-transform: uppercase;
  &:focus {
    outline: 0;
    border-bottom-color: rgba(255, 255, 255, 0.85);
  }
`;

export default () => <SeacrhInput type="text" />;
