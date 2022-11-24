import { Event } from './event.interface';

export interface Calendar {
  data: CalendarData;
}

interface CalendarData {
  total: number;
  from: number;
  size: number;
  has_prior: boolean;
  has_next: boolean;
  items: Event[];
}
