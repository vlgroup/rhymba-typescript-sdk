import {
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QStringParam,
  QBooleanParam,
  QueryObject
} from '@odata2ts/odata-query-objects';
import {
  AlbumId,
  Album_GetParams,
  ArtistId,
  Artist_GetParams,
  GenreId,
  GeoId,
  MediaId,
  Media_GetParams,
  ProviderId
} from './RhymbaModel';

export class QAlbum extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix('id'));
  public readonly name = new QStringPath(this.withPrefix('name'));
  public readonly upc = new QStringPath(this.withPrefix('upc'));
  public readonly is_explicit = new QBooleanPath(
    this.withPrefix('is_explicit')
  );
  public readonly volume_number = new QNumberPath(
    this.withPrefix('volume_number')
  );
  public readonly has_cover = new QBooleanPath(this.withPrefix('has_cover'));
  public readonly number_of_tracks = new QNumberPath(
    this.withPrefix('number_of_tracks')
  );
  public readonly status_id = new QNumberPath(this.withPrefix('status_id'));
  public readonly date_added = new QDateTimeOffsetPath(
    this.withPrefix('date_added')
  );
  public readonly date_updated = new QDateTimeOffsetPath(
    this.withPrefix('date_updated')
  );
  public readonly street_date = new QDateTimeOffsetPath(
    this.withPrefix('street_date')
  );
  public readonly release_date = new QDateTimeOffsetPath(
    this.withPrefix('release_date')
  );
  public readonly original_release_date = new QDateTimeOffsetPath(
    this.withPrefix('original_release_date')
  );
  public readonly date_deleted = new QDateTimeOffsetPath(
    this.withPrefix('date_deleted')
  );
  public readonly artist_id = new QNumberPath(this.withPrefix('artist_id'));
  public readonly artist_name = new QStringPath(this.withPrefix('artist_name'));
  public readonly artist_date_updated = new QDateTimeOffsetPath(
    this.withPrefix('artist_date_updated')
  );
  public readonly artist_date_added = new QDateTimeOffsetPath(
    this.withPrefix('artist_date_added')
  );
  public readonly label_id = new QNumberPath(this.withPrefix('label_id'));
  public readonly label_name = new QStringPath(this.withPrefix('label_name'));
  public readonly provider_id = new QNumberPath(this.withPrefix('provider_id'));
  public readonly provider_name = new QStringPath(
    this.withPrefix('provider_name')
  );
  public readonly provider_spec_id = new QStringPath(
    this.withPrefix('provider_spec_id')
  );
  public readonly price_code_id = new QNumberPath(
    this.withPrefix('price_code_id')
  );
  public readonly score = new QNumberPath(this.withPrefix('score'));
  public readonly genres = new QEntityCollectionPath(
    this.withPrefix('genres'),
    () => QGenre
  );
  public readonly tracks = new QEntityCollectionPath(
    this.withPrefix('tracks'),
    () => QMedia
  );
  public readonly geos = new QEntityCollectionPath(
    this.withPrefix('geos'),
    () => QGeo
  );
}

export const qAlbum = new QAlbum();

export class QAlbumId extends QId<AlbumId> {
  private readonly params = [new QNumberParam('id')];

  getParams() {
    return this.params;
  }
}

export class Album_QGet extends QFunction<Album_GetParams> {
  private readonly params = [
    new QStringParam('keyword'),
    new QStringParam('id_cdl'),
    new QBooleanParam('full_search')
  ];

