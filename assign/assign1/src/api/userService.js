import { axiosApiInstance } from "../utils/axios";

export class UserService {
  static login(data) {
    return axiosApiInstance.post("/user/login", data);
  }
  static signUp(data) {
    return axiosApiInstance.post("/user/sign", data);
  }
}
