import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'component',
    path: '/component',
    component: defineAsyncComponent({
      loader: () => import('Pages/component.vue'),
    }),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
