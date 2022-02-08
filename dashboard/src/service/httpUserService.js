import React from "react";
import axios from "axios";

export const httpProductService = {
    getUsers: async () => {
      const { data } = await axios.get(`${REST_SERVER_URL}/api/users/allUsers`);
      return data;
    },
    getUserDetail: async (id) => {
      const { data } = await axios.get(`${REST_SERVER_URL}/api/users/${id}/detail`);
      return data;
    },
  };