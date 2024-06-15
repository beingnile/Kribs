export default {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  setProperties(state, properties) {
    state.properties = properties;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
};
