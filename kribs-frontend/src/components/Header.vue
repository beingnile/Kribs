<template>
  <nav>
    <div class="container">
      <router-link to="/">Home</router-link>
      <div v-if="isAuthenticated">
        <span>{{ user.name }}</span>
        <button @click="logout">Logout</button>
        <router-link to="/properties/create">Create Property</router-link>
      </div>
      <div v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'user']),
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
