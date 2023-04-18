<template>
  <div v-spin="{ isShow: true }" style="height: 500px">11111111111</div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const sliderValue = ref(0);

    return {
      sliderValue,
    };
  },
});
</script>
