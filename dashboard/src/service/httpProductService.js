import React from "react";
import axios from "axios";

export const httpProductService = {
  getProducts: async () => {
    const { data } = await axios.get(`${REST_SERVER_URL}/api/products/catalog`);
    return data;
  },
  getProductDetail: async (id) => {
    const { data } = await axios.get(`${REST_SERVER_URL}/api/products/${id}/detail`);
    return data;
  },
};