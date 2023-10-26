<template>
  <div class="demo_tooltip">
    <div class="left">
      <ra-tooltip content="left-start文字" placement="left-start">
        <ra-button>左上</ra-button>
      </ra-tooltip>

      <ra-tooltip content="left文字" placement="left">
        <ra-button>左边</ra-button>
      </ra-tooltip>

      <ra-tooltip content="left-end文字" placement="left-end">
        <ra-button>左下</ra-button>
      </ra-tooltip>
    </div>

    <div class="top">
      <ra-tooltip content="top-start文字" placement="top-start">
        <ra-button>上左</ra-button>
      </ra-tooltip>

      <ra-tooltip content="top文字" placement="top">
        <ra-button>上边</ra-button>
      </ra-tooltip>

      <ra-tooltip content="top-end文字" placement="top-end">
        <ra-button>上右</ra-button>
      </ra-tooltip>
    </div>

    <div class="right">
      <ra-tooltip content="right-start文字" placement="right-start">
        <ra-button>上左</ra-button>
      </ra-tooltip>

      <ra-tooltip content="right文字" placement="right">
        <ra-button>上边</ra-button>
      </ra-tooltip>

      <ra-tooltip content="right-end文字" placement="right-end">
        <ra-button>上右</ra-button>
      </ra-tooltip>
    </div>

    <div class="bottom">
      <ra-tooltip content="bottom-start文字" placement="bottom-start">
        <ra-button>下左</ra-button>
      </ra-tooltip>

      <ra-tooltip content="bottom文字" placement="bottom">
        <ra-button>下边</ra-button>
      </ra-tooltip>

      <ra-tooltip content="bottom-end文字" placement="bottom-end">
        <ra-button>下右</ra-button>
      </ra-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
