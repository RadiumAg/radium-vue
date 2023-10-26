<script lang="ts">
import {
  PropType,
  Slots,
  VNode,
  computed,
  createVNode,
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  render,
  vShow,
  watch,
  withDirectives,
} from 'vue';
import RaTabBar from './tab-bar.vue';
import {
  TABS_PROVIDE_TOKEN,
  TAB_UPDATE_EVENT,
  TabPanel,
  TabPosition,
  TabsType,
} from '.';

export default defineComponent({
  name: 'RaTabs',
  components: { RaTabBar },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<TabsType>,
      default: '',
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    tabPosition: {
      type: String as PropType<TabPosition>,
      default: 'top',
    },
  },
  emits: ['ra-tab-click', 'ra-tab-remove', TAB_UPDATE_EVENT],
  setup(props, { emit, slots }) {
    const ro = new ResizeObserver(setTheArrow);
    const currentWidth = ref(0);
    const currentPosition = ref(0);
    const currentTabIndex = ref<number>(0);
    const contentSlot = ref<Slots>();
    const scrollRef = ref<HTMLElement>();
    const isArrowShow = ref(false);
    const tabPanelItems = reactive<TabPanel[]>([]);
    const wrapClass = computed(() => {
      const ret = ['ra-tabs__wrap'];
      props.type && ret.push(`is-${props.type}`);
      return ret;
    });
    const tabRemove = (delValue: number | string) => {
      emit('ra-tab-remove', delValue);
    };
    const tabClick = (clickValue: number | string) => {
      let tabPanelTarget: (typeof tabPanelItems)[0];
      emit('ra-tab-click', clickValue);
      if (typeof clickValue === 'number') {
        tabPanelTarget = tabPanelItems[clickValue];
      } else if (typeof clickValue === 'string') {
        tabPanelTarget = tabPanelItems.find(_ => _.name === clickValue);
      }

      const panelReact = tabPanelTarget.tabPanelRef.getBoundingClientRect();
      const scrollReact = scrollRef.value.getBoundingClientRect();

      if (
        panelReact.x - scrollReact.x <
        tabPanelTarget.tabPanelRef.offsetWidth
      ) {
        scrollRef.value.scroll({
          left: tabPanelTarget.tabPanelRef.offsetLeft,
          top: 0,
          behavior: 'smooth',
        });
      } else if (
        scrollReact.x + scrollReact.width - panelReact.x <
        tabPanelTarget.tabPanelRef.offsetWidth
      ) {
        scrollRef.value.scroll({
          left:
            scrollReact.x +
            scrollRef.value.offsetWidth -
            tabPanelTarget.tabPanelRef.clientWidth,
          top: 0,
          behavior: 'smooth',
        });
      }
    };
    const navClass = computed(() => {
      const ret = ['ra-tabs__nav'];
      props.type && ret.push(`is-${props.type}`);
      isArrowShow.value && ret.push('is-scroll');
      return ret;
    });
    const tabClass = computed(() => {
      const ret = ['ra-tabs'];
      props.type && ret.push(`is-${props.type}`);
      return ret;
    });
    const contentClass = computed(() => {
      const ret = ['ra-tabs__content'];
      props.type && ret.push(`is-${props.type}`);
      return ret;
    });
    const scrollClass = computed(() => {
      const ret = ['ra-tabs__scroll'];
      return ret;
    });
    const contentRef = ref<HTMLElement>();
    const provideConfig = {
      tabClick,
      tabRemove,
      contentSlot,
      currentWidth,
      tabPanelItems,
      currentTabIndex,
      currentPosition,
      tabType: ref(props.type),
      isCloseable: ref(props.closeable),
    };

    //funs
    function arrowClick(direction: 'left' | 'right') {
      let scrollOffset = 0;
      scrollOffset =
        direction === 'left'
          ? scrollRef.value.scrollLeft - scrollRef.value.offsetWidth
          : scrollRef.value.scrollLeft + scrollRef.value.offsetWidth;

      if (
        scrollRef.value.scrollWidth <
        scrollRef.value.scrollLeft + scrollOffset
      ) {
        scrollOffset = scrollOffset;
      }
      scrollRef.value.scroll({
        left: scrollOffset,
        top: 0,
        behavior: 'smooth',
      });
    }

    function setTheArrow() {
      if (scrollRef.value.scrollWidth > scrollRef.value.clientWidth) {
        isArrowShow.value = true;
        scrollRef.value.scrollLeft = scrollRef.value.scrollWidth;
      } else {
        isArrowShow.value = false;
      }
    }

    function updateTheTabBar() {
      if (tabPanelItems.length > 0) {
        const currentPanel = tabPanelItems[currentTabIndex.value];
        if (!currentPanel) return;
        provideConfig.currentWidth.value = currentPanel.tabWrapRef.offsetWidth;
        provideConfig.currentPosition.value =
          currentPanel.tabWrapRef.offsetLeft;
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
      render(createVNode('div', {}, vmList), contentRef.value as HTMLElement);
    }

    //lifecycle
    onMounted(async () => {
      await nextTick();
      setTabIndex();
      updateTheTabBar();
      setTheContent();
      ro.observe(scrollRef.value);
    });

    onUnmounted(() => {
      ro.disconnect();
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
      setTheArrow();
    });

    provide(TABS_PROVIDE_TOKEN, provideConfig);

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
              withDirectives(
                h('i', {
                  class: 'ra-icon-arrow-left',
                  onClick: () => {
                    arrowClick('left');
                  },
                }),
                [[vShow, isArrowShow.value]],
              ),
              h(
                'div',
                {
                  class: scrollClass.value,
                  ref: (ref: HTMLElement) => {
                    scrollRef.value = ref;
                  },
                },
                [
                  h(
                    'div',
                    { class: navClass.value },
                    { default: () => slots.default() },
                  ),
                ],
              ),
              withDirectives(
                h('i', {
                  class: 'ra-icon-arrow-right',
                  onClick: () => {
                    arrowClick('right');
                  },
                }),
                [[vShow, isArrowShow.value]],
              ),
              props.type ? null : h(RaTabBar),
            ],
          ),
          h('div', {
            class: contentClass.value,
            ref: (ref: HTMLElement) => {
              contentRef.value = ref;
            },
          }),
        ],
      );
  },
});
</script>
