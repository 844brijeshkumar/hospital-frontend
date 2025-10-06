import api from './api';

export const getUsers = async () => {
  const res = await api.get('/api/users');
  return res.data;
};

export const getUserProfile = async (userId) => {
  const res = await api.get(`/api/users/${userId}`);
  return res.data;
};
