import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const getCategories = () => {
  return AxiosClient.get(END_POINT.AUCTIONS.CATEGORIES);
};
const getProductsByCategory = (categoryId: string) => {
  return AxiosClient.get(
    END_POINT.AUCTIONS.GET_PRODUCT_BY_CATEGORY(categoryId),
  );
};

const getProduct = (auctionId: string) => {
  return AxiosClient.get(END_POINT.AUCTIONS.GET_PRODUCT(auctionId));
};
export { getCategories, getProductsByCategory, getProduct };
