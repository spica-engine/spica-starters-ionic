import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://master.spicaengine.com/api';
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

export interface User {
  _id?: string;
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  identity?: string;
  number?: string;
  profile_picture?: string;
  created_at?: Date | string;
  tets?: {
    heys?: {
      dqwd?: string;
      qwdwqd?: string;
    }[];
    ac?: string;
  };
}
export namespace user {
  const BUCKET_ID = '6166d4ae8660a6002e594a6b';
  export function get(...args: getArgs) {
    return Bucket.data.get<User & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<User, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: User & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<User> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Company {
  _id?: string;
  title?: string;
  description?: string;
  logo?: string;
  cover_photo?: string;
  web_site?: string;
  address?: {
    country?: string;
    city?: string;
  };
  foundation_date?: Date | string;
}
export namespace company {
  const BUCKET_ID = '61a8bbbd3cca80002d75ad34';
  export function get(...args: getArgs) {
    return Bucket.data.get<Company & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Company & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Company, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Company & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Company> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<Company & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Company & id>(BUCKET_ID, ...args);
    }
  }
}
export interface Job_Advert {
  _id?: string;
  header?: string;
  description?: string;
  attributes?: ((Attributes & id) | string)[];
  company?: (Company & id) | string;
  created_at?: Date | string;
}
export namespace job_advert {
  const BUCKET_ID = '61a897143cca80002d75abeb';
  export function get(...args: getArgs) {
    return Bucket.data.get<Job_Advert & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Job_Advert & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Job_Advert, '_id'>) {
    ['attributes', 'company'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Job_Advert & id) {
    ['attributes', 'company'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Job_Advert> & id) {
    ['attributes', 'company'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
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
      return Bucket.data.realtime.get<Job_Advert & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Job_Advert & id>(BUCKET_ID, ...args);
    }
  }
}

export interface New_Bucket2 {
  _id?: string;
  title?: string;
  description?: string;
}
export namespace new_bucket2 {
  const BUCKET_ID = '61a9ec8ba0abfe002d459386';
  export function get(...args: getArgs) {
    return Bucket.data.get<New_Bucket2 & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<New_Bucket2 & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<New_Bucket2, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: New_Bucket2 & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<New_Bucket2> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<New_Bucket2 & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<New_Bucket2 & id>(BUCKET_ID, ...args);
    }
  }
}

export interface Attributes {
  _id?: string;
  key?:
    | 'sector'
    | 'position'
    | 'department'
    | 'education_status'
    | 'military_status'
    | 'experience';
  value?: string;
}
export namespace attributes {
  const BUCKET_ID = '61a8ac1c3cca80002d75ac1b';
  export function get(...args: getArgs) {
    return Bucket.data.get<Attributes & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Attributes & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Attributes, '_id'>) {
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Attributes & id) {
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Attributes> & id) {
    return Bucket.data.patch(BUCKET_ID, document._id, document);
  }
  export function remove(documentId: string) {
    return Bucket.data.remove(BUCKET_ID, documentId);
  }
  export namespace realtime {
    export function get(...args: realtimeGetArgs) {
      return Bucket.data.realtime.get<Attributes & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<Attributes & id>(BUCKET_ID, ...args);
    }
  }
}
