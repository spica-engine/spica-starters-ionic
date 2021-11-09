import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-test-9ec1c.hq.spicaengine.com/api';
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
  mail?: string;
  bio?: string;
  birthday?: Date | string;
  gender?: ('Male'|'Female'|'Other');
  country?: ('TR'|'EN'|'US'|'DE'|'BR');
  profile_picture?: string;
  is_verified?: boolean;
  followings?: (Music_Artist & id | string)[];
  friends?: (User & id | string)[];
  uploaded_tracks?: (Music_Track & id | string)[];
  // uploaded_albums?: (<album-bucket> | string)[];
  // uploaded_playlists?: (<playlist-bucket> | string)[];
  // play_history?: (Music_Track & id | string)[];
  // currently_playing?: (Music_Track & id | string);
  // playlists?: (<playlist-bucket> | string)[];
  // liked_tracks?: (Music_Track & id | string)[];
  // liked_albums?: (<album-bucket> | string)[];
  // liked_playlists?: (<playlist-bucket> | string)[];
}
export namespace user {
  const BUCKET_ID = '61838f894e0014002d146693';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      ['followings','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      ['followings','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
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
      ['followings','friends','uploaded_tracks','uploaded_albums','uploaded_playlists','play_history','currently_playing','playlists','liked_tracks','liked_albums','liked_playlists'].forEach((field) => {
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

export interface Music_Playlist{
  _id?: string;
  name?: string;
  image?: string;
  tracks?: (Music_Track & id | string)[];
  created_at?: Date | string;
  popularity?: number;
  owner?: (User & id | string);
  admins?: (User & id | string)[];
  likes?: (User & id | string)[];
  private?: boolean;
}
export namespace music_playlist {
  const BUCKET_ID = '61890f3ab2af16002f4584e2';
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Playlist & id) {
      ['tracks','owner','admins','likes'].forEach((field) => {
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
      document: Partial<Music_Playlist> & id
    ) {
      ['tracks','owner','admins','likes'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Playlist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Playlist & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Music_Album{
  _id?: string;
  name?: string;
  cover?: string;
  tracks?: (Music_Track & id | string)[];
  created_at?: Date | string;
  likes?: (User & id | string)[];
  popularity?: number;
  artist?: (Music_Artist & id | string);
  user?: (User & id | string);
}
export namespace music_album {
  const BUCKET_ID = '61890f3bb2af16002f4584e5';
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Album & id) {
      ['tracks','likes','artist','user'].forEach((field) => {
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
      document: Partial<Music_Album> & id
    ) {
      ['tracks','likes','artist','user'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Album & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Album & id>(BUCKET_ID, ...args);
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
  explicit?: boolean;
  language?: ('English'|'Türkçe'|'Français'|'Español'|'Deutsch');};
  kind?: ('Rap'|'Caz'|'Classic'|'Hiphop'|'Pop'|'Rock')[];
  available_countries?: ('TR'|'EN'|'US'|'DE'|'BR')[];
}
export namespace music_track {
  const BUCKET_ID = '61890f34b2af16002f4584d8';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Track & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Track & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Track, "_id">) {
      ['artist','user','album','likes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Track & id) {
      ['artist','user','album','likes'].forEach((field) => {
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
      document: Partial<Music_Track> & id
    ) {
      ['artist','user','album','likes'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Track & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Track & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Music_Artist{
  _id?: string;
  name?: string;
  surname?: string;
  identity_id?: string;
  profile_pictures?: string[];
  birthday?: Date | string;
  bio?: string;
  is_verified?: boolean;
  uploaded_Trackss?: (Music_Track & id | string)[];
  uploaded_albums?: (Music_Album & id | string)[];
  followers?: (User & id | string)[];
  popularity?: number;
}
export namespace music_artist {
  const BUCKET_ID = '61890f35b2af16002f4584db';
    export function get (...args: getArgs) {
      return Bucket.data.get<Music_Artist & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Music_Artist & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Music_Artist, "_id">) {
      ['uploaded_Trackss','uploaded_albums','followers'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Music_Artist & id) {
      ['uploaded_Trackss','uploaded_albums','followers'].forEach((field) => {
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
      document: Partial<Music_Artist> & id
    ) {
      ['uploaded_Trackss','uploaded_albums','followers'].forEach((field) => {
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
        return Bucket.data.realtime.get<Music_Artist & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Music_Artist & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Comment{
  _id?: string;
  username?: string;
  title?: string;
  message?: string;
  rating?: number;
  date?: Date | string;
}
export namespace comment {
  const BUCKET_ID = '618393ae4e0014002d14677a';
    export function get (...args: getArgs) {
      return Bucket.data.get<Comment & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Comment & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Comment, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Comment & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Comment> & id
    ) {
      
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

export interface About_Company{
  _id?: string;
  name?: string;
  mail?: string;
  phone?: string;
  location?: { type: "Point", coordinates: [number,number]};
  presentation?: string;
  images?: string[];
  social_medias?: {
  name?: string;
  url?: string;}[];
  facts?: {
  name?: string;
  count?: number;}[];
  partners?: {
  logo?: string;
  name?: string;}[];
}
export namespace about_company {
  const BUCKET_ID = '618393af4e0014002d14677d';
    export function get (...args: getArgs) {
      return Bucket.data.get<About_Company & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<About_Company & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<About_Company, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: About_Company & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<About_Company> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<About_Company & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<About_Company & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Company_Team{
  _id?: string;
  profile_picture?: string;
  name?: string;
  position?: string;
}
export namespace company_team {
  const BUCKET_ID = '618393af4e0014002d146780';
    export function get (...args: getArgs) {
      return Bucket.data.get<Company_Team & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Company_Team & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Company_Team, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Company_Team & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Company_Team> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Company_Team & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Company_Team & id>(BUCKET_ID, ...args);
      };
  }
}

export interface About_Me{
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  birthday?: Date | string;
  jobs?: string[];
  phone?: string;
  skills?: {
  name?: string;
  percent?: number;}[];
  bio?: string;
  location?: { type: "Point", coordinates: [number,number]};
  facts?: {
  name?: string;
  count?: number;}[];
  resume?: {
  category?: string;
  resume_in?: {
  position?: string;
  description?: string;
  years?: string;}[];}[];
  images?: string[];
}
export namespace about_me {
  const BUCKET_ID = '618393b04e0014002d146783';
    export function get (...args: getArgs) {
      return Bucket.data.get<About_Me & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<About_Me & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<About_Me, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: About_Me & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<About_Me> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<About_Me & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<About_Me & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Service{
  _id?: string;
  image?: string;
  name?: string;
  description?: string;
  features?: {
  image?: string;
  title?: string;
  description?: string;}[];
}
export namespace service {
  const BUCKET_ID = '618393b04e0014002d146786';
    export function get (...args: getArgs) {
      return Bucket.data.get<Service & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Service & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Service, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Service & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Service> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Service & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Service & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Portfolio{
  _id?: string;
  images?: string[];
  name?: string;
  url?: string;
  date?: Date | string;
}
export namespace portfolio {
  const BUCKET_ID = '618393ae4e0014002d146778';
    export function get (...args: getArgs) {
      return Bucket.data.get<Portfolio & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Portfolio & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Portfolio, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Portfolio & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Portfolio> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Portfolio & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Portfolio & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Blog{
  _id?: string;
  images?: string[];
  title?: string;
  content?: string;
  date?: Date | string;
}
export namespace blog {
  const BUCKET_ID = '618393b14e0014002d14678b';
    export function get (...args: getArgs) {
      return Bucket.data.get<Blog & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Blog & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Blog, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Blog & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Blog> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Blog & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Blog & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Reference{
  _id?: string;
  profile_picture?: string;
  name?: string;
  message?: string;
  company?: string;
  position?: string;
}
export namespace reference {
  const BUCKET_ID = '618393b24e0014002d14678f';
    export function get (...args: getArgs) {
      return Bucket.data.get<Reference & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Reference & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Reference, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Reference & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Reference> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Reference & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Reference & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Contact{
  _id?: string;
  name?: string;
  mail?: string;
  phone?: string;
  message?: string;
  date?: Date | string;
  answer?: string;
}
export namespace contact {
  const BUCKET_ID = '618393b34e0014002d146791';
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