import api from '../api';

export default {
  async login({ commit }, credentials) {
    commit('setLoading', true);
    try {
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      commit('setUser', data.user);
      commit('setToken', data.token);
      commit('setRefreshToken', data.refreshToken);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async register({ commit }, userData) {
    commit('setLoading', true);
    try {
      await api.post('/auth/register', userData);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async fetchProperties({ commit }) {
    commit('setLoading', true);
    try {
      const { data } = await api.get('/properties');
      commit('setProperties', data);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async createProperty({ commit }, propertyData) {
    commit('setLoading', true);
    try {
      await api.post('/properties', propertyData);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async updateProperty({ commit }, { id, propertyData }) {
    commit('setLoading', true);
    try {
      await api.put(`/properties/${id}`, propertyData);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async deleteProperty({ commit }, id) {
    commit('setLoading', true);
    try {
      await api.delete(`/properties/${id}`);
    } catch (error) {
      commit('setError', error.response.data.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async logout({ commit }) {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    commit('setUser', null);
    commit('setToken', '');
    commit('setRefreshToken', '');
  },
};
