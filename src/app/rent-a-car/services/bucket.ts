import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-playground-05dae.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface User{
  _id?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  passport?: string;
  birthday?: Date | string;
}
export namespace user {
  const BUCKET_ID = '61bc95ab1fcf06002dc71fc3';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Office{
  _id?: string;
  name?: string;
  location?: { type: "Point", coordinates: [number,number]};
  phone?: string;
  working_hours?: {
  open?: string;
  close?: string;};
  cars?: (Cars & id | string)[];
}
export namespace office {
  const BUCKET_ID = '61bc96ae1fcf06002dc71fd9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Office & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Office & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Office, "_id">) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Office & id) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
      document: Partial<Office> & id
    ) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
        return Bucket.data.realtime.get<Office & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Office & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category{
  _id?: string;
  name?: string;
  image?: string;
}
export namespace category {
  const BUCKET_ID = '61bc96e81fcf06002dc71fe4';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Cars{
  _id?: string;
  name?: string;
  images?: string[];
  category?: (Category & id | string);
  features?: string[];
  terms?: string[];
  driver_age?: number;
  price?: number;
}
export namespace cars {
  const BUCKET_ID = '61bc97c61fcf06002dc72008';
    export function get (...args: getArgs) {
      return Bucket.data.get<Cars & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Cars & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Cars, "_id">) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Cars & id) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
      document: Partial<Cars> & id
    ) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
        return Bucket.data.realtime.get<Cars & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Cars & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car{
  _id?: string;
  price?: number;
  car?: (Cars & id | string);
  user?: (User & id | string);
  start?: Date | string;
  end?: Date | string;
  office_to_take?: (Office & id | string);
  office_to_be_given?: (Office & id | string);
  packets?: (Car_Packet & id | string)[];
  additional_products?: (Additional_Products & id | string)[];
  name?: string;
  surname?: string;
  passport?: string;
  birthday?: Date | string;
}
export namespace rent_a_car {
  const BUCKET_ID = '61bc998e1fcf06002dc7206e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car, "_id">) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car & id) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
      document: Partial<Rent_a_Car> & id
    ) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
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
        return Bucket.data.realtime.get<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Car_Packet{
  _id?: string;
  name?: string;
  price?: number;
  features?: string[];
}
export namespace car_packet {
  const BUCKET_ID = '61bc9a141fcf06002dc72094';
    export function get (...args: getArgs) {
      return Bucket.data.get<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Car_Packet, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Car_Packet & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Car_Packet> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Car_Packet & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Car_Packet & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Additional_Products{
  _id?: string;
  name?: string;
  price?: number;
  description?: string;
}
export namespace additional_products {
  const BUCKET_ID = '61bc9aaa1fcf06002dc720c6';
    export function get (...args: getArgs) {
      return Bucket.data.get<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Additional_Products, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Additional_Products & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Additional_Products> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Additional_Products & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Additional_Products & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Contact{
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  message?: string;
}
export namespace contact {
  const BUCKET_ID = '61d6da34c0da93002c1dd460';
    export function get (...args: getArgs) {
      return Bucket.data.get<Contact & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Contact & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Contact, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Contact & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Contact> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Contact & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Contact & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car_Site_Items{
  _id?: string;
  logo?: string;
  social_media?: {
  name?: string;
  link?: string;}[];
  discount_code?: string;
}
export namespace rent_a_car_site_items {
  const BUCKET_ID = '61bc9c161fcf06002dc720f0';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car_Site_Items, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car_Site_Items & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rent_a_Car_Site_Items> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
  }
}