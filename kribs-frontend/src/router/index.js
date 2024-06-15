import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import PropertyDetails from '../views/PropertyDetails.vue';
import CreateProperty from '../views/CreateProperty.vue';
import EditProperty from '../views/EditProperty.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/property/:id',
    name: 'PropertyDetails',
    component: PropertyDetails,
  },
  {
    path: '/property/create',
    name: 'CreateProperty',
    component: CreateProperty,
  },
  {
    path: '/property/edit/:id',
    name: 'EditProperty',
    component: EditProperty,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
