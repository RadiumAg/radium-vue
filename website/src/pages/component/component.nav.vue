<template>
  <div class="nav">
    <ra-scrollbar :ra-wrap-style="[{ width: '100%', height: '100%' }]">
      <div v-for="(nav_item, index) in nav" :key="index" class="nav_item">
        <h4 class="nav_group_title">{{ nav_item['name'] }}</h4>
        <router-link
          v-for="(item, i) in nav_item['groups']"
          :key="i"
          class="nav_item_link"
          active-class="nav_item_link--active"
          :to="routerNav(item.path)"
        >
          {{ item['name'] }}
        </router-link>
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
      return `${path}`;
    },
  },
});
</script>

<style lang="scss" scoped>
$padding: 10px 0px 10px 25px;
.nav {
  position: absolute;
  left: 0;
  top: 50px;
  background-color: #fff;
  display: flex;
  justify-content: stretch;
  height: 100%;
  width: 200px;
  border-right: 1px solid #ebebeb;
  z-index: 2;

  .nav_item {
    color: #454d64;
    flex-basis: 100%;
    cursor: pointer;
    width: 100%;
  }

  .nav_group_title {
    font-size: 16px;
    padding: $padding;
    text-align: left;
  }

  .nav_item_link {
    font-family: ubuntu, -apple-system, SF UI Text, Arial, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    width: 100%;
    color: #454d64;
    position: relative;
    display: inline-block;
    text-align: left;
    font-size: 12px;
    padding: $padding;
    &:active {
      color: unset;
    }
    &::after {
      content: '';
      width: 4px;
      position: absolute;
      display: inline-block;
      height: 0;
      right: 0;
      top: 0;
      border-right: 4px solid #409eff;
    }
  }

  .nav_item_link--active {
    color: #409eff;
    background: linear-gradient(270deg, #f8faff, rgba(248, 250, 255, 0));
    &::after {
      transition: all 0.3s ease-in-out;
      height: 100%;
    }
  }
}
</style>
