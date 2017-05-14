import styled from 'styled-components';

const Filters = styled.section`
  padding: 11px 24px;
  border-bottom: 3px solid rgba(231, 231, 231, .56);
  &>div {
    display: inline-block;
    vertical-align: middle;
  }
  @media (max-width: 992px) {
    &>div {
      display: block;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
  }
`;

const FilterName = styled.div`
  display: inline-block;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 33px;
  margin-right: 18px;
  color: #4d42f8;
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background-color: #ebebeb;
  @media (max-width: 992px) {
    margin-bottom: 11px;
  }
`;

const StyledButton = styled.button`
  transition: 0.3s color ease-out;
  display: inline-block;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 33px;
  border: none;
  background: none;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  font-weight: inherit;
  font-family: inherit;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    ${props => (props.isActive ? '' : 'color: rgba(77, 66, 248, .75)')}
  }
`;

const Gender = styled.div`
  margin-left: 30px;
`;

const Sizes = styled.div`
  margin-left: 50px;
  @media (min-width: 993px) and (max-width: 1050px) {
    display: block;
    margin-left: 0;
  }
`;

const FunnelIcon = styled.div`
  width: inherit;
  height: inherit;
  background: url("${require('./filter.png')}") center no-repeat;
`;

export {
  Filters,
  FilterName,
  IconWrapper,
  StyledButton,
  Gender,
  Sizes,
  FunnelIcon,
};
