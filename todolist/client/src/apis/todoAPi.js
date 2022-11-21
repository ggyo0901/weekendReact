import { axiosInstance } from "apis";

const path = "/todo";

export const TodoApi = {
  createTodo: ({ content, flag }) => {
    return axiosInstance.post(path + "/", { content, flag });
  },
  getTodo: () => {
    return axiosInstance.get(path + "/");
  },
  updateTodo: ({ data }) => {
    return axiosInstance.put(path + `/${data.id}`);
  },
  deleteTodo: ({ id }) => {
    return axiosInstance.delete(path + `/${id}`);
  },
};
