<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  provide,
  ref,
  nextTick,
  watch,
  Slots,
  createVNode,
  render,
  VNode,
  computed,
  h,
  reactive,
} from 'vue';
import RaTabBar from './tab-bar.vue';
import {
  TTabPosition,
  TTabsType,
  TABS_PROVIDE_TOKEN,
  ITabsProvide,
  TAB_UPDATE_EVENT,
  ITabPanel,
} from '.';

export default defineComponent({
  name: 'RaTabs',
  components: { RaTabBar },
  props: {
    modelValue: {
      type: String,
      defalult: '',
    },
    raType: {
      type: String as PropType<TTabsType>,
      default: '',
    },
    raCloseable: {
      type: Boolean,
      default: false,
    },
    raTabPosition: {
      type: String as PropType<TTabPosition>,
      default: 'top',
    },
  },
  emits: [
    'ra-tab-click',
    'ra-tab-remove',
    'ra-tab-add',
    'ra-edit',
    TAB_UPDATE_EVENT,
  ],
  setup(props, { emit, slots }) {
    const currentWidth = ref(0);
    const currentPosition = ref(0);
    const currentTabIndex = ref<number>(0);
    const contentSlot = ref<Slots>(undefined);
    const tabPanelItems = reactive<ITabPanel[]>([]);
    const wrapClass = computed(() => {
      const ret = ['ra-tabs__wrap'];
      props.raType && ret.push(`is-${props.raType}`);
      return ret;
    });
    const raTabRemove = (delValue: number | string) => {
      emit('ra-tab-remove', delValue);
    };
    const navClass = computed(() => {
      const ret = ['ra-tabs__nav'];
      props.raType && ret.push(`is-${props.raType}`);
      return ret;
    });
    const tabClass = computed(() => {
      const ret = ['ra-tabs'];
      props.raType && ret.push(`is-${props.raType}`);
      return ret;
    });
    const contentClass = computed(() => {
      const ret = ['ra-tabs__content'];
      props.raType && ret.push(`is-${props.raType}`);
      return ret;
    });
    const contentRef = ref<VNode>(h('div', { class: contentClass.value }));
    const provideConfig = {
      tabPanelItems,
      currentTabIndex,
      currentPosition,
      currentWidth,
      contentSlot,
      raTabRemove,
      tabType: ref(props.raType),
      isCloseable: ref(props.raCloseable),
    };

    //funs
    function updateTheTabBar() {
      if (tabPanelItems.length) {
        const currentPanel = tabPanelItems[currentTabIndex.value];
        provideConfig.currentWidth.value = currentPanel.tabPanelRef.offsetWidth;
        provideConfig.currentPosition.value =
          currentPanel.tabPanelRef.offsetLeft;
      }
    }

    function setTabIndex() {
      tabPanelItems.forEach((tab, index) => {
        if (tab.name === props.modelValue) {
          currentTabIndex.value = index;
        }
        tab.setTabPanelIndex(index);
      });
    }

    function setTheContent() {
      const vmList: VNode[] = [];
      tabPanelItems.forEach((tab, index) => {
        vmList.push(
          createVNode(
            'div',
            {
              style: `display:${
                currentTabIndex.value === index ? 'unset' : 'none'
              }`,
            },
            tab.contentSlots.default ? tab.contentSlots.default() : null,
          ),
        );
      });
      render(
        createVNode('div', {}, vmList),
        contentRef.value.el as HTMLElement,
      );
    }

    //lifecycle
    onMounted(async () => {
      await nextTick();
      setTabIndex();
      updateTheTabBar();
      setTheContent();
    });

    watch(currentTabIndex, () => {
      emit(
        TAB_UPDATE_EVENT,
        tabPanelItems[currentTabIndex.value].name ||
          tabPanelItems[currentTabIndex.value].index,
      );
      updateTheTabBar();
      setTheContent();
    });

    watch(tabPanelItems, () => {
      if (tabPanelItems.length === 1) {
        currentTabIndex.value = 0;
      }
      setTabIndex();
      setTheContent();
      updateTheTabBar();
    });

    provide<ITabsProvide>(TABS_PROVIDE_TOKEN, provideConfig);

    return () =>
      h(
        'div',
        {
          class: tabClass.value,
        },
        [
          h(
            'div',
            {
              class: wrapClass.value,
            },
            [
              h(
                'div',
                {
                  class: 'ra-tabs__scroll',
                },
                [
                  h(
                    'div',
                    { class: navClass.value },
                    { default: () => slots.default() },
                  ),
                ],
              ),
              props.raType ? null : h(RaTabBar),
            ],
          ),
          contentRef.value,
        ],
      );
  },
});
</script>
