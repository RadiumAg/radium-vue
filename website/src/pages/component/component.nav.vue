<template>
  <div class="nav">
    <ra-scrollbar :ra-wrap-style="[{ width: '100%' }]">
      <div v-for="(nav_item, index) in nav" :key="index" class="nav_item">
        <h4 class="nav_group_title">{{ nav_item['name'] }}</h4>
        <div
          v-for="(item, i) in nav_item['groups']"
          :key="i"
          class="nav_groups"
        >
          <router-link
            active-class="nav_group_title--active"
            :to="routerNav(item.path)"
          >
            {{ item['name'] }}
          </router-link>
        </div>
      </div>
    </ra-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import componentNavConfigs from '../../../nav.config.json';
export default defineComponent({
  name: 'ComponentNav',
  data() {
    return {
      componentNavConfigs,
    };
  },
  computed: {
    localLanguage() {
      return localStorage.getItem('RADIUM_LANGUAGE') || 'zh';
    },
    nav() {
      return componentNavConfigs[this.localLanguage];
    },
  },
  methods: {
    routerNav(path: string) {
      return `../${this.localLanguage}/${path}`;
    },
  },
});
</script>

<style lang="scss" scoped>
$padding: 10px 50px;
.nav {
  background-color: #fff;
  display: flex;
  justify-content: stretch;
  height: 100%;
  width: 200px;
  border-right: 1px solid grey;

  .nav_item {
    color: #454d64;
    flex-basis: 100%;
    cursor: pointer;
    width: 100%;
  }

  .nav_groups {
    width: 100%;
    height: 100%;
  }

  .nav_group_title {
    font-size: 14px;
    padding: $padding;
    text-align: left;
  }

  .nav_group_title--active {
    position: relative;
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 4px;
      height: 100%;
      border-right: 4px solid aqua;
      right: 0;
    }
  }
}
</style>
