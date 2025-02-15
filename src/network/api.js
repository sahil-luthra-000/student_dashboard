import { ENDPOINTS } from "./networkConfig";
import axios from "axios";

function commonHeaders() {
  return {
    Authorization: "Bearer " + getAuthToken(),
    // "Content-Type": "multipart/form-data",
  };
}

function getAuthToken() {
  if (localStorage.getItem("authState")) {
    try {
      let token = JSON.parse(localStorage.getItem("authState")).token;
      return token;
    } catch (err) {
      console.log("Error:", err);
      return "";
    }
  }
  return "";
}
export const registerApi = async (data) => {
  // console.warn("Request:", loginDetails);
  let response = await axios({
    method: "post",
    url: ENDPOINTS.register,
    data: data,
  });
  return response;
};

export const loginApi = async (data) => {
  // console.warn("Request:", loginDetails);
  let response = await axios({
    method: "post",
    url: ENDPOINTS.login,
    data: data,
  });
  return response;
};

export const getProfileApi = async () => {
  // console.warn("Request:", loginDetails);
  let response = await axios({
    method: "get",
    url: ENDPOINTS.getProfile,
    headers: commonHeaders(),
  });
  return response;
};

export const updateProfileApi = async (id, data) => {
  // console.warn("Request:", loginDetails);
  console.log(data);
  let response = await axios({
    method: "put",
    url: `${ENDPOINTS.updateProfile}/${id}`,
    data: data,
    headers: {
      ...commonHeaders(),
    },
  });
  return response;
};

export const getCoursesApi = async () => {
  // console.warn("Request:", loginDetails);
  let response = await axios({
    method: "get",
    url: ENDPOINTS.getCourses,
  });
  return response;
};