  constructor() {
    super(
      'Rhymba.Get',
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam('NONE', new QIQueryable_1OfAlbum())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QArtist extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix('id'));
  public readonly name = new QStringPath(this.withPrefix('name'));
  public readonly date_added = new QDateTimeOffsetPath(
    this.withPrefix('date_added')
  );
  public readonly date_updated = new QDateTimeOffsetPath(
    this.withPrefix('date_updated')
  );
  public readonly catalog_updated = new QDateTimeOffsetPath(
    this.withPrefix('catalog_updated')
  );
  public readonly language = new QStringPath(this.withPrefix('language'));
  public readonly description = new QStringPath(this.withPrefix('description'));
  public readonly score = new QNumberPath(this.withPrefix('score'));
  public readonly media_genres = new QEntityCollectionPath(
    this.withPrefix('media_genres'),
    () => QGenre
  );
  public readonly media_providers = new QEntityCollectionPath(
    this.withPrefix('media_providers'),
    () => QProvider
  );
}

export const qArtist = new QArtist();

export class QArtistId extends QId<ArtistId> {
  private readonly params = [new QNumberParam('id')];

  getParams() {
    return this.params;
  }
}

export class Artist_QGet extends QFunction<Artist_GetParams> {
  private readonly params = [
    new QStringParam('keyword'),
    new QStringParam('id_cdl'),
    new QBooleanParam('full_search')
  ];

  constructor() {
    super(
      'Rhymba.Get',
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam('NONE', new QIQueryable_1OfArtist())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QGenre extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix('id'));
  public readonly name = new QStringPath(this.withPrefix('name'));
  public readonly score = new QNumberPath(this.withPrefix('score'));
}

export const qGenre = new QGenre();

export class QGenreId extends QId<GenreId> {
  private readonly params = [new QNumberParam('id')];

  getParams() {
    return this.params;
  }
}

export class QGeo extends QueryObject {
  public readonly id = new QStringPath(this.withPrefix('id'));
  public readonly country_id = new QNumberPath(this.withPrefix('country_id'));
  public readonly country_name = new QStringPath(
    this.withPrefix('country_name')
  );
  public readonly country_code = new QStringPath(
    this.withPrefix('country_code')
  );
  public readonly currency_code = new QStringPath(
    this.withPrefix('currency_code')
  );
  public readonly status_id = new QNumberPath(this.withPrefix('status_id'));
  public readonly domainsum = new QNumberPath(this.withPrefix('domainsum'));
  public readonly price_code_id = new QNumberPath(
    this.withPrefix('price_code_id')
  );
  public readonly price_code = new QStringPath(this.withPrefix('price_code'));
  public readonly price = new QNumberPath(this.withPrefix('price'));
  public readonly max_retail_price = new QNumberPath(
    this.withPrefix('max_retail_price')
  );
  public readonly surcharge = new QNumberPath(this.withPrefix('surcharge'));
  public readonly street_date = new QDateTimeOffsetPath(
    this.withPrefix('street_date')
  );
  public readonly release_date = new QDateTimeOffsetPath(
    this.withPrefix('release_date')
  );
  public readonly score = new QNumberPath(this.withPrefix('score'));
}

export const qGeo = new QGeo();

export class QGeoId extends QId<GeoId> {
  private readonly params = [new QStringParam('id')];

