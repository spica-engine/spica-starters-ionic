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

export interface Company {
  _id?: string;
  title?: string;
  logo?: string;
  cover_photo?: string;
  web_site?: string;
  address?: {
    country?: string;
    city?: string;
  };
  foundation_date?: Date | string;
  description?: string;
}
export namespace company {
  const BUCKET_ID = '61b89e19d6bd39002e926124';
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
  company?: (Company & id) | string;
  criterias?: {
    education_status?: (
      | 'primary_education'
      | 'high_school'
      | 'associate_degree'
      | 'bachelor_degree'
      | 'master_degree'
    )[];
    experience?: (
      | 'at_last_1_year'
      | 'at_last_2_year'
      | 'at_last_3_year'
      | 'at_last_5_year'
    )[];
    sector?: ('it' | 'security' | 'food' | 'automotive' | 'tourism')[];
    department?: (
      | 'computing'
      | 'education'
      | 'finance'
      | 'sales'
      | 'marketing'
    )[];
    position?: (
      | 'senior_manager'
      | 'executive_candidate'
      | 'expert'
      | 'intern'
    )[];
  };
  created_at?: Date | string;
}
export namespace job_advert {
  const BUCKET_ID = '61b89e1ad6bd39002e926127';
  export function get(...args: getArgs) {
    return Bucket.data.get<Job_Advert & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<Job_Advert & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<Job_Advert, '_id'>) {
    ['company'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: Job_Advert & id) {
    ['company'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<Job_Advert> & id) {
    ['company'].forEach((field) => {
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

export interface User {
  _id?: string;
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  identity_id?: string;
  number?: string;
  profile_picture?: string;
  created_at?: Date | string;
  saved_jobs?: ((Job_Advert & id) | string)[];
  applied_jobs?: ((Job_Advert & id) | string)[];
  companies?: ((Company & id) | string)[];
}
export namespace user {
  const BUCKET_ID = '61b89e17d6bd39002e926121';
  export function get(...args: getArgs) {
    return Bucket.data.get<User & id>(BUCKET_ID, ...args);
  }
  export function getAll(...args: getAllArgs) {
    return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
  }
  export function insert(document: Omit<User, '_id'>) {
    ['saved_jobs', 'applied_jobs', 'companies'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.insert(BUCKET_ID, document);
  }
  export function update(document: User & id) {
    ['saved_jobs', 'applied_jobs', 'companies'].forEach((field) => {
      if (typeof document[field] == 'object') {
        document[field] = Array.isArray(document[field])
          ? document[field].map((v) => v._id || v)
          : document[field]._id;
      }
    });
    return Bucket.data.update(BUCKET_ID, document._id, document);
  }
  export function patch(document: Partial<User> & id) {
    ['saved_jobs', 'applied_jobs', 'companies'].forEach((field) => {
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
      return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
    }
    export function getAll(...args: realtimeGetAllArgs) {
      return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
    }
  }
}
