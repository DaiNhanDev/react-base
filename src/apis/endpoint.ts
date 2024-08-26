const END_POINT = {
  AUTH: {
    LOGIN: '/auth/login',
    GET_ME: '/user/me',
  },
  AUCTIONS: {
    CATEGORIES: '/auction/categories',
    GET_PRODUCT_BY_CATEGORY: (categoryId) =>
      `/auction/categories/products?categoryId=${categoryId}`,
    GET_PRODUCT: (auctionId) => `/auction/item/${auctionId}`,
  },
};

export default END_POINT;
