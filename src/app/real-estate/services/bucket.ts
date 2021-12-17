import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl =
    'https://spica-starters-7229b.hq.spicaengine.com/api';
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

export interface Adverst {
  _id?: string;
  adverst_no?: number;
  name?: string;
  description?: string;
  square_meters?: string;
  room_count?: string;
  warming_type?: 'furnace' | 'boiler' | 'gas-fired' | 'electric';
  adverst_status?: 'rent' | 'sale';
  livingroom_count?: string;
  fuel_type?: 'coal' | 'gas' | 'wood' | 'electric';
  staff_no?: string;
  building_age?: string;
  bathroom_count?: string;
  trade?: boolean;
  bedroom_count?: string;
  address?: {
    country?: string;
    district?: string;
    city?: string;
  };
  location?: { type: 'Point'; coordinates: [number, number] };
  created_at?: Date | string;
  consultant?: (Consultant & id) | string;
  properties?: {
    exterior?: string[];
    interior?: string[];
    environmental?: string[];
  };
  categories?: ((Category & id) | string)[];
  cover_img?: string;
  images?: string[];
  price?: number;
  currency?: 'EUR' | 'GBP' | 'USD';
}
export namespace adverst {
  const BUCKET_ID = '61b9f84cd6bd39002e927a71';
  export function get(...args: getArgs) {
    return Bucket.data.get<Adverst & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Adverst & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Adverst, '_id'>) {
    ['consultant', 'categories'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Adverst & id) {
    ['consultant', 'categories'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Adverst> & id) {
    ['consultant', 'categories'].forEach((field) => {
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
      return Bucket.data.realtime.get<Adverst & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Adverst & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Usefull_Link {
  _id?: string;
  link?: string;
  name?: string;
}
export namespace usefull_link {
  const BUCKET_ID = '61b9f84ed6bd39002e927a73';
  export function get(...args: getArgs) {
    return Bucket.data.get<Usefull_Link & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Usefull_Link & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Usefull_Link, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Usefull_Link & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Usefull_Link> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<Usefull_Link & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Usefull_Link & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Announcement {
  _id?: string;
  description?: string;
  name?: string;
  created_at?: Date;
}
export namespace announcement {
  const BUCKET_ID = '61b9f850d6bd39002e927a77';
  export function get(...args: getArgs) {
    return Bucket.data.get<Announcement & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Announcement & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Announcement, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Announcement & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Announcement> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<Announcement & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Announcement & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Consultant {
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  phone_number?: string;
  thumbnail?: string;
}
export namespace consultant {
  const BUCKET_ID = '61b9f849d6bd39002e927a6d';
  export function get(...args: getArgs) {
    return Bucket.data.get<Consultant & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Consultant & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Consultant, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Consultant & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Consultant> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<Consultant & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Consultant & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Category {
  _id?: string;
  name?: string;
  sub_categories?: ((Category & id) | string)[];
}
export namespace category {
  const BUCKET_ID = '61b9f853d6bd39002e927a79';
  export function get(...args: getArgs) {
    return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Category, '_id'>) {
    ['sub_categories'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Category & id) {
    ['sub_categories'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Category> & id) {
    ['sub_categories'].forEach((field) => {
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
      return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
    }
  }
}

export interface About_Us {
  _id?: string;
  about?: string;
  offices?: {
    address?: string;
    email?: string;
    phone?: string;
    title?: string;
    location?: { type: 'Point'; coordinates: [number, number] };
  }[];
}
export namespace about_us {
  const BUCKET_ID = '61bc406b0ba24b002d1974cf';
  export function get(...args: getArgs) {
    return Bucket.data.get<About_Us & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<About_Us & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<About_Us, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: About_Us & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<About_Us> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<About_Us & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<About_Us & id>(BUCKET_ID, ...args);
    }
  }
}
