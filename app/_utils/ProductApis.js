const { default: axiosClient } = require('./axiosClients');

// هذا يجلب المنتجات الأخيرة
const getLatestProducts = () => axiosClient.get("/products?populate=*");

// هذا يجلب المنتج باستخدام الـ ID الرقمي (id: 21 مثلاً)
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

// هذا يجلب المنتج باستخدام documentId (UUID مثل: yzn5t4ptbz4hief0eoxxh1zk)
const getProductByDocumentId = (documentId) =>
  axiosClient.get(`/products?filters[documentId][$eq]=${documentId}&populate=*`);

// جلب المنتجات حسب الفئة
const getProductsByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProducts,
  getProductById,
  getProductsByCategory,
  getProductByDocumentId
};
