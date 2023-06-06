import api from "./api";

const allProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

const ratedProducts = async () => {
  const response = await api.get("products/bestseller");
  return response.data;
};

const getCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

export { allProducts, ratedProducts, getCategories };
