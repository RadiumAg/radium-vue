import { defineAsyncComponent, defineComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ComponentDocConfig from './nav.config.json';
import 'Pages/component.vue';
import { getLocalLanguage } from './src/core/common';

const componentChildrenRouters: RouteRecordRaw[] = [];

//error
// eslint-disable-next-line vue/one-component-per-file
const errorComponent = defineComponent({
  template:
    '<p style="width:100%;line-height:300px;text-align:center;font-weight:bold;">似乎并没有找到，请稍后再试，或者try again</p>',
});

//loading
// eslint-disable-next-line vue/one-component-per-file
const loadingComponent = defineComponent({
  template: `<p v-spin="{isShow:true , background:'hsla(0,0%,100%,.9)'}" style="height:500px"></p>`,
});

function getDefineAsyncComponent(func: () => Promise<unknown>) {
  return defineAsyncComponent({
    timeout: 30000,
    delay: 0,
    loadingComponent,
    errorComponent,
    loader: func,
  });
}

const getDocComponent = (path: string) => {
  return getDefineAsyncComponent(() =>
    import(
      /* webpackChunkName: "language" */ `./src/docs/${getLocalLanguage()}/${path}.md`
    ),
  );
};

// set router
Object.keys(ComponentDocConfig).forEach(language => {
  ComponentDocConfig[language].forEach(comObj => {
    comObj['groups'].forEach((com, index) => {
      if (index === 0) {
        componentChildrenRouters.push({
          path: '',
          redirect: { name: (com['path'] as string).toLowerCase() },
        });
      }
      const component = getDocComponent(`${com['path']}`);
      componentChildrenRouters.push({
        name: (com['path'] as string).toLowerCase(),
        path: `${language}/${com['path']}`,
        component,
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
