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

#### 删除标签页

::: demo

```html
<template>
  <ra-tabs ra-type="border-card" :ra-closeable="true" v-model="modelValue" @ra-tab-remove="removeClick($event)">
    <ra-tab-panel v-for="(item,index) in data" :ra-label="item.label" :ra-name="item.name">{{item.label}}
    </ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch, ref } from 'vue';

  export default defineComponent({
    setup() {
      const data = ref([{
          label:'电脑',
          name:'computed'
      },{
          label:'手机',
          name:'phone'
      },{
          label:'冰箱',
          name:'refrigerator'
      }]);
      const modelValue = ref('computed');
      const removeClick = (name)=>{
           data.value = data.value.filter(_=> _.name!==name);
      }
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
        removeClick,
        data
      };
    },
  });
</script>
```

:::



#### 添加标签页

::: demo

```html
<template>
  <ra-row :ra-gutter="[0,30]">
      <ra-col><ra-button @click="addTab">添加</ra-button></ra-col>
  </ra-row>
  <ra-tabs ra-type="border-card" :ra-closeable="true" v-model="modelValue" @ra-tab-remove="removeClick($event)">
    <ra-tab-panel v-for="(item,index) in data" :ra-label="item.label" :ra-name="item.name">{{item.label}}
    </ra-tab-panel>
  </ra-tabs>
</template>

<script>
  import { defineComponent, watch, ref } from 'vue';

  export default defineComponent({
    setup() {
      let index = 0;
      const data = ref([{
          label:'电脑',
          name:'computed'
      },{
          label:'手机',
          name:'phone'
      },{
          label:'冰箱',
          name:'refrigerator'
      }]);
      const modelValue = ref('computed');
      const removeClick = (name)=>{
           console.log(name);
           data.value = data.value.filter(_=> _.name!==name);
      }
      const addTab = () => {
         index++;
         data.value.push({
        	  label:'New Tab ' + index,
          	  name:'content_' + index
       });
      }
      watch(modelValue, () => {
        console.log(modelValue.value);
      });
      return {
        modelValue,
        removeClick,
        data,
        addTab
      };
    },
  });
</script>
```

:::