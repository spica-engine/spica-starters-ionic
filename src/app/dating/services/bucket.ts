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

export interface Interests{
  _id?: string;
  interest?: string;
}
export namespace interests {
  const BUCKET_ID = '61c5bc4da57d31002ee368af';
    export function get (...args: getArgs) {
      return Bucket.data.get<Interests & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Interests & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Interests, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Interests & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Interests> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Interests & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Interests & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User{
  _id?: string;
  identity_id?: string;
  name?: string;
  surname?: string;
  email?: string;
  username?: string;
  phone?: string;
  city?: string;
  country?: string;
  gender?: ('male'|'female'|'other');
  school?: string;
  description?: string;
  birthday?: Date | string;
  profile_photo?: string;
  gallery?: string[];
  created_at?: Date | string;
  updated_at?: Date | string;
  location?: { type: "Point", coordinates: [number,number]};
  preferred_match_gender?: ('male'|'female'|'others'|'all');
  job?: string;
  max_distance?: string;
  age_range_start?: number;
  age_range_end?: number;
  visible?: boolean;
  interests?: (Interests & id | string);
}
export namespace user {
  const BUCKET_ID = '61c5bc4ea57d31002ee368b2';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      ['interests'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      ['interests'].forEach((field) => {
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
      ['interests'].forEach((field) => {
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

export interface Likes{
  _id?: string;
  user?: (User & id | string);
  liked_user?: (User & id | string);
  like_type?: ('like'|'superlike');
  created_at?: Date | string;
  matched?: boolean;
}
export namespace likes {
  const BUCKET_ID = '61c5bc50a57d31002ee368b5';
    export function get (...args: getArgs) {
      return Bucket.data.get<Likes & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Likes & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Likes, "_id">) {
      ['user','liked_user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Likes & id) {
      ['user','liked_user'].forEach((field) => {
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
      document: Partial<Likes> & id
    ) {
      ['user','liked_user'].forEach((field) => {
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
        return Bucket.data.realtime.get<Likes & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Likes & id>(BUCKET_ID, ...args);
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
  const BUCKET_ID = '61c5bc54a57d31002ee368c1';
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
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Message & id) {
      ['owner','chat'].forEach((field) => {
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
      document: Partial<Message> & id
    ) {
      ['owner','chat'].forEach((field) => {
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
        return Bucket.data.realtime.get<Message & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Message & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Unlikes{
  _id?: string;
  user?: (User & id | string);
  unliked_user?: (User & id | string);
  created_at?: Date | string;
  primary?: string;
}
export namespace unlikes {
  const BUCKET_ID = '61c5bc51a57d31002ee368b8';
    export function get (...args: getArgs) {
      return Bucket.data.get<Unlikes & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Unlikes & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Unlikes, "_id">) {
      ['user','unliked_user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Unlikes & id) {
      ['user','unliked_user'].forEach((field) => {
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
      document: Partial<Unlikes> & id
    ) {
      ['user','unliked_user'].forEach((field) => {
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
        return Bucket.data.realtime.get<Unlikes & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Unlikes & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Match{
  _id?: string;
  user1?: (User & id | string);
  user2?: (User & id | string);
  user1_like_type?: ('like'|'superlike');
  user2_like_type?: ('like'|'superlike');
  created_at?: Date | string;
}
export namespace match {
  const BUCKET_ID = '61c5bc52a57d31002ee368bb';
    export function get (...args: getArgs) {
      return Bucket.data.get<Match & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Match & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Match, "_id">) {
      ['user1','user2'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Match & id) {
      ['user1','user2'].forEach((field) => {
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
      document: Partial<Match> & id
    ) {
      ['user1','user2'].forEach((field) => {
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
        return Bucket.data.realtime.get<Match & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Match & id>(BUCKET_ID, ...args);
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
  const BUCKET_ID = '61c5bc53a57d31002ee368be';
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
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Chat & id) {
      ['managers','last_message_owner'].forEach((field) => {
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
      document: Partial<Chat> & id
    ) {
      ['managers','last_message_owner'].forEach((field) => {
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
        return Bucket.data.realtime.get<Chat & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Chat & id>(BUCKET_ID, ...args);
      };
  }
}