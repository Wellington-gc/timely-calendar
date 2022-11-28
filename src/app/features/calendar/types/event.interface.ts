import { Image } from './image.interface';
import { Taxonomies } from './taxonomies.interface';

export interface Event {
  data: EventData;
}

export interface EventData {
  id: number;
  title: string;
  description: string;
  status?: string;
  start_datetime?: Date;
  end_datetime?: Date;
  timezone?: string;
  original_timezone?: string;
  url?: string;
  uid?: string;
  recurrence_rules?: null;
  exception_rules?: null;
  cost_type?: null;
  cost_display?: string;
  cost_currency?: null;
  cost_external_url?: null;
  cost?: null;
  allday?: boolean;
  post_to_twitter?: boolean;
  post_to_facebook?: boolean;
  instant_event?: boolean;
  feed_event_url?: null;
  stop_synchronizing?: boolean;
  is_example_event?: boolean;
  image_id?: number;
  feed_id?: null;
  event_status?: string;
  last_end_datetime?: Date;
  account_billing_id?: null;
  custom_url?: string;
  custom_url_hash?: string;
  updated_at?: Date;
  display_one_instance?: null;
  ticket_type?: string;
  featured?: boolean;
  post_to_linkedin?: boolean;
  row_num?: string;
  custom_fields?: null;
  user?: null;
  taxonomies?: Taxonomies;
  is_journey?: boolean;
  images?: Image[];
  calendar_id?: number;
  tickets_count?: number;
  tickets_currency?: null;
  tickets_currency_symbol?: null;
  tickets_min_price?: null;
  description_short?: string;
  is_recurrent?: boolean;
  priority?: number;
  start_utc_datetime?: Date;
  end_utc_datetime?: Date;
  instance?: string;
  collapse_recurrence?: string;
  canonical_url?: string;
  metadata?: Metadata;
}

interface Metadata {
  author?: string;
  publish_date: Date;
  fb_app_id: string;
}
