export interface Album {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `upc` |
   * | Type | `Edm.String` |
   */
  upc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `is_explicit` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  is_explicit: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `volume_number` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  volume_number: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `has_cover` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  has_cover: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `number_of_tracks` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  number_of_tracks: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `status_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  status_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_added` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_added: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `street_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  street_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `release_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  release_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `original_release_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  original_release_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_deleted` |
   * | Type | `Edm.DateTimeOffset` |
   */
  date_deleted: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  artist_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_name` |
   * | Type | `Edm.String` |
   */
  artist_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_date_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  artist_date_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_date_added` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  artist_date_added: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `label_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  label_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `label_name` |
   * | Type | `Edm.String` |
   */
  label_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `provider_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  provider_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `provider_name` |
   * | Type | `Edm.String` |
   */
  provider_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `provider_spec_id` |
   * | Type | `Edm.String` |
   */
  provider_spec_id: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `price_code_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  price_code_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `genres` |
   * | Type | `Collection(Rhymba.Genre)` |
   */
  genres?: Array<Genre>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `tracks` |
   * | Type | `Collection(Rhymba.Media)` |
   */
  tracks?: Array<Media>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `geos` |
   * | Type | `Collection(Rhymba.Geo)` |
   */
  geos?: Array<Geo>;
}

export type AlbumId = number | { id: number };

export interface EditableAlbum
  extends Pick<
      Album,
      | 'is_explicit'
      | 'volume_number'
      | 'has_cover'
      | 'number_of_tracks'
      | 'status_id'
      | 'date_added'
      | 'date_updated'
      | 'artist_id'
      | 'artist_date_updated'
      | 'artist_date_added'
      | 'label_id'
      | 'provider_id'
      | 'price_code_id'
      | 'score'
    >,
    Partial<
      Pick<
        Album,
        | 'name'
        | 'upc'
        | 'street_date'
        | 'release_date'
        | 'original_release_date'
        | 'date_deleted'
        | 'artist_name'
        | 'label_name'
        | 'provider_name'
        | 'provider_spec_id'
      >
    > {}

export interface Album_GetParams {
  keyword?: string | null;
  id_cdl?: string | null;
  full_search: boolean;
}

export interface Artist {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_added` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_added: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `catalog_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  catalog_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `language` |
   * | Type | `Edm.String` |
   */
  language: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `description` |
   * | Type | `Edm.String` |
   */
  description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `media_genres` |
   * | Type | `Collection(Rhymba.Genre)` |
   */
  media_genres?: Array<Genre>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `media_providers` |
   * | Type | `Collection(Rhymba.Provider)` |
   */
  media_providers?: Array<Provider>;
}

export type ArtistId = number | { id: number };

export interface EditableArtist
  extends Pick<
      Artist,
      'date_added' | 'date_updated' | 'catalog_updated' | 'score'
    >,
    Partial<Pick<Artist, 'name' | 'language' | 'description'>> {}

export interface Artist_GetParams {
  keyword?: string | null;
  id_cdl?: string | null;
  full_search: boolean;
}

export interface Genre {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
}

export type GenreId = number | { id: number };

export interface EditableGenre
  extends Pick<Genre, 'score'>,
    Partial<Pick<Genre, 'name'>> {}

export interface Geo {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  id: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `country_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  country_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `country_name` |
   * | Type | `Edm.String` |
   */
  country_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `country_code` |
   * | Type | `Edm.String` |
   */
  country_code: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `currency_code` |
   * | Type | `Edm.String` |
   */
  currency_code: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `status_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  status_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `domainsum` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  domainsum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `price_code_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  price_code_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `price_code` |
   * | Type | `Edm.String` |
   */
  price_code: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `price` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  price: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `max_retail_price` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  max_retail_price: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `surcharge` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  surcharge: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `street_date` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  street_date: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `release_date` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  release_date: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
}

export type GeoId = string | { id: string };

