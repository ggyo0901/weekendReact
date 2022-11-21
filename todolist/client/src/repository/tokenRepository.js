const TOKEN_KEY = "token";
export const TokenRepository = {
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  //중복된 토큰 키값이 set되면 update 그래서 update가없는것
  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};
