<template>
  <div>
    <Header />
    <div class="container">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go back to home</router-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
