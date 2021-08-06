import { Dayjs } from 'dayjs';
import { Ref } from 'vue';

export type TCalendarProps = Readonly<{
  modelValue: Date;
  raRange: Array<Date>;
}>;

export const formtString = 'YYYY年MM月';

export const CALENDAR_INJECT_TOKEN = 'CALENDAR_INJECT_TOKEN';

export interface ICalendarProvide {
  dayjsObj: Ref<Dayjs>;
  range: Ref<Array<Date>>;
}

export type IDayList = {
  isToday: boolean;
  date: number;
  month: number;
  isSelected: boolean;
}[];

const rows = 6;
const cols = 7;

export const totalDays = rows * cols;
