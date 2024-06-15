<template>
  <div>
    <Header />
    <div class="container">
      <LoadingSpinner v-if="loading" />
      <div v-else>
        <h1>{{ property.title }}</h1>
        <img :src="property.imageUrl" alt="Property Image" />
        <p>{{ property.description }}</p>
        <p>{{ property.price }}</p>
        <p>{{ property.location }}</p>
        <div v-if="user && user.role === 'owner'">
          <router-link :to="{ name: 'EditProperty', params: { id: property._id } }">Edit</router-link>
          <button @click="deleteProperty">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Header from '../components/Header.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

export default {
  components: {
    Header,
    LoadingSpinner,
  },
  data() {
    return {
      property: null,
    };
  },
  computed: {
    ...mapState(['user', 'loading']),
  },
  created() {
    this.fetchProperty();
  },
  methods: {
    ...mapActions(['fetchProperties', 'deleteProperty']),
    async fetchProperty() {
      const id = this.$route.params.id;
      this.fetchProperties();
      this.property = this.$store.getters.allProperties.find(p => p._id === id);
    },
    async deleteProperty() {
      await this.deleteProperty(this.property._id);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
}

img {
  width: 100%;
  height: auto;
}

button {
  margin-top: 16px;
  padding: 8px 16px;
}
</style>
