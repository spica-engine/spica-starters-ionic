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

export interface Firebase_Notification{
  _id?: string;
  title?: string;
  body?: string;
  topic?: string;
  token?: string;
  data?: string;
  tag?: string;
  created_at?: Date | string;
}
export namespace firebase_notification {
  const BUCKET_ID = '618127beb0ba86002e5d6315';
    export function get (...args: getArgs) {
      return Bucket.data.get<Firebase_Notification & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Firebase_Notification & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Firebase_Notification, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Firebase_Notification & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Firebase_Notification> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Firebase_Notification & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Firebase_Notification & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Activity{
  _id?: string;
  action?: ('like'|'comment'|'follow_post'|'follow_user'|'tag_in_post'|'tag_in_comment'|'re_post');
  owner?: (User & id | string);
  user?: (User & id | string);
  post?: (Post & id | string);
  metadata?: string;
  created_at?: Date | string;
}
export namespace activity {
  const BUCKET_ID = '618127bfb0ba86002e5d6318';
    export function get (...args: getArgs) {
      return Bucket.data.get<Activity & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Activity & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Activity, "_id">) {
      ['owner','user','post'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Activity & id) {
      ['owner','user','post'].forEach((field) => {
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
      document: Partial<Activity> & id
    ) {
      ['owner','user','post'].forEach((field) => {
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
        return Bucket.data.realtime.get<Activity & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Activity & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User{
  _id?: string;
  identity?: string;
  username: string;
  thumbnail?: string;
  email?: string;
  name?: string;
  surname?: string;
  fcm_token?: string;
  headline?: string;
  last_online_date?: Date | string;
  language?: any ;
  notification?: boolean;
  timezone?: number;
  visibility?: ('public'|'private');
  created_at?: Date | string;
}
export namespace user {
  const BUCKET_ID = '618127c0b0ba86002e5d631b';
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
      document: Partial<User>
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

export interface Post{
  _id?: string;
  text?: string;
  user?: (User & id | string);
  tags?: (User & id | string)[];
  visibility?: ('public'|'tagged_users');
  created_at?: Date | string;
  event_date?: Date | string;
  like_count?: number;
  comment_count?: number;
  post?: Post;
  hashtags?: (Hashtag & id | string)[];
  file?: {
  url?: string;
  mimetype?: string;};
}
export namespace post {
  const BUCKET_ID = '618127c1b0ba86002e5d631e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Post & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Post & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Post, "_id">) {
      ['user','tags','post','hashtags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Post & id) {
      ['user','tags','post','hashtags'].forEach((field) => {
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
      document: Partial<Post> & id
    ) {
      ['user','tags','post','hashtags'].forEach((field) => {
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
        return Bucket.data.realtime.get<Post & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Post & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Waiting_Request{
  _id?: string;
  request_id?: string;
  sender?: (User & id | string);
  reciever?: (User & id | string);
  created_at?: Date | string;
}
export namespace waiting_request {
  const BUCKET_ID = '618127c2b0ba86002e5d6321';
    export function get (...args: getArgs) {
      return Bucket.data.get<Waiting_Request & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Waiting_Request & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Waiting_Request, "_id">) {
      ['sender','reciever'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Waiting_Request & id) {
      ['sender','reciever'].forEach((field) => {
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
      document: Partial<Waiting_Request> & id
    ) {
      ['sender','reciever'].forEach((field) => {
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
        return Bucket.data.realtime.get<Waiting_Request & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Waiting_Request & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Blocked_User{
  _id?: string;
  title?: string;
  blocking?: (User & id | string);
  blocked?: (User & id | string);
  created_at?: Date | string;
}
export namespace blocked_user {
  const BUCKET_ID = '618127c3b0ba86002e5d6324';
    export function get (...args: getArgs) {
      return Bucket.data.get<Blocked_User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Blocked_User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Blocked_User, "_id">) {
      ['blocking','blocked'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Blocked_User & id) {
      ['blocking','blocked'].forEach((field) => {
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
      document: Partial<Blocked_User> & id
    ) {
      ['blocking','blocked'].forEach((field) => {
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
        return Bucket.data.realtime.get<Blocked_User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Blocked_User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Liked_Post{
  _id?: string;
  like_id?: string;
  user?: (User & id | string);
  post?: Post;
  created_at?: Date | string;
}
export namespace liked_post {
  const BUCKET_ID = '618127c5b0ba86002e5d6327';
    export function get (...args: getArgs) {
      return Bucket.data.get<Liked_Post & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Liked_Post & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Liked_Post, "_id">) {
      ['user','post'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Liked_Post & id) {
      ['user','post'].forEach((field) => {
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
      document: Partial<Liked_Post> & id
    ) {
      ['user','post'].forEach((field) => {
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
        return Bucket.data.realtime.get<Liked_Post & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Liked_Post & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Notification{
  _id?: string;
  message?: string;
  user?: (User & id | string);
  post?: (Post & id | string);
  created_at?: Date | string;
  send_date?: Date | string;
  data?: string;
}
export namespace notification {
  const BUCKET_ID = '618127c6b0ba86002e5d632a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Notification & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Notification & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Notification, "_id">) {
      ['user','post'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Notification & id) {
      ['user','post'].forEach((field) => {
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
      document: Partial<Notification> & id
    ) {
      ['user','post'].forEach((field) => {
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
        return Bucket.data.realtime.get<Notification & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Notification & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Follow{
  _id?: string;
  title?: string;
  follower?: User
  following?: User
  date?: Date | string;
}
export namespace follow {
  const BUCKET_ID = '618127c7b0ba86002e5d632d';
    export function get (...args: getArgs) {
      return Bucket.data.get<Follow & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Follow & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Follow, "_id">) {
      ['follower','following'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Follow & id) {
      ['follower','following'].forEach((field) => {
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
      document: Partial<Follow> & id
    ) {
      ['follower','following'].forEach((field) => {
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
        return Bucket.data.realtime.get<Follow & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Follow & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Chat{
  _id?: string;
  name?: string;
  created_at?: Date | string;
  last_active?: {
  date?: Date | string;
  user?: (User & id | string);
  unread_messages_count?: number;
  status?: ('active'|'deleted'|'requested');}[];
  last_message?: string;
  last_message_time?: Date | string;
  last_message_owner?: (User & id | string);
  is_group?: boolean;
  image?: string;
  managers?: (User & id | string)[];
}
export namespace chat {
  const BUCKET_ID = '618127c8b0ba86002e5d6330';
    export function get (...args: getArgs) {
      return Bucket.data.get<Chat & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Chat & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Chat, "_id">) {
      ['last_message_owner','managers'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Chat & id) {
      ['last_message_owner','managers'].forEach((field) => {
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
      ['last_message_owner','managers'].forEach((field) => {
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
  created_at?: Date | string;
  owner?: (User & id | string);
  chat?: (Chat & id | string);
  image?: string;
}
export namespace message {
  const BUCKET_ID = '618127c9b0ba86002e5d6333';
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

export interface Comment{
  _id?: string;
  comment?: string;
  post?: (Post & id | string);
  user?: (User & id | string);
  date?: Date | string;
  hastags?: (Hashtag & id | string)[];
  tags?: (User & id | string)[];
}
export namespace comment {
  const BUCKET_ID = '618127cab0ba86002e5d6336';
    export function get (...args: getArgs) {
      return Bucket.data.get<Comment & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Comment & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Comment, "_id">) {
      ['post','user','hastags','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Comment & id) {
      ['post','user','hastags','tags'].forEach((field) => {
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
      document: Partial<Comment> & id
    ) {
      ['post','user','hastags','tags'].forEach((field) => {
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
        return Bucket.data.realtime.get<Comment & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Comment & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Hashtag{
  _id?: string;
  hashtag?: string;
  times_used?: number;
  created_at?: Date | string;
}
export namespace hashtag {
  const BUCKET_ID = '618127cbb0ba86002e5d6339';
    export function get (...args: getArgs) {
      return Bucket.data.get<Hashtag & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Hashtag & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Hashtag, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Hashtag & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Hashtag> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Hashtag & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Hashtag & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Reported_Post{
  _id?: string;
  title?: string;
  user?: (User & id | string);
  post?: (Post & id | string);
  created_at?: Date | string;
}
export namespace reported_post {
  const BUCKET_ID = '618127ccb0ba86002e5d633c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Reported_Post & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Reported_Post & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Reported_Post, "_id">) {
      ['user','post'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Reported_Post & id) {
      ['user','post'].forEach((field) => {
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
      document: Partial<Reported_Post> & id
    ) {
      ['user','post'].forEach((field) => {
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
        return Bucket.data.realtime.get<Reported_Post & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Reported_Post & id>(BUCKET_ID, ...args);
      };
  }
}