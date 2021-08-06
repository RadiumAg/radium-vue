<template>
  <div class="ra-date-table">
    <section class="ra-date-table__header">
      <h2>周一</h2>
      <h2>周二</h2>
      <h2>周三</h2>
      <h2>周四</h2>
      <h2>周五</h2>
      <h2>周六</h2>
      <h2>周天</h2>
    </section>
    <section class="ra-date-table__date">
      <section
        v-for="(item, index) in dates"
        :key="index"
        class="ra-date-table__label"
        :class="{
          'is-today': item.isToday,
          'is-other-month': item.month !== currentMonth.month(),
          'is-selected': item.isSelected,
        }"
        @click="dayClick(item.date, item.month)"
      >
        <slot v-bind="item">
          {{ item.date }}
        </slot>
      </section>
    </section>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import localeDate from 'dayjs/plugin/localeData';
import {
  CALENDAR_INJECT_TOKEN,
  ICalendarProvide,
  IDayList,
  totalDays,
} from './calendar';
import dayjs from 'dayjs';
dayjs.extend(localeDate);
dayjs().localeData();

export default defineComponent({
  name: 'RaDateTable',
  setup() {
    const calendarProvide = inject<ICalendarProvide>(CALENDAR_INJECT_TOKEN);
    const currentMonth = calendarProvide.dayjsObj;
    const preMonthDayjs = computed(() => {
      return currentMonth.value.month(currentMonth.value.month() - 1);
    });
    const nextMonthDayObj = computed(() => {
      return currentMonth.value.month(preMonthDayjs.value.month() + 2);
    });

    const dates = computed(() => {
      const ret: IDayList = [];
      const [start, end] = calendarProvide.range.value || [];
      let mStartDate = end
        ? dayjs(end)
            .startOf('month')
            .day()
        : currentMonth.value.startOf('month').date();
      const mEndDate = currentMonth.value.endOf('month').date();
      const mStartDay = start
        ? dayjs(start)
            .startOf('month')
            .day()
        : currentMonth.value.startOf('month').day();
      const mStartWeek = mStartDay === 0 ? 6 : mStartDay - 1;
      const richDays = totalDays - mEndDate - mStartWeek;

      for (let index = 0; index < mStartWeek; index++) {
        ret.push({
          isToday: false,
          isSelected: false,
          date:
            preMonthDayjs.value.endOf('month').date() - mStartWeek + index + 1,
          month: preMonthDayjs.value.month(),
        });
      }

      while (mStartDate <= mEndDate) {
        ret.push({
          date: mStartDate,
          isSelected: mStartDate === currentMonth.value.date(),
          isToday:
            dayjs().date() === mStartDate &&
            dayjs().month() === currentMonth.value.month() &&
            dayjs().year() === currentMonth.value.year(),
          month: currentMonth.value.month(),
        });

        mStartDate++;
      }

      for (let index = 0; index < richDays; index++) {
        ret.push({
          date: index + 1,
          isSelected: false,
          isToday: false,
          month: nextMonthDayObj.value.month(),
        });
      }
      return ret;
    });

    //funcs
    function dayClick(date: number, month: number) {
      currentMonth.value = currentMonth.value.date(date);
      if (month < currentMonth.value.month()) {
        currentMonth.value = preMonthDayjs.value.date(
          currentMonth.value.date(),
        );
      }

      if (month > currentMonth.value.month()) {
        currentMonth.value = nextMonthDayObj.value.date(
          currentMonth.value.date(),
        );
      }
    }

    return {
      dates,
      dayClick,
      currentMonth,
    };
  },
});
</script>
