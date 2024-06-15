<template>
  <div>
    <Header />
    <div class="container">
      <h1>Properties</h1>
      <input type="text" v-model="searchQuery" @input="applyFilters" placeholder="Search properties..." />
      <select v-model="selectedFilter" @change="applyFilters">
        <option value="">All</option>
        <option value="location">Location</option>
        <option value="price">Price</option>
      </select>
      <LoadingSpinner v-if="loading" />
      <div v-else>
        <PropertyCard v-for="property in filteredProperties" :key="property._id" :property="property" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../components/Header.vue';
import PropertyCard from '../components/PropertyCard.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

export default {
  components: {
    Header,
    PropertyCard,
    LoadingSpinner,
  },
  data() {
    return {
      searchQuery: '',
      selectedFilter: '',
    };
  },
  computed: {
    ...mapGetters(['allProperties', 'loading']),
    filteredProperties() {
      let properties = this.allProperties;
      if (this.searchQuery) {
        properties = properties.filter(property =>
          property.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          property.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.selectedFilter) {
        if (this.selectedFilter === 'location') {
			properties.sort((a, b) => a.location.localeCompare(b.location));
        } else if (this.selectedFilter === 'price') {
			properties.sort((a, b) => a.price - b.price);
        }
      }
      return properties;
    },
  },
  created() {
    this.fetchProperties();
  },
  methods: {
    ...mapActions(['fetchProperties']),
    applyFilters() {
      this.filteredProperties;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
}

input {
  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
}

select {
  margin-bottom: 16px;
  padding: 8px;
  width: 100%;
}
</style>
