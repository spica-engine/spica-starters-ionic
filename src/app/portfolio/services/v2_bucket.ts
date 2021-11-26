import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-test-9ef6b.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };
export interface Music_User{
  _id?: string;
  username?: string;
  name?: string;
  surname?: string;
  identity_id?: string;
  email?: string;
  bio?: string;
  birthday?: Date | string;
  gender?: ('Male'|'Female'|'Other');
  country?: ('TR'|'EN'|'US'|'DE'|'BR');
  profile_picture?: string;
  is_verified?: boolean;
  followed_artists?: (Music_Artist & id | string)[];
  friends?: (Music_User & id | string)[];
  uploaded_tracks?: (Music_Track & id | string)[];
  uploaded_albums?: (Music_Album & id | string)[];
  uploaded_playlists?: (Music_Playlist & id | string)[];
  play_history?: (Music_Track & id | string)[];
  currently_playing?: (Music_Track & id | string);
  playlists?: (Music_Playlist & id | string)[];
  liked_tracks?: (Music_Track & id | string)[];
  liked_albums?: (Music_Album & id | string)[];
  liked_playlists?: (Music_Playlist & id | string)[];
}
export namespace music_user {
  const BUCKET_ID = '619e1106c76489002e9b786c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_User, "_id">) {
      ['followed_artists','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_User & id) {
      ['followed_artists','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
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
      document: Partial<Music_User> & id
    ) {
      ['followed_artists','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_User & id>(BUCKET_ID, ...args);
      };
  }
}
export interface Music_Artist{
  _id?: string;
  name?: string;
  surname?: string;
  identity_id?: string;
  profile_picture?: string;
  birthday?: Date | string;
  bio?: string;
  is_verified?: boolean;
  uploaded_tracks?: (Music_Track & id | string)[];
  uploaded_albums?: (Music_Album & id | string)[];
  followers?: (Music_User & id | string)[];
  popularity?: number;
}
export namespace music_artist {
  const BUCKET_ID = '619e1104c76489002e9b7869';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Artist & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Artist & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Artist, "_id">) {
      ['uploaded_tracks','uploaded_albums','followers'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Artist & id) {
      ['uploaded_tracks','uploaded_albums','followers'].forEach((field) => {
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
      document: Partial<Music_Artist> & id
    ) {
      ['uploaded_tracks','uploaded_albums','followers'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Artist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Artist & id>(BUCKET_ID, ...args);
      };
  }
}
export interface Music_Track{
  _id?: string;
  name?: string;
  description?: string;
  created_at?: Date | string;
  cover?: string;
  source?: string;
  clip?: string;
  artist?: (Music_Artist & id | string);
  user?: (Music_User & id | string);
  album?: (Music_Album & id | string);
  likes?: (Music_User & id | string)[];
  kind?: (Music_Track_Kind & id | string)[];
  stream_count?: number;
  features?: {
  danceability?: number;
  loudness?: number;
  speechiness?: number;
  energy?: number;
  tempo?: number;
  duration?: number;
  popularity?: number;
  explicit?: boolean;
  language?: ('English'|'Türkçe'|'Français'|'Español'|'Deutsch');};
}
export namespace music_track {
  const BUCKET_ID = '619e1102c76489002e9b7866';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Track & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Track & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Track, "_id">) {
      ['artist','user','album','likes', 'kind'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Track & id) {
      ['artist','user','album','likes','kind'].forEach((field) => {
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
      document: Partial<Music_Track> & id
    ) {
      ['artist','user','album','likes','kind'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Track & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Track & id>(BUCKET_ID, ...args);
      };
  }
}
export interface Music_Album{
  _id?: string;
  name?: string;
  cover?: string;
  tracks?: (Music_Track & id | string)[];
  created_at?: Date | string;
  likes?: (Music_User & id | string)[];
  popularity?: number;
  artist?: (Music_Artist & id | string);
  user?: (Music_User & id | string);
}
export namespace music_album {
  const BUCKET_ID = '619e1109c76489002e9b7872';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Album & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Album & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Album, "_id">) {
      ['tracks','likes','artist','user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Album & id) {
      ['tracks','likes','artist','user'].forEach((field) => {
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
      document: Partial<Music_Album> & id
    ) {
      ['tracks','likes','artist','user'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Album & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Album & id>(BUCKET_ID, ...args);
      };
  }
}
export interface Music_Playlist{
  _id?: string;
  name?: string;
  image?: string;
  tracks?: (Music_Track & id | string)[];
  created_at?: Date | string;
  popularity?: number;
  owner?: (Music_User & id | string);
  admins?: (Music_User & id | string)[];
  likes?: (Music_User & id | string)[];
  private?: boolean;
}
export namespace music_playlist {
  const BUCKET_ID = '619e1107c76489002e9b786f';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Playlist & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Playlist & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Playlist, "_id">) {
      ['tracks','owner','admins','likes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Playlist & id) {
      ['tracks','owner','admins','likes'].forEach((field) => {
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
      document: Partial<Music_Playlist> & id
    ) {
      ['tracks','owner','admins','likes'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Playlist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Playlist & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Music_Track_Kind{
  _id?: string;
  title?: string;
  image?: string;
}
export namespace music_track_kind {
  const BUCKET_ID = '619e392dc76489002e9b7e73';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Track_Kind & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Track_Kind & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Track_Kind, "_id">) {
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Track_Kind & id) {
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Music_Track_Kind> & id
    ) {
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Music_Track_Kind & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Track_Kind & id>(BUCKET_ID, ...args);
      };
  }
}