export default {
  isAuthenticated: state => !!state.token,
  userRole: state => (state.user ? state.user.role : null),
  allProperties: state => state.properties,
  loading: state => state.loading,
  error: state => state.error,
};
