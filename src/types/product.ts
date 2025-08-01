export interface Location {
  id: string;
  brand: string;
  category: string;
  device_pn: string;
  qty: number;
  condition: string;
  edit_user: string;
  notes: string;
}

export interface EbayListing {
  listing_id: string;
  sku: string;
  condition_id: string;
  product_id: string;
  title: string;
  price: number;
  listing_qty: number;
  inventory_qty: string;
}

export interface SameProduct {
  original_id: string;
  same_id: string;
  fk_edit_employee: string;
}

export interface Product {
  id: string;
  brand: string;
  model_series: string;
  device_pn: string;
  dev_type: string;
  rnk: number;
  min_price: number;
  max_price: number;
  quantity: number;
  ePrq: number;
  eA4q: number;
  sku: string;
  l_user: string;
  category: string;
  e_user: string;
  green_id: string;
  edit_at: string;
  create_at: string;
  amazon_listing_src: string;
  elCcq: number;
  amazq: number;
  notes: string;
  photo_device: string;
  photo_src: string;
  photo_data_plate: string;
  location: Location[];
  ebay_listings: EbayListing[];
  same_products: SameProduct[];
}
