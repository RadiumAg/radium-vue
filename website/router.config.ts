import { defineAsyncComponent, defineComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ComponentDocConfig from './nav.config.json';
import 'Pages/component.vue';

const componentChildrenRouters: RouteRecordRaw[] = [];

//error
// eslint-disable-next-line vue/one-component-per-file
const errorComponent = defineComponent({
  template: '<p>似乎并没有找到<p>',
});

// eslint-disable-next-line vue/one-component-per-file
const loadingComponent = defineComponent({
  template: '<p>稍等</p>',
});

const getDocComponent = (path: string) => {
  return getDefineAsyncComponent(() => import(`./src/docs/${path}.md`));
};

function getDefineAsyncComponent(func: () => Promise<unknown>) {
  return defineAsyncComponent({
    timeout: 3000,
    errorComponent,
    loadingComponent,
    loader: func,
  });
}
// set router
Object.keys(ComponentDocConfig).forEach(language => {
  ComponentDocConfig[language].forEach(comObj => {
    comObj['groups'].forEach(com => {
      const component = getDocComponent(`${com['name']}.${language}`);
      componentChildrenRouters.push({
        path: `${language}/${com['path']}`,
        component: component,
      });
    });
  });
});

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
    children: componentChildrenRouters,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