  getParams() {
    return this.params;
  }
}

export class QMedia extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix('id'));
  public readonly title = new QStringPath(this.withPrefix('title'));
  public readonly length = new QNumberPath(this.withPrefix('length'));
  public readonly isrc = new QStringPath(this.withPrefix('isrc'));
  public readonly genre_id = new QNumberPath(this.withPrefix('genre_id'));
  public readonly genre_name = new QStringPath(this.withPrefix('genre_name'));
  public readonly is_explicit = new QBooleanPath(
    this.withPrefix('is_explicit')
  );
  public readonly track_number = new QNumberPath(
    this.withPrefix('track_number')
  );
  public readonly volume_number = new QNumberPath(
    this.withPrefix('volume_number')
  );
  public readonly status_id = new QNumberPath(this.withPrefix('status_id'));
  public readonly artist_id = new QNumberPath(this.withPrefix('artist_id'));
  public readonly artist_name = new QStringPath(this.withPrefix('artist_name'));
  public readonly artist_date_updated = new QDateTimeOffsetPath(
    this.withPrefix('artist_date_updated')
  );
  public readonly artist_date_added = new QDateTimeOffsetPath(
    this.withPrefix('artist_date_added')
  );
  public readonly album_id = new QNumberPath(this.withPrefix('album_id'));
  public readonly album_name = new QStringPath(this.withPrefix('album_name'));
  public readonly album_upc = new QStringPath(this.withPrefix('album_upc'));
  public readonly album_provider_spec_id = new QStringPath(
    this.withPrefix('album_provider_spec_id')
  );
  public readonly album_label_id = new QNumberPath(
    this.withPrefix('album_label_id')
  );
  public readonly album_provider_id = new QNumberPath(
    this.withPrefix('album_provider_id')
  );
  public readonly album_provider_name = new QStringPath(
    this.withPrefix('album_provider_name')
  );
  public readonly album_artist_id = new QNumberPath(
    this.withPrefix('album_artist_id')
  );
  public readonly album_is_explicit = new QBooleanPath(
    this.withPrefix('album_is_explicit')
  );
  public readonly album_status_id = new QNumberPath(
    this.withPrefix('album_status_id')
  );
  public readonly album_volume_number = new QNumberPath(
    this.withPrefix('album_volume_number')
  );
  public readonly album_number_of_tracks = new QNumberPath(
    this.withPrefix('album_number_of_tracks')
  );
  public readonly album_street_date = new QDateTimeOffsetPath(
    this.withPrefix('album_street_date')
  );
  public readonly album_release_date = new QDateTimeOffsetPath(
    this.withPrefix('album_release_date')
  );
  public readonly album_genre_id = new QNumberPath(
    this.withPrefix('album_genre_id')
  );
  public readonly album_genre_name = new QStringPath(
    this.withPrefix('album_genre_name')
  );
  public readonly provider_id = new QNumberPath(this.withPrefix('provider_id'));
  public readonly date_added = new QDateTimeOffsetPath(
    this.withPrefix('date_added')
  );
  public readonly date_updated = new QDateTimeOffsetPath(
    this.withPrefix('date_updated')
  );
  public readonly street_date = new QDateTimeOffsetPath(
    this.withPrefix('street_date')
  );
  public readonly release_date = new QDateTimeOffsetPath(
    this.withPrefix('release_date')
  );
  public readonly original_release_date = new QDateTimeOffsetPath(
    this.withPrefix('original_release_date')
  );
  public readonly score = new QNumberPath(this.withPrefix('score'));
  public readonly geos = new QEntityCollectionPath(
    this.withPrefix('geos'),
    () => QGeo
  );
}

export const qMedia = new QMedia();

export class QMediaId extends QId<MediaId> {
  private readonly params = [new QNumberParam('id')];

  getParams() {
    return this.params;
  }
}

export class Media_QGet extends QFunction<Media_GetParams> {
  private readonly params = [
    new QStringParam('keyword'),
    new QStringParam('id_cdl'),
    new QBooleanParam('full_search')
  ];

  constructor() {
    super(
      'Rhymba.Get',
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam('NONE', new QIQueryable_1OfMedia())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QProvider extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix('id'));
  public readonly name = new QStringPath(this.withPrefix('name'));
  public readonly score = new QNumberPath(this.withPrefix('score'));
}

export const qProvider = new QProvider();

export class QProviderId extends QId<ProviderId> {
  private readonly params = [new QNumberParam('id')];

  getParams() {
    return this.params;
  }
}

export class QIQueryable_1OfAlbum extends QueryObject {}

export const qIQueryable_1OfAlbum = new QIQueryable_1OfAlbum();

export class QIQueryable_1OfArtist extends QueryObject {}

export const qIQueryable_1OfArtist = new QIQueryable_1OfArtist();

export class QIQueryable_1OfMedia extends QueryObject {}

export const qIQueryable_1OfMedia = new QIQueryable_1OfMedia();
