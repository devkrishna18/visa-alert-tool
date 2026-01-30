import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const getAlerts = async () => {
  const res = await API.get("/alerts");
  return res.data;
};

export const createAlert = async (data) => {
  const res = await API.post("/alerts", data);
  return res.data;
};

export const updateStatus = async (id, status) => {
  const res = await API.put(`/alerts/${id}`, { status });
  return res.data;
};

export const deleteAlert = async (id) => {
  const res = await API.delete(`/alerts/${id}`);
  return res.data;
};
