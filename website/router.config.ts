import { defineAsyncComponent, defineComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import 'Pages/component.vue';

//error
// eslint-disable-next-line vue/one-component-per-file
const errorComponent = defineComponent({
  template: '<p>似乎并没有找到<p>',
});

// eslint-disable-next-line vue/one-component-per-file
const loadingComponent = defineComponent({
  template: '<p>稍等</p>',
});

function getDefineAsyncComponent(func: () => Promise<unknown>) {
  return defineAsyncComponent({
    timeout: 3000,
    errorComponent,
    loadingComponent,
    loader: func,
  });
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/component',
    component: null,
  },
  {
    name: 'component',
    path: '/component',
    component: getDefineAsyncComponent(() => import('Pages/component.vue')),
    children: [
      {
        name: 'test',
        path: 'test',
        component: getDefineAsyncComponent(() => import(`./src/doc/test.md`)),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
