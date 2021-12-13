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
export interface User{
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
  followed_artists?: (Artist & id | string)[];
  friends?: (User & id | string)[];
  uploaded_tracks?: (Track & id | string)[];
  uploaded_albums?: (Music_Album & id | string)[];
  uploaded_playlists?: (Playlist & id | string)[];
  play_history?: (Track & id | string)[];
  currently_playing?: (Track & id | string);
  playlists?: (Playlist & id | string)[];
  liked_tracks?: (Track & id | string)[];
  liked_albums?: (Music_Album & id | string)[];
  liked_playlists?: (Playlist & id | string)[];
}
export namespace user {
  const BUCKET_ID = '61b73225b7f4a7002e04d305';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      ['followed_artists','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
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
      document: Partial<User> & id
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
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Artist{
  _id?: string;
  name?: string;
  surname?: string;
  identity_id?: string;
  profile_picture?: string;
  birthday?: Date | string;
  bio?: string;
  is_verified?: boolean;
  uploaded_tracks?: (Track & id | string)[];
  uploaded_albums?: (Music_Album & id | string)[];
  followers?: (User & id | string)[];
  popularity?: number;
}
export namespace artist {
  const BUCKET_ID = '61b73223b7f4a7002e04d302';
    export function get (...args: getArgs) {
      return Bucket.data.get<Artist & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Artist & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Artist, "_id">) {
      ['uploaded_tracks','uploaded_albums','followers'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Artist & id) {
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
      document: Partial<Artist> & id
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
        return Bucket.data.realtime.get<Artist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Artist & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Track{
  _id?: string;
  name?: string;
  description?: string;
  created_at?: Date | string;
  cover?: string;
  source?: string;
  clip?: string;
  artist?: (Artist & id | string);
  user?: (User & id | string);
  album?: (Music_Album & id | string);
  likes?: (User & id | string)[];
  stream_count?: number;
  features?: {
  danceability?: number;
  loudness?: number;
  speechiness?: number;
  energy?: number;
  tempo?: number;
  duration?: number;
  popularity?: number;
  kinds?: (Track_Kind & id | string)[];
  explicit?: boolean;
  language?: ('English'|'Türkçe'|'Français'|'Español'|'Deutsch');};
}
export namespace track {
  const BUCKET_ID = '61b73220b7f4a7002e04d2ff';
    export function get (...args: getArgs) {
      return Bucket.data.get<Track & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Track & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Track, "_id">) {
      ['artist','user','album','likes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Track & id) {
      ['artist','user','album','likes'].forEach((field) => {
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
      document: Partial<Track> & id
    ) {
      ['artist','user','album','likes'].forEach((field) => {
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
        return Bucket.data.realtime.get<Track & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Track & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Music_Album{
  _id?: string;
  name?: string;
  cover?: string;
  tracks?: (Track & id | string)[];
  created_at?: Date | string;
  likes?: (User & id | string)[];
  popularity?: number;
  artist?: (Artist & id | string);
  user?: (User & id | string);
}
export namespace music_album {
  const BUCKET_ID = '61b73228b7f4a7002e04d30f';
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

export interface Track_Kind{
  _id?: string;
  title?: string;
  image?: string;
}
export namespace track_kind {
  const BUCKET_ID = '61b7321fb7f4a7002e04d2fc';
    export function get (...args: getArgs) {
      return Bucket.data.get<Track_Kind & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Track_Kind & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Track_Kind, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Track_Kind & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Track_Kind> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Track_Kind & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Track_Kind & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Playlist{
  _id?: string;
  name?: string;
  image?: string;
  tracks?: (Track & id | string)[];
  created_at?: Date | string;
  popularity?: number;
  owner?: (User & id | string);
  admins?: (User & id | string)[];
  likes?: (User & id | string)[];
  private?: boolean;
}
export namespace playlist {
  const BUCKET_ID = '61b73226b7f4a7002e04d308';
    export function get (...args: getArgs) {
      return Bucket.data.get<Playlist & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Playlist & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Playlist, "_id">) {
      ['tracks','owner','admins','likes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id ? v._id : v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Playlist & id) {
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
      document: Partial<Playlist> & id
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
        return Bucket.data.realtime.get<Playlist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Playlist & id>(BUCKET_ID, ...args);
      };
  }
}