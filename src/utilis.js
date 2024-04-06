import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export const ALLOWED_CATEGORIES = {
    All: 'All Products',    
    Men: 'Men\'s Clothing',
    Women:'Women\'s Clothing',
}
export const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
  
};
export const fetchCategoryProducts = async (category) => {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
  return response.data;
};