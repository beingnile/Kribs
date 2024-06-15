export default {
  user: null,
  token: localStorage.getItem('token') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  properties: [],
  loading: false,
  error: null,
};
