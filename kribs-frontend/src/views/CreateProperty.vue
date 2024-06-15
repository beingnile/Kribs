<template>
  <div>
    <Header />
    <div class="container">
      <h1>Create Property</h1>
      <form @submit.prevent="createProperty">
        <div>
          <label for="title">Title</label>
          <input type="text" v-model="title" required />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea v-model="description" required></textarea>
        </div>
        <div>
          <label for="price">Price</label>
          <input type="number" v-model="price" required />
        </div>
        <div>
          <label for="location">Location</label>
          <input type="text" v-model="location" required />
        </div>
        <div>
          <label for="image">Image</label>
          <input type="file" @change="onFileChange" required />
        </div>
        <button type="submit">Create</button>
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
      title: '',
      description: '',
      price: '',
      location: '',
      image: null,
    };
  },
  computed: {
    ...mapState(['error']),
  },
  methods: {
    ...mapActions(['createProperty']),
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    async createProperty() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('price', this.price);
      formData.append('location', this.location);
      formData.append('image', this.image);

      await this.createProperty(formData);
      this.$router.push('/');
    },
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
