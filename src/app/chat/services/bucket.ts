import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://davuttestasset1-5daef.hq.spicaengine.com/api';
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
  username?: string;
  identity?: string;
  thumbnail?: string;
  email?: string;
  name?: string;
  surname?: string;
  created_at?: Date | string;
  friends?: (User & id | string)[];
}
export namespace user {
  const BUCKET_ID = '619f4406333ff0002e5dd938';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      ['friends'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      ['friends'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      ['friends'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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

export interface Chat{
  _id?: string;
  name?: string;
  managers?: (User & id | string)[];
  informations?: {
  date?: Date | string;
  user?: (User & id | string);
  unread_messages_count?: number;
  status?: ('active'|'deleted'|'requested');}[];
  last_message?: string;
  last_message_time?: Date | string;
  last_message_owner?: (User & id | string);
  is_group?: boolean;
  image?: string;
  created_at?: Date | string;
}
export namespace chat {
  const BUCKET_ID = '619f4407333ff0002e5dd93b';
    export function get (...args: getArgs) {
      return Bucket.data.get<Chat & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Chat & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Chat, "_id">) {
      ['managers','last_message_owner'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Chat & id) {
      ['managers','last_message_owner'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Chat> & id
    ) {
      ['managers','last_message_owner'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Chat & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Chat & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Message{
  _id?: string;
  message?: string;
  owner?: (User & id | string);
  chat?: (Chat & id | string);
  image?: string;
  created_at?: Date | string;
}
export namespace message {
  const BUCKET_ID = '619f4409333ff0002e5dd93e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Message & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Message & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Message, "_id">) {
      ['owner','chat'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Message & id) {
      ['owner','chat'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Message> & id
    ) {
      ['owner','chat'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Message & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Message & id>(BUCKET_ID, ...args);
      };
  }
}