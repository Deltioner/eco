//const { default: axiosClient } = require("./axiosClient");
import axiosClient from "./axiosClients";

const addToCart = (payload) => axiosClient.post("/carts", payload);

export default {
  addToCart
};
