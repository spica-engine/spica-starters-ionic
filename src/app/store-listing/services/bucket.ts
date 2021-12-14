import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://spica-starters-7229b.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface Public_Holiday{
  _id?: string;
  name?: string;
  countries?: string[];
  cities?: string[];
  from?: Date | string;
  until?: Date | string;
}
export namespace public_holiday {
  const BUCKET_ID = '61b3453a97a0a8002e6a4f89';
    export function get (...args: getArgs) {
      return Bucket.data.get<Public_Holiday & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Public_Holiday & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Public_Holiday, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Public_Holiday & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Public_Holiday> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Public_Holiday & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Public_Holiday & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rating{
  _id?: string;
  title?: string;
  message?: string;
  rating?: (1|2|3|4|5);
  date?: Date | string;
}
export namespace rating {
  const BUCKET_ID = '61b3453797a0a8002e6a4f83';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rating & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rating & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rating, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rating & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rating> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rating & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rating & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Place{
  _id?: string;
  images?: string[];
  name?: string;
  mail?: string;
  description?: string;
  phone?: string;
  url?: string;
  adress?: string;
  location?: { type: "Point", coordinates: [number,number]};
  ratings?: (Rating & id | string)[];
  working_hours?: {
  day_of_week?: (1|2|3|4|5|6|7);
  hours?: {
  from?: string;
  until?: string;}[];
  rush_hours?: {
  from?: string;
  until?: string;}[];}[];
  city?: string;
  country?: string;
}
export namespace place {
  const BUCKET_ID = '61b3453997a0a8002e6a4f86';
    export function get (...args: getArgs) {
      return Bucket.data.get<Place & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Place & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Place, "_id">) {
      ['ratings'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Place & id) {
      ['ratings'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Place> & id
    ) {
      ['ratings'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Place & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Place & id>(BUCKET_ID, ...args);
      };
  }
}