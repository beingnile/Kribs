<template>
  <div>
    <Header />
    <div class="container">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(['error']),
  },
  methods: {
    ...mapActions(['register']),
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
}

form {
  display: flex;
  flex-direction: column;
}

form div {
  margin-bottom: 16px;
}

.error {
  color: red;
  margin-top: 16px;
}
</style>
