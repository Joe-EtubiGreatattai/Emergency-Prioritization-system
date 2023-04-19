import { axiosClient } from "./axios";

export const getRequest = async (URL) => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  try {
    const response = await axiosClient.get(`${URL}`, {
      headers: { Authorization: "Bearer " + user.data.token },
    });
    return response;
  } catch (err) {
    // console.log(err.response);
    return err.response;
  }
};
