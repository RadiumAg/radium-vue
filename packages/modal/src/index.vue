<template>
  <div class="ra-modal" :style="{zIndex:modalZIndex}">
    <transition name="ra-modal-fade" @after-leave="$emit('ra-on-after-close')">
      <div
        v-show="isShow"
        class="ra-modal__container"
        :style="containerStyle"
      >
        <i v-if="raShowClose" class="ra-icon-close" @click="()=>{ isShow = false }"></i>
        <i :class="iconStyle" class="ra-modal__type-icon"></i>
        <div>
          <section class="ra-modal__title">
            <slot name="title">
              <h3 v-html="raTitle"></h3>
            </slot>
          </section>
          <section class="ra-modal__content">
            <slot>
              <div v-html="raContent"></div>
            </slot>
          </section>
          <section class="ra-modal__footer">
            <slot name="footer">
              <ra-row ra-justify="end" :ra-gutter="[10]">
                <ra-col>
                  <ra-button v-if="isShowCancel" @click="cancelButtonClick">{{ raCancelLabel }}</ra-button>
                </ra-col>
                <ra-col>
                  <ra-button :ra-disabled="isLoading" ra-type="primary" @click="okButtonClick">
                    <i v-if="isLoading" class="ra-icon-loading"></i>
                    {{ raOkLabel }}
                  </ra-button>
                </ra-col>
              </ra-row>
            </slot>
          </section>
        </div>
      </div>
    </transition>
    <div v-if="raModal" class="ra-modal__mask" @click="raMaskClick"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';
import RaButton from '@radium-vue/button';
import RaRow from '@radium-vue/row';
import RaCol from '@radium-vue/col';
import { modalType } from './modal';
import PopupManager from '@radium-vue/utils/popup-manager';
export default defineComponent({
  name: 'RaModal',
  components: {
    RaButton,
    RaRow,
    RaCol,
  },
  props: {
    raTitle: {
      type: [String,Object],
      default: '',
    },
    raContent: {
      type: [String, Object],
      default: '',
    },
    raWidth: {
      type: [String, Number],
      default: '50%',
    },
    raTop: {
      type: String,
      default: '15vh',
    },
    raModal: {
      type: Boolean,
      default: true,
    },
    raLockScroll: {
      type: Boolean,
      default: true,
    },
    raDropClose: {
      type: Boolean,
      default: true,
    },
    raShowClose: {
      type: Boolean,
      default: true,
    },
    raOkLabel: {
      type: String,
      default: '确认',
    },
    raCancelLabel: {
      type: String,
      default: '取消',
    },
    raOnOk: {
      type: Function,
      default:()=>{
        return null;
      },
    },
    raOnCancel: {
      type: Function,
      default:()=>{
        return null;
      },
    },
    raType: {
      type:String,
      default : '',
    },
  },
  emits: ['ra-on-after-close'],
  setup(props) {
    const isShow = ref(false);
    const contentRef = ref<HTMLTemplateElement>(null);
    const isLoading = ref(false);
    const isShowCancel = ref(true);
    const modalZIndex = ref(PopupManager.getZIndex());

    const containerStyle = computed(() => {
      const ret = [];
      props.raTop && ret.push({ top: props.raTop });
      props.raWidth && ret.push({ width: props.raWidth });
      return ret;
    });
    const iconStyle = computed(()=>{
      const ret = [];
      if(modalType.includes(props.raType as any)){

        if(props.raType ==='confirm'){
          ret.push(`ra-icon-${'question'}`);
          return ret;
        }
        ret.push(`ra-icon-${props.raType}`);
      }
      return ret;
    });

    watchEffect(()=>{
      if(props.raType ==='confirm'){
        isShowCancel.value = true;
      }else if(props.raType) {
        isShowCancel.value = false;
      }
    });

    onMounted(() => {
      isShow.value = true;
    });

    // funs
    function raMaskClick() {
      props.raDropClose && (isShow.value = false);
    }


    async function  okButtonClick(){
      isLoading.value = true;
      await (props.raOnOk && props.raOnOk());
      isLoading.value = false;
      isShow.value = false;
    }

    async function cancelButtonClick(){
      isLoading.value = true;
      await (props.raOnCancel && props.raOnCancel());
      isLoading.value = false;
      isShow.value = false;
    }

    // methods
    function raDestroy() {
      isShow.value = false;
    }

    return {
      isShow,
      props,
      containerStyle,
      raMaskClick,
      contentRef,
      raDestroy,
      cancelButtonClick,
      okButtonClick,
      isLoading,
      iconStyle,
      isShowCancel,
      modalZIndex,
    };
  },
});
</script>
<style></style>
