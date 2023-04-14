import api from "../services/api";

export const add = async (body) => {
  await api.post("/list", body);
};

export const get = async () => {
  const { data } = await api.get(
    `/list/user-id/${localStorage.getItem("token")}`
  );

  return data;
};

export const edit = async (body, taskId) => {
  await api.patch(`/list/task-id/${taskId}`, body);
};

export const remove = async (taskId) => {
  await api.delete(`/list/task-id/${taskId}`);
};
