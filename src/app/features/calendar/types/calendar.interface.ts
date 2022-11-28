import { Image } from './image.interface';
import { Taxonomies } from './taxonomies.interface';

export interface Calendar {
  data: CalendarData;
}

interface CalendarData {
  total: number;
  from: number;
  size: number;
  has_prior: boolean;
  has_next: boolean;
  items: EventItem[];
}

export interface EventItem {
  ticket_type: string;
  cost_display: string;
  featured: boolean;
  instance: string;
  start_datetime: Date;
  end_datetime: Date;
  cost_type: null;
  timezone: string;
  instant_event: boolean;
  post_to_facebook: boolean;
  title: string;
  is_example_event: boolean;
  feed_id?: number;
  uid: string;
  updated_at: Date;
  post_to_linkedin: boolean;
  id: number;
  event_status: string;
  custom_url: string;
  tickets_count: number;
  images?: Image[];
  cost: null;
  cost_external_url: null;
  calendar_id: number;
  post_to_twitter: boolean;
  tickets_min_price: null;
  tickets_currency_symbol: null;
  tickets_currency: null;
  allday: boolean;
  description_short?: string;
  taxonomies?: Taxonomies;
  user?: string;
  url: string;
  canonical_url: string;
  created_at?: Date;
  notify_subscribers?: boolean;
}
