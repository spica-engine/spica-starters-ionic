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
  mail?: string;
  profile_picture?: string;
  continue_watching?: string;
  eighteen_plus?: boolean;
  saved_movies?: (Movies & id | string)[];
  saved_series?: (Series & id | string)[];
}
export namespace user {
  const BUCKET_ID = '621890bc24302e002d2bfe7d';
      export function get (...args: getArgs) {
        return Bucket.data.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<User, "_id">) {
        ['saved_movies','saved_series'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: User & id) {
        ['saved_movies','saved_series'].forEach((field) => {
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
        document: Partial<User> & id
      ) {
        ['saved_movies','saved_series'].forEach((field) => {
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
          return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Series{
  _id?: string;
  title?: string;
  description?: string;
  country?: string;
  imdb_score?: string;
  duration?: number;
  cover?: string;
  season?: {
  episodes?: {
  title?: string;
  date?: Date | string;
  description?: string;
  duration: number;
  cover?: String;
  video?: string;}[];}[];
  year_of_construction?: string;
  eighteen_plus?: boolean;
  genre?: (Genres & id | string)[];
  actors?: (Actors & id | string)[];
}
export namespace series {
  const BUCKET_ID = '6218952a24302e002d2bfeb5';
      export function get (...args: getArgs) {
        return Bucket.data.get<Series & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Series & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Series, "_id">) {
        ['genre','actors'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Series & id) {
        ['genre','actors'].forEach((field) => {
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
        document: Partial<Series> & id
      ) {
        ['genre','actors'].forEach((field) => {
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
          return Bucket.data.realtime.get<Series & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Series & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Movies{
  _id?: string;
  title?: string;
  description?: string;
  cover?: string;
  movie?: string;
  country?: string;
  duration?: number;
  imdb_score?: string;
  eighteen_plus?: boolean;
  year_of_construction?: string;
  genres?: (Genres & id | string)[];
  actors?: (Actors & id | string)[];
}
export namespace movies {
  const BUCKET_ID = '621897af24302e002d2bfed5';
      export function get (...args: getArgs) {
        return Bucket.data.get<Movies & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Movies & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Movies, "_id">) {
        ['genres','actors'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Movies & id) {
        ['genres','actors'].forEach((field) => {
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
        document: Partial<Movies> & id
      ) {
        ['genres','actors'].forEach((field) => {
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
          return Bucket.data.realtime.get<Movies & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Movies & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Genres{
  _id?: string;
  name?: string;
  icon?: string;
}
export namespace genres {
  const BUCKET_ID = '6218986524302e002d2bfee8';
      export function get (...args: getArgs) {
        return Bucket.data.get<Genres & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Genres & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Genres, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Genres & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Genres> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Genres & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Genres & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Actors{
  _id?: string;
  name?: string;
  image?: string;
}
export namespace actors {
  const BUCKET_ID = '6218991124302e002d2bfef7';
      export function get (...args: getArgs) {
        return Bucket.data.get<Actors & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Actors & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Actors, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Actors & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Actors> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Actors & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Actors & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Site_Configurations{
  _id?: string;
  logo?: string;
  title?: string;
  home_movies?: (Movies & id | string)[];
  home_series?: (Series & id | string)[];
}
export namespace site_configurations {
  const BUCKET_ID = '62189c0224302e002d2bff19';
      export function get (...args: getArgs) {
        return Bucket.data.get<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Site_Configurations, "_id">) {
        ['home_movies','home_series'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Site_Configurations & id) {
        ['home_movies','home_series'].forEach((field) => {
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
        document: Partial<Site_Configurations> & id
      ) {
        ['home_movies','home_series'].forEach((field) => {
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
          return Bucket.data.realtime.get<Site_Configurations & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
        };
  }
}