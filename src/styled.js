import styled from 'styled-components';

const Application = styled.div`
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
  }
`;

const Main = styled.main`
  flex: 72%;
  @media (max-width: 992px) {
    flex: 100%;
  }
`;

export { Application, ContentWrapper, Main };
