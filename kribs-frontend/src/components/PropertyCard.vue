<template>
  <div class="property-card">
    <img :src="property.imageUrl" alt="Property Image" />
    <div class="property-details">
      <h3>{{ property.title }}</h3>
      <p>{{ property.description }}</p>
      <router-link :to="{ name: 'PropertyDetails', params: { id: property._id } }">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.property-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  display: flex;
}

.property-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 16px;
}

.property-details {
  flex: 1;
}

.property-details h3 {
  margin: 0;
}

.property-details p {
  margin: 8px 0;
}
</style>
