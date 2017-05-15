import styled from 'styled-components';

const ProductsGrid = styled.section`
  padding: 20px 25px;
  > div {
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 992px) {
    padding: 20px 15px;
  }
`;

export default ProductsGrid;
