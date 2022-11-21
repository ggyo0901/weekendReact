import axios from "axios";
import { TokenRepository } from "repository/tokenRepository";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // withCredentials: true,
  //백엔드와 쿠키값을 공유하는 설정

  //헤더설정부터 싲가해서 다양한 옵션들이 존재하니까 경우에 따라 옵션을 사용자 지정의 (여러분들마음대로) 로 설정하여 초기 config를 만들 수있다
});

// refresh token
// p.s

// axiosInstance.interceptors.response.use((response)=>{
// return response;
// },
// async (error)=>{
//   const originalRequest=error.config
//   if(error.response.data='token expired'){
//     /**
//      * 만얀 refresh토큰이 있는지 확인
//      * refresh 토큰으로 access token을 재발급 (await)
//      * 그리고 그 access token을 다시 TokenRepository.setToken()
//      * header에 심어서 원래 요청을 다시요청
//      *
//      * originalRequest._retry=true
//      */
//   }
// }
// )

axiosInstance.interceptors.request.use((config) => {
  const token = TokenRepository.getToken();
  if (token) {
    config.headers.Authorization = ` ${token}`;
  }
  return config;
});
