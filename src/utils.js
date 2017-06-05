/* eslint import/prefer-default-export: 0 */

export const imageLink = (id, fileName, height = 512) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;