export interface EditableGeo
  extends Pick<
      Geo,
      | 'country_id'
      | 'status_id'
      | 'domainsum'
      | 'price_code_id'
      | 'price'
      | 'max_retail_price'
      | 'surcharge'
      | 'street_date'
      | 'release_date'
      | 'score'
    >,
    Partial<
      Pick<
        Geo,
        'country_name' | 'country_code' | 'currency_code' | 'price_code'
      >
    > {}

export interface Media {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `title` |
   * | Type | `Edm.String` |
   */
  title: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `length` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  length: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `isrc` |
   * | Type | `Edm.String` |
   */
  isrc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `genre_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  genre_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `genre_name` |
   * | Type | `Edm.String` |
   */
  genre_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `is_explicit` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  is_explicit: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `track_number` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  track_number: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `volume_number` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  volume_number: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `status_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  status_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  artist_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_name` |
   * | Type | `Edm.String` |
   */
  artist_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_date_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  artist_date_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `artist_date_added` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  artist_date_added: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_name` |
   * | Type | `Edm.String` |
   */
  album_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_upc` |
   * | Type | `Edm.String` |
   */
  album_upc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_provider_spec_id` |
   * | Type | `Edm.String` |
   */
  album_provider_spec_id: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_label_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_label_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_provider_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_provider_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_provider_name` |
   * | Type | `Edm.String` |
   */
  album_provider_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_artist_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_artist_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_is_explicit` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  album_is_explicit: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_status_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_status_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_volume_number` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_volume_number: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_number_of_tracks` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_number_of_tracks: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_street_date` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  album_street_date: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_release_date` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  album_release_date: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_genre_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  album_genre_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `album_genre_name` |
   * | Type | `Edm.String` |
   */
  album_genre_name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `provider_id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  provider_id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_added` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_added: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `date_updated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  date_updated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `street_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  street_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `release_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  release_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `original_release_date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  original_release_date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `geos` |
   * | Type | `Collection(Rhymba.Geo)` |
   */
  geos?: Array<Geo>;
}

export type MediaId = number | { id: number };

export interface EditableMedia
  extends Pick<
      Media,
      | 'length'
      | 'genre_id'
      | 'is_explicit'
      | 'track_number'
      | 'volume_number'
      | 'status_id'
      | 'artist_id'
      | 'artist_date_updated'
      | 'artist_date_added'
      | 'album_id'
      | 'album_label_id'
      | 'album_provider_id'
      | 'album_artist_id'
      | 'album_is_explicit'
      | 'album_status_id'
      | 'album_volume_number'
      | 'album_number_of_tracks'
      | 'album_street_date'
      | 'album_release_date'
      | 'album_genre_id'
      | 'provider_id'
      | 'date_added'
      | 'date_updated'
      | 'score'
    >,
    Partial<
      Pick<
        Media,
        | 'title'
        | 'isrc'
        | 'genre_name'
        | 'artist_name'
        | 'album_name'
        | 'album_upc'
        | 'album_provider_spec_id'
        | 'album_provider_name'
        | 'album_genre_name'
        | 'street_date'
        | 'release_date'
        | 'original_release_date'
      >
    > {}

export interface Media_GetParams {
  keyword?: string | null;
  id_cdl?: string | null;
  full_search: boolean;
}

export interface Provider {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `name` |
   * | Type | `Edm.String` |
   */
  name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `score` |
   * | Type | `Edm.Single` |
   * | Nullable | `false` |
   */
  score: number;
}

export type ProviderId = number | { id: number };

export interface EditableProvider
  extends Pick<Provider, 'score'>,
    Partial<Pick<Provider, 'name'>> {}

export interface IQueryable_1OfAlbum {}

export interface EditableIQueryable_1OfAlbum {}

export interface IQueryable_1OfArtist {}

export interface EditableIQueryable_1OfArtist {}

export interface IQueryable_1OfMedia {}

export interface EditableIQueryable_1OfMedia {}
