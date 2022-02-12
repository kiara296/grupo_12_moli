import React from "react";
import axios from "axios";

export const httpUserService = {
    getUsers: async () => {
      const { data } = await axios.get(`api/users/allUsers`);
      return data;
    },

    getUserDetail: async (id) => {
      const { data } = await axios.get(`api/users/${id}/detail`);
      return data;
    },
  };