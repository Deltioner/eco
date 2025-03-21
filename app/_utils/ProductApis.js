import axiosClient from "./axiosClients";

const getLatestProducts = () => axiosClient.get("/products؟populate=*");

export default {
  getLatestProducts,
};
