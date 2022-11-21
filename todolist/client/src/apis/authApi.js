import { axiosInstance } from "apis";
import axios from "axios";

const path = "/user";
export const AuthApi = {
  // 객체의 키값으로 함수를 주는것
  login: ({ email, password }) => {
    return axiosInstance.post(path + "/login", { email, password });
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     throw new Error(err);
    //     //상위 예외 처리문으로 예외를 넘긴다.
    //   });
  },
  logout: () => {
    return axiosInstance.post(path + "/logout");
  },

  signup: ({ email, password }) => {
    return axiosInstance.post(path + `/signup`, { email, password });
  },
};
