<template>
  <ra-row :gutter="[0, 30]">
    <ra-col><ra-button @click="addTab">添加</ra-button></ra-col>
  </ra-row>
  <ra-tabs
    v-model="modelValue"
    type="border-card"
    closeable
    @tab-remove="removeClick($event)"
  >
    <ra-tab-panel
      v-for="(item, index) in data"
      :key="index"
      :label="item.label"
      :name="item.name"
      >{{ item.label }}
    </ra-tab-panel>
  </ra-tabs>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    let index = 0;
    const data = ref([
      {
        label: '电脑',
        name: 'computed',
      },
      {
        label: '手机',
        name: 'phone',
      },
      {
        label: '冰箱',
        name: 'refrigerator',
      },
    ]);
    const modelValue = ref('computed');

    const removeClick = name => {
      data.value = data.value.filter(_ => _.name !== name);
    };
    const addTab = () => {
      index++;
      data.value.push({
        label: `New Tab ${index}`,
        name: `content_${index}`,
      });
      modelValue.value = `content_${index}`;
    };

    return {
      modelValue,
      data,

      addTab,
      removeClick,
    };
  },
});
</script>
