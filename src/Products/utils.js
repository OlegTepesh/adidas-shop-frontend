const imageLink = ({ id, fileName }, height = 1024) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

const transformInputValues = product => ({
  ...product,
  price: product.price / 100,
  images: product.images.map(image => ({
    full: imageLink(image),
    preview: imageLink(image, 512),
  })),
});

export { imageLink, transformInputValues };
