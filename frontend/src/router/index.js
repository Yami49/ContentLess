import { createRouter, createWebHistory } from 'vue-router';
import Home from '../component/Home.vue';
import ImpressumComponent from '@/components/ImpressumComponent.vue';
import DatenschutzComponent from '@/components/DatenschutzComponent.vue';
import KontaktComponent from '@/components/KontaktComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: ImpressumComponent },
  { path: '/datenschutz', component: DatenschutzComponent },
  { path: '/kontakt', component: KontaktComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;