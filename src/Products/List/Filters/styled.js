import styled from 'styled-components';

const Filters = styled.section`
  padding: 10px 32px;
  border-bottom: 3px solid rgba(231, 231, 231, .56);
  @media (max-width: 992px) {
    padding: 1rem 2rem;
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
  display: inline-block;
  vertical-align: middle;
  @media (max-width: 992px) {
    display: none;
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
  display: inline-block;
  vertical-align: middle;
  & :first-child {
    margin-right: 12px;
  }
  @media (max-width: 992px) {
    display: block;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Sizes = styled.div`
  margin-left: 50px;
  display: inline-block;
  vertical-align: middle;
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
