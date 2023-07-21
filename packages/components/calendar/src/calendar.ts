import type { Dayjs } from 'dayjs';
import type { InjectionKey, Ref } from 'vue';

type TCalendarProps = Readonly<{
  modelValue: Date;
  raRange: Array<Date>;
}>;

interface CalendarProvide {
  dayjsObj: Ref<Dayjs>;
  range: Ref<Array<Date>>;
}

type DayList = {
  date: number;
  month: number;
  isToday: boolean;
  isSelected: boolean;
}[];

const rows = 6;
const cols = 7;

function isRange(start: Date, end: Date) {
  return !!start && !!end;
}

const formatString = 'YYYY年MM月';

const CALENDAR_INJECT_TOKEN: InjectionKey<CalendarProvide> = Symbol(
  'CALENDAR_INJECT_TOKEN',
);
const totalDays = rows * cols;

export { totalDays, isRange, formatString, CALENDAR_INJECT_TOKEN };
export type { DayList, CalendarProvide, TCalendarProps };
