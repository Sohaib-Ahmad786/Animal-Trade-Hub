import axios from "axios";

const API_URL = "http://localhost:3001/auth";

export const signup = async (name, email, password) => {
  return await axios.post(`${API_URL}/signup`, { name, email, password });
};

export const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
