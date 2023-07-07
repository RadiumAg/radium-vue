<template>
  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="primary">主要按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="success">成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="info">信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="warning">警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="danger">危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button plain>朴素按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="primary" plain>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="success" plain>成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="info" plain>信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="warning" plain>警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="danger" plain>危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-round>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="primary" ra-round>主要按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="success" ra-round>成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="info" ra-round>信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="warning" ra-round>警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button type="danger" ra-round>危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-icon="ra-icon-search" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-edit" type="primary" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-check" type="success" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-message" type="info" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button
        ra-icon="ra-icon-star-off"
        type="warning"
        ra-circle
      ></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-delete" type="danger" ra-circle></ra-button>
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup></script>
