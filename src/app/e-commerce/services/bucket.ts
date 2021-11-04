import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://test-4061d.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends (
  p1: infer P1,
  ...rest: infer R
) => void
  ? R
  : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface E_Com_Attribute {
  _id?: string;
  name?: string;
  value?: string[];
}
export namespace e_com_attribute {
  const BUCKET_ID = '61653b691a1b5d002d81420f';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Attribute & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Attribute & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Attribute, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Attribute & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Attribute> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Attribute & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Attribute & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Product_Category {
  _id?: string;
  name: string;
  img?: string;
  sub_category?: ((E_Com_Product_Category & id) | string)[];
  is_sub_category?: boolean;
}
export namespace e_com_product_category {
  const BUCKET_ID = '61653b3b1a1b5d002d81420c';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Product_Category & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Product_Category & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Product_Category, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Product_Category & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Product_Category> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Product_Category & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Product_Category & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Payment_Method {
  _id?: string;
  title?: string;
  description?: string;
  is_active?: boolean;
}
export namespace e_com_payment_method {
  const BUCKET_ID = '616539061a1b5d002d814201';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Payment_Method & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Payment_Method & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Payment_Method, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Payment_Method & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Payment_Method> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Payment_Method & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Payment_Method & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Store_Settings {
  _id?: string;
  name?: string;
  address?: {
    country?: string;
    province?: string;
    district?: string;
    full_address?: string;
    post_code?: number;
  };
  currency?: string;
  email?: string;
  phone?: string;
  weight_unit?: string;
  size_unit?: string;
  shipping_price?: number;
  enable_comments?: boolean;
  privacy_policy?: string;
  terms_of_use?: string;
}
export namespace e_com_store_settings {
  const BUCKET_ID = '6164344e1a1b5d002d8141b2';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Store_Settings & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Store_Settings & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Store_Settings, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Store_Settings & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Store_Settings> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Store_Settings & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Store_Settings & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Coupon {
  _id?: string;
  code?: string;
  description?: string;
  discount_type?:
    | 'Discount Percentage'
    | 'Fixed Bucket Discount'
    | 'Fixed Product Discount';
  amount?: number;
  expiry_date?: Date | string;
}
export namespace e_com_coupon {
  const BUCKET_ID = '616435bc1a1b5d002d8141b7';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Coupon & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Coupon & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Coupon, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Coupon & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Coupon> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Coupon & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Coupon & id>(BUCKET_ID, ...args);
    }
  }
}

export interface E_Com_Basket {
  _id?: string;
  title?: string;
  product?: ((E_Com_Product & id) | string)[];
  metadata?: {
    quantity?: number;
    selected_attribute?: string;
    product_id?: (E_Com_Product & id) | string;
  }[];
  coupon?: (E_Com_Coupon & id) | string;
  user?: (E_Com_User & id) | string;
  total_price?: number;
  is_completed?: boolean;
}
export namespace e_com_basket {
  const BUCKET_ID = '6165462a1a1b5d002d814324';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Basket & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Basket & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Basket, '_id'>) {
    ['product', 'coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Basket & id) {
    ['product', 'coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Basket> & id) {
    ['product', 'coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Basket & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Basket & id>(BUCKET_ID, ...args);
    }
  }
}

export interface E_Com_Product {
  _id?: string;
  title?: string;
  sub_title?: string;
  description?: string;
  category?: ((E_Com_Product_Category & id) | string)[];
  attribute?: ((E_Com_Attribute & id) | string)[];
  tag?: string[];
  cover_image?: string;
  gallery?: string[];
  type?: 'physical' | 'digital';
  normal_price?: number;
  discounted_price?: number;
  discount_start_date?: Date | string;
  discount_end_date?: Date | string;
  is_free_delivery?: boolean;
  is_available?: boolean;
  created_at?: Date | string;
}
export namespace e_com_product {
  const BUCKET_ID = '61653de91a1b5d002d81422f';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Product & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Product & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Product, '_id'>) {
    ['category', 'attribute'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Product & id) {
    ['category', 'attribute'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Product> & id) {
    ['category', 'attribute'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Product & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Product & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Stock {
  _id?: string;
  sku?: string;
  quantity?: number;
  is_enable?: boolean;
  sell_if_not_available?: boolean;
  product?: (E_Com_Product & id) | string;
}
export namespace e_com_stock {
  const BUCKET_ID = '616543021a1b5d002d8142d4';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Stock & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Stock & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Stock, '_id'>) {
    ['product'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Stock & id) {
    ['product'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Stock> & id) {
    ['product'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Stock & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Stock & id>(BUCKET_ID, ...args);
    }
  }
}

export interface E_Com_Invoice {
  _id?: string;
  name: string;
  surname: string;
  address?: {
    country?: string;
    district?: string;
    full_address?: string;
    post_code?: number;
    province?: string;
    title?: string;
  };
  company_name?: string;
  phone: string;
  email: string;
  basket?: (E_Com_Basket & id) | string;
  payment_method?: (E_Com_Payment_Method & id) | string;
}
export namespace e_com_invoice {
  const BUCKET_ID = '616547d41a1b5d002d814346';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Invoice & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Invoice & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Invoice, '_id'>) {
    ['basket', 'payment_method'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Invoice & id) {
    ['basket', 'payment_method'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Invoice> & id) {
    ['basket', 'payment_method'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Invoice & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Invoice & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Order {
  _id?: string;
  title?: string;
  status?: 'cancelled' | 'delivering' | 'delivered' | 'preparing' | 'pending';
  created_at?: Date | string;
  basket?: (E_Com_Basket & id) | string;
  invoice?: (E_Com_Invoice & id) | string;
  note?: string;
}
export namespace e_com_order {
  const BUCKET_ID = '616549401a1b5d002d814356';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Order & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Order & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Order, '_id'>) {
    ['basket', 'invoice'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Order & id) {
    ['basket', 'invoice'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Order> & id) {
    ['basket', 'invoice'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Order & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Order & id>(BUCKET_ID, ...args);
    }
  }
}

export interface E_Com_Rating {
  _id?: string;
  comment?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  user?: (E_Com_User & id) | string;
}
export namespace e_com_rating {
  const BUCKET_ID = '616555281a1b5d002d814510';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Rating & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Rating & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Rating, '_id'>) {
    ['user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Rating & id) {
    ['user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Rating> & id) {
    ['user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Rating & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Rating & id>(BUCKET_ID, ...args);
    }
  }
}

export interface E_Com_User {
  _id?: string;
  identity_id?: string;
  email?: string;
  name?: string;
  surname?: string;
  phone?: string;
  address?: {
    title?: string;
    country?: string;
    province?: string;
    district?: string;
    full_address?: string;
    post_code?: number;
    phone?:string;
  }[];
}
export namespace e_com_user {
  const BUCKET_ID = '616555bd1a1b5d002d814514';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_User & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_User & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_User, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_User & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_User> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_User & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_User & id>(BUCKET_ID, ...args);
    }
  }
}
export interface E_Com_Used_Coupon_ {
  _id?: string;
  title?: string;
  coupon?: (E_Com_Coupon & id) | string;
  user?: (E_Com_User & id) | string;
  date?: Date | string;
}
export namespace e_com_used_coupon_ {
  const BUCKET_ID = '616562351a1b5d002d814565';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Used_Coupon_ & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Used_Coupon_ & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Used_Coupon_, '_id'>) {
    ['coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Used_Coupon_ & id) {
    ['coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Used_Coupon_> & id) {
    ['coupon', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Used_Coupon_ & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Used_Coupon_ & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Liked_Product {
  _id?: string;
  product?: ((E_Com_Product & id) | string)[];
  user?: (E_Com_User & id) | string;
  created_at?: Date | string;
  title?: string;
}
export namespace e_com_liked_product {
  const BUCKET_ID = '61727c36253810002e76bf7b';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Liked_Product & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Liked_Product & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Liked_Product, '_id'>) {
    ['product', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Liked_Product & id) {
    ['product', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Liked_Product> & id) {
    ['product', 'user'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Liked_Product & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Liked_Product & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}

export interface E_Com_Campaign_Product {
  _id?: string;
  title?: string;
  img?: string;
  product?: ((E_Com_Product & id) | string)[];
}
export namespace e_com_campaing_product {
  const BUCKET_ID = '6172a540253810002e76bfd5';
  export function get(...args: getArgs) {
    return Bucket.data.get<E_Com_Campaign_Product & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<E_Com_Campaign_Product & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<E_Com_Campaign_Product, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: E_Com_Campaign_Product & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<E_Com_Campaign_Product> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<E_Com_Campaign_Product & id>(
        BUCKET_ID,
        ...args
      );
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<E_Com_Campaign_Product & id>(
        BUCKET_ID,
        ...args
      );
    }
  }
}
