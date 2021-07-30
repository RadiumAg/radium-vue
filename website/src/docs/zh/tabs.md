# Tabs 标签页

#### 基础使用

::: demo

```html
<template>
  <ra-tabs v-model="modelValue">
    <ra-tab-panel raLabel="电脑" raName="computed">电脑</ra-tab-panel>
    <ra-tab-panel raLabel="手机" raName="phone">手机</ra-tab-panel>
    <ra-tab-panel raLabel="冰箱" raName="Refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch } from 'vue';

  export default defineComponent({
    setup() {
      const modelValue = ref('phone');
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
      };
    },
  });
</script>
```

:::

#### 卡片化

设置`raType`为`card`可以设置为选项卡类型

::: demo

```html
<template>
  <ra-tabs raType="card" v-model="modelValue">
    <ra-tab-panel raLabel="电脑" raName="computed">电脑</ra-tab-panel>
    <ra-tab-panel raLabel="手机" raName="phone">手机</ra-tab-panel>
    <ra-tab-panel raLabel="冰箱" raName="Refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch } from 'vue';

  export default defineComponent({
    setup() {
      const modelValue = ref('phone');
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
      };
    },
  });
</script>
```

:::

#### 边框卡片

设置`raType`为`border-card`可以设置为选项卡类型

::: demo

```html
<template>
  <ra-tabs ra-type="border-card" v-model="modelValue">
    <ra-tab-panel raLabel="电脑" raName="computed">电脑</ra-tab-panel>
    <ra-tab-panel raLabel="手机" raName="phone">手机</ra-tab-panel>
    <ra-tab-panel raLabel="冰箱" raName="Refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch } from 'vue';

  export default defineComponent({
    setup() {
      const modelValue = ref('computed');
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
      };
    },
  });
</script>
```

:::

#### 增减

::: demo

```html
<template>
  <ra-tabs ra-type="border-card" :ra-closeable="true" v-model="modelValue" @ra-close-click="removeClick($event)">
    <ra-tab-panel raLabel="电脑" raName="computed">电脑</ra-tab-panel>
    <ra-tab-panel raLabel="手机" raName="phone">手机</ra-tab-panel>
    <ra-tab-panel raLabel="冰箱" raName="Refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch } from 'vue';

  export default defineComponent({
    setup() {
      const modelValue = ref('computed');
      const removeClick = (name)=>{
           console.log(name);
      }
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
          removeClick,
      };
    },
  });
</script>
```

:::