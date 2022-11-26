import { axiosInstance } from "apis";

const path = "/todo";

export const TodoApi = {
  createTodo: ({ content }) => {
    return axiosInstance.post(path + "/", { content });
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
