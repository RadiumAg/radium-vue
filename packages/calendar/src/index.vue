<template>
  <div class="ra-calendar">
    <section class="ra-calendar__header">
      <span v-html="date"></span>
      <ra-button-group v-if="isShowTool">
        <ra-button ra-size="mini" @click="changeTheTime('preMonth')">
          上个月
        </ra-button>
        <ra-button ra-size="mini" @click="changeTheTime('today')">
          今天
        </ra-button>
        <ra-button ra-size="mini" @click="changeTheTime('nextMonth')">
          下个月
        </ra-button>
      </ra-button-group>
    </section>
    <section class="ra-calendar__table">
      <ra-date-table>
        <template #default="data">
          <slot v-bind="data"></slot>
        </template>
      </ra-date-table>
    </section>
  </div>
</template>
<script lang="ts">
import RaButton from '@radium-vue/button';
import RaButtonGroup from '@radium-vue/button-group';
import RaDateTable from './dateTable.vue';
import { UPDATE_MODEL_EVENT } from '@radium-vue/utils/common';
import { computed, defineComponent, PropType, provide, ref, watch } from 'vue';
import {
  CALENDAR_INJECT_TOKEN,
  formtString,
  ICalendarProvide,
  TCalendarProps,
} from './calendar';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'RaCalendar',
  components: {
    RaDateTable,
    RaButton,
    RaButtonGroup,
  },
  props: {
    modelValue: {
      type: Date,
    },
    raRange: {
      type: Array as PropType<Array<Date>>,
      validator(range: Array<Date>) {
        if (Array.isArray(range)) {
          return range.length === 2 && range.every(_ => _ instanceof Date);
        }
        return false;
      },
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: TCalendarProps, { emit }) {
    const currentDaysJsObj = ref(dayjs(props.modelValue));
    const date = ref(currentDaysJsObj.value.format(formtString));
    const range = ref(props.raRange);
    const isShowTool = computed(() => {
      const [start, end] = props.raRange || [];
      if (!start) {
        return true;
      }
      if (start.getMonth() === end.getMonth()) {
        return false;
      }
      return true;
    });

    watch(currentDaysJsObj, () => {
      date.value = currentDaysJsObj.value.format(formtString);
      emit(UPDATE_MODEL_EVENT, currentDaysJsObj.value.toDate());
    });

    watch(props, () => {
      range.value = props.raRange;
    });

    // funcs
    function changeTheTime(opType: 'today' | 'nextMonth' | 'preMonth') {
      switch (opType) {
        case 'nextMonth': {
          currentDaysJsObj.value = currentDaysJsObj.value
            .month(currentDaysJsObj.value.month() + 1)
            .date(currentDaysJsObj.value.date());
          break;
        }
        case 'preMonth': {
          currentDaysJsObj.value = currentDaysJsObj.value
            .month(currentDaysJsObj.value.month() - 1)
            .date(currentDaysJsObj.value.date());
          break;
        }
        case 'today': {
          currentDaysJsObj.value = dayjs();
          break;
        }
      }
      date.value = currentDaysJsObj.value.format(formtString);
    }

    provide<ICalendarProvide>(CALENDAR_INJECT_TOKEN, {
      dayjsObj: currentDaysJsObj,
      range,
    });

    return { props, date, changeTheTime, isShowTool };
  },
});
</script>
