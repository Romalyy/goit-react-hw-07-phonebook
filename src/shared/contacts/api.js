import axios from "axios";

const instanse = axios.create({
  baseURL: "https://62d7001e51e6e8f06f1744a3.mockapi.io/contacts",
});

export const getPhone = async () => {
  const { data } = await instanse.get("/");
  return data;
};

export const deletePhone = async (id) => {
  const { data } = await instanse.delete(`/${id}`);
  return data;
};

export const addPhone = async (data) => {
  const { data: result } = await instanse.post("/", data);
  return result;
};