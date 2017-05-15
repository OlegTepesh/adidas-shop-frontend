import styled from 'styled-components';

const Filters = styled.section`
  padding: 10px 25px;
  border-bottom: 3px solid rgba(231, 231, 231, .56);
  &>div {
    display: inline-block;
    vertical-align: middle;
  }
  @media (max-width: 992px) {
    padding: 15px;
    &>div {
      display: block;
    }
  }
`;

const FilterName = styled.div`
  display: inline-block;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 33px;
  margin-right: 20px;
  color: #4d42f8;
`;

const IconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background-color: #ebebeb;
  @media (max-width: 992px) {
    display: none !important;
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
  padding: 0;
  margin-right: 6px;
  &:focus {
    outline: 0;
  }
  &:hover {
    ${props => (props.isActive ? '' : 'color: rgba(77, 66, 248, .75)')}
  }
`;

const Gender = styled.div`
  margin-left: 30px;
  & :first-child {
    margin-right: 12px;
  }
  @media (max-width: 992px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Sizes = styled.div`
  margin-left: 50px;
  @media (max-width: 992px) {
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
