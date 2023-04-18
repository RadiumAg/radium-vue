<template>
  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-disabled>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="primary">默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="success">成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="info">信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="warning">警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="danger">危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-disabled ra-plain>朴素按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="primary" ra-plain>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="success" ra-plain>成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="info" ra-plain>信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="warning" ra-plain>警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-disabled ra-type="danger" ra-plain>危险按钮</ra-button>
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup></script>
