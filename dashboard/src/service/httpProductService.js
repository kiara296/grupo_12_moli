import axios from "axios";
import { constants } from "../constants/constants";

export const httpProductService = {

  getProducts: async (page) => {
    const { data } = await axios.get(`api/products/catalog?page=${page}`);
    console.log(data);
    return data;
  },

  /* getProducts: async () => {
    const { data } = await axios.get(`${constants.REST_SERVER_URL}/api/products/catalog`);
    return data;
  }, */
  getProductDetail: async (id) => {
    const { data } = await axios.get(`${constants.REST_SERVER_URL}/api/products/${id}/detail`);
    return data;
  },
};