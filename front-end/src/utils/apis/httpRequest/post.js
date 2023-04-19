import { axiosClient } from "./axios";

export const postRequest = async (URL, data, useToken = true) => {
  try {
    const response = await axiosClient.post(`${URL}`, data, headers, {
      withCredentials: true,
    });
    // console.log(response);
    return response;
  } catch (err) {
    // console.log(err.response, data);
    return err.response;
  }
};
