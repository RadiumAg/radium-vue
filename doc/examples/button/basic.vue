<template>
  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="primary">主要按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="success">成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="info">信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="warning">警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="danger">危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-plain>朴素按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="primary" ra-plain>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="success" ra-plain>成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="info" ra-plain>信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="warning" ra-plain>警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="danger" ra-plain>危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-round>默认按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="primary" ra-round>主要按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="success" ra-round>成功按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="info" ra-round>信息按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="warning" ra-round>警告按钮</ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-type="danger" ra-round>危险按钮</ra-button>
    </ra-col>
  </ra-row>

  <ra-row class="ra-button-demo" :ra-gutter="[10, 10]">
    <ra-col>
      <ra-button ra-icon="ra-icon-search" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-edit" ra-type="primary" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button
        ra-icon="ra-icon-check"
        ra-type="success"
        ra-circle
      ></ra-button>
    </ra-col>
    <ra-col>
      <ra-button ra-icon="ra-icon-message" ra-type="info" ra-circle></ra-button>
    </ra-col>
    <ra-col>
      <ra-button
        ra-icon="ra-icon-star-off"
        ra-type="warning"
        ra-circle
      ></ra-button>
    </ra-col>
    <ra-col>
      <ra-button
        ra-icon="ra-icon-delete"
        ra-type="danger"
        ra-circle
      ></ra-button>
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup></script>
