<template>
  <ra-tabs
    v-model="modelValue"
    ra-type="border-card"
    ra-closeable
    @ra-tab-remove="removeClick($event)"
  >
    <ra-tab-panel
      v-for="(item, index) in data"
      :key="index"
      :ra-label="item.label"
      :ra-name="item.name"
      >{{ item.label }}
    </ra-tab-panel>
  </ra-tabs>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
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

    watch(modelValue, () => {
      console.log(modelValue.value);
    });

    return {
      modelValue,
      removeClick,
      data,
    };
  },
});
</script>
