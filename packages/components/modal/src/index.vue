<template>
  <div class="ra-modal" :style="{ zIndex: modalZIndex }">
    <transition name="ra-modal-fade" @after-leave="$emit('ra-on-after-close')">
      <div v-show="isShow" class="ra-modal__container" :style="containerStyle">
        <i
          v-if="showClose"
          class="ra-icon-close"
          @click="
            () => {
              isShow = false;
            }
          "
        ></i>
        <i :class="iconStyle" class="ra-modal__type-icon"></i>
        <div>
          <section class="ra-modal__title">
            <slot name="title">
              <h3 v-html="title"></h3>
            </slot>
          </section>
          <section class="ra-modal__content">
            <slot>
              <div v-html="content"></div>
            </slot>
          </section>
          <section class="ra-modal__footer">
            <slot name="footer">
              <ra-row justify="end" :gutter="[10]">
                <ra-col>
                  <ra-button
                    v-if="isShowCancel"
                    @click="handleCancelButtonClick"
                  >
                    {{ cancelLabel }}
                  </ra-button>
                </ra-col>
                <ra-col>
                  <ra-button
                    :disabled="isLoading"
                    type="primary"
                    @click="handleOkButtonClick"
                  >
                    <i v-if="isLoading" class="ra-icon-loading"></i>
                    {{ okLabel }}
                  </ra-button>
                </ra-col>
              </ra-row>
            </slot>
          </section>
        </div>
      </div>
    </transition>
    <div v-if="modal" class="ra-modal__mask" @click="handleMaskClick"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue';
import { RaButton, RaCol, RaRow } from '@radium-vue/components';
import PopupManager from '@radium-vue/utils/popup-manager';
import { modalType } from './type';
export default defineComponent({
  name: 'RaModal',
  components: {
    RaButton,
    RaRow,
    RaCol,
  },
  props: {
    title: {
      type: [String, Object],
      default: '',
    },
    content: {
      type: [String, Object],
      default: '',
    },
    width: {
      type: [String, Number],
      default: '50%',
    },
    top: {
      type: String,
      default: '15vh',
    },
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    dropClose: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    okLabel: {
      type: String,
      default: '确认',
    },
    cancelLabel: {
      type: String,
      default: '取消',
    },
    onOk: {
      type: Function,
      default: () => {
        return null;
      },
    },
    onCancel: {
      type: Function,
      default: () => {
        return null;
      },
    },
    type: {
      type: String,
      default: '',
    },
  },
  emits: ['ra-on-after-close'],
  setup(props) {
    const isShow = ref(false);
    const isLoading = ref(false);
    const isShowCancel = ref(true);
    const contentRef = ref<HTMLTemplateElement>();
    const modalZIndex = ref(PopupManager.getZIndex());

    const containerStyle = computed(() => {
      const ret: Record<string, string | number>[] = [];
      props.top && ret.push({ top: props.top });
      props.width && ret.push({ width: props.width });
      return ret;
    });
    const iconStyle = computed(() => {
      const ret: string[] = [];
      if (modalType.includes(props.type as any)) {
        if (props.type === 'confirm') {
          ret.push(`ra-icon-${'question'}`);
          return ret;
        }
        ret.push(`ra-icon-${props.type}`);
      }
      return ret;
    });

    watchEffect(() => {
      if (props.type === 'confirm') {
        isShowCancel.value = true;
      } else if (props.type) {
        isShowCancel.value = false;
      }
    });

    onMounted(() => {
      isShow.value = true;
    });

    // funs
    function handleMaskClick() {
      props.dropClose && (isShow.value = false);
    }

    async function handleOkButtonClick() {
      isLoading.value = true;
      await (props.onOk && props.onOk());
      isLoading.value = false;
      isShow.value = false;
    }

    async function handleCancelButtonClick() {
      isLoading.value = true;
      await (props.onCancel && props.onCancel());
      isLoading.value = false;
      isShow.value = false;
    }

    return {
      isShow,
      props,
      containerStyle,
      contentRef,
      isLoading,
      iconStyle,
      isShowCancel,
      modalZIndex,

      handleOkButtonClick,
      handleMaskClick,
      handleCancelButtonClick,
    };
  },
});
</script>
<style></style>
