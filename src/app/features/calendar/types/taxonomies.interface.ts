export interface Taxonomies {
  taxonomy_venue?: TaxonomyVenue[];
  taxonomy_filter_group?: TaxonomyFilterGroup[];
  taxonomy_category?: TaxonomyCategory[];
  taxonomy_organizer?: TaxonomyOrganizer[];
}

interface TaxonomyCategory {
  image: null;
  reference_id: number;
  color: null;
  updated_at: Date;
  item_type: string;
  created_at: Date;
  id: number;
  image_id: null;
  title: string;
  deleted_at: null;
  filter_group_id: number | null;
}

export interface TaxonomyFilterGroup {
  reference_id: number;
  color: null;
  updated_at: Date;
  data: TaxonomyCategory[];
  item_type: string;
  created_at: Date;
  id: number;
  title: string;
  deleted_at: null;
}

export interface TaxonomyOrganizer {
  image: null;
  website: null;
  reference_id: number;
  item_type: string;
  created_at: Date;
  title: string;
  deleted_at: null;
  updated_at: Date;
  phone: null;
  id: number;
  image_id: null;
  website_title: null;
  email: string;
}

export interface TaxonomyVenue {
  country: null | string;
  image: null;
  website: null;
  address: string;
  geo_location: null | string;
  reference_id: number;
  address2: null;
  city: null | string;
  item_type: string;
  phone2: null;
  created_at: Date;
  title: string;
  deleted_at: null;
  country_first_division: null | string;
  updated_at: Date;
  phone: null;
  venue_type: string;
  id: number;
  image_id: null;
  postal_code: null | string;
  email: null;
  place_id: null;
}
