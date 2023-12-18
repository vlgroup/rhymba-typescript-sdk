import { ODataModelResponseV4 } from '@odata2ts/odata-core';
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  ODataResponse
} from '@odata2ts/http-client-api';
import {
  ODataService,
  EntityTypeServiceV4,
  EntitySetServiceV4
} from '@odata2ts/odata-service';
import {
  AlbumId,
  ArtistId,
  GenreId,
  GeoId,
  MediaId,
  ProviderId,
  Album,
  EditableAlbum,
  IQueryable_1OfAlbum,
  Album_GetParams,
  Artist,
  EditableArtist,
  IQueryable_1OfArtist,
  Artist_GetParams,
  Genre,
  EditableGenre,
  Geo,
  EditableGeo,
  Media,
  EditableMedia,
  IQueryable_1OfMedia,
  Media_GetParams,
  Provider,
  EditableProvider,
  EditableIQueryable_1OfAlbum,
  EditableIQueryable_1OfArtist,
  EditableIQueryable_1OfMedia
} from './RhymbaModel';
import {
  QAlbumId,
  QArtistId,
  QGenreId,
  QGeoId,
  QMediaId,
  QProviderId,
  QAlbum,
  qAlbum,
  Album_QGet,
  QArtist,
  qArtist,
  Artist_QGet,
  QGenre,
  qGenre,
  QGeo,
  qGeo,
  QMedia,
  qMedia,
  Media_QGet,
  QProvider,
  qProvider,
  QIQueryable_1OfAlbum,
  qIQueryable_1OfAlbum,
  QIQueryable_1OfArtist,
  qIQueryable_1OfArtist,
  QIQueryable_1OfMedia,
  qIQueryable_1OfMedia
} from './QRhymba';

export class RhymbaService<
  ClientType extends ODataHttpClient
> extends ODataService<ClientType> {
  public Albums(): AlbumCollectionService<ClientType>;
  public Albums(id: AlbumId): AlbumService<ClientType>;
  public Albums(id?: AlbumId | undefined) {
    const fieldName = 'Albums';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new AlbumCollectionService(client, path, fieldName)
      : new AlbumService(client, path, new QAlbumId(fieldName).buildUrl(id));
  }

  public Artists(): ArtistCollectionService<ClientType>;
  public Artists(id: ArtistId): ArtistService<ClientType>;
  public Artists(id?: ArtistId | undefined) {
    const fieldName = 'Artists';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new ArtistCollectionService(client, path, fieldName)
      : new ArtistService(client, path, new QArtistId(fieldName).buildUrl(id));
  }

  public Genres(): GenreCollectionService<ClientType>;
  public Genres(id: GenreId): GenreService<ClientType>;
  public Genres(id?: GenreId | undefined) {
    const fieldName = 'Genres';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GenreCollectionService(client, path, fieldName)
      : new GenreService(client, path, new QGenreId(fieldName).buildUrl(id));
  }

  public Geos(): GeoCollectionService<ClientType>;
  public Geos(id: GeoId): GeoService<ClientType>;
  public Geos(id?: GeoId | undefined) {
    const fieldName = 'Geos';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GeoCollectionService(client, path, fieldName)
      : new GeoService(client, path, new QGeoId(fieldName).buildUrl(id));
  }

  public Medias(): MediaCollectionService<ClientType>;
  public Medias(id: MediaId): MediaService<ClientType>;
  public Medias(id?: MediaId | undefined) {
    const fieldName = 'Medias';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new MediaCollectionService(client, path, fieldName)
      : new MediaService(client, path, new QMediaId(fieldName).buildUrl(id));
  }

  public Providers(): ProviderCollectionService<ClientType>;
  public Providers(id: ProviderId): ProviderService<ClientType>;
  public Providers(id?: ProviderId | undefined) {
    const fieldName = 'Providers';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new ProviderCollectionService(client, path, fieldName)
      : new ProviderService(
          client,
          path,
          new QProviderId(fieldName).buildUrl(id)
        );
  }
}

export class AlbumService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Album, EditableAlbum, QAlbum> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlbum);
  }

  public genres(): GenreCollectionService<ClientType>;
  public genres(id: GenreId): GenreService<ClientType>;
  public genres(id?: GenreId | undefined) {
    const fieldName = 'genres';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GenreCollectionService(client, path, fieldName)
      : new GenreService(client, path, new QGenreId(fieldName).buildUrl(id));
  }

  public tracks(): MediaCollectionService<ClientType>;
  public tracks(id: MediaId): MediaService<ClientType>;
  public tracks(id?: MediaId | undefined) {
    const fieldName = 'tracks';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new MediaCollectionService(client, path, fieldName)
      : new MediaService(client, path, new QMediaId(fieldName).buildUrl(id));
  }

  public geos(): GeoCollectionService<ClientType>;
  public geos(id: GeoId): GeoService<ClientType>;
  public geos(id?: GeoId | undefined) {
    const fieldName = 'geos';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GeoCollectionService(client, path, fieldName)
      : new GeoService(client, path, new QGeoId(fieldName).buildUrl(id));
  }
}

export class AlbumCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Album,
  EditableAlbum,
  QAlbum,
  AlbumId
> {
  private _Album_QGet?: Album_QGet;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlbum, new QAlbumId(name));
  }

  public async Get(
    params: Album_GetParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<ODataModelResponseV4<IQueryable_1OfAlbum>> {
    if (!this._Album_QGet) {
      this._Album_QGet = new Album_QGet();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Album_QGet.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Album_QGet.convertResponse(response);
  }
}

export class ArtistService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Artist, EditableArtist, QArtist> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qArtist);
  }

  public media_genres(): GenreCollectionService<ClientType>;
  public media_genres(id: GenreId): GenreService<ClientType>;
  public media_genres(id?: GenreId | undefined) {
    const fieldName = 'media_genres';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GenreCollectionService(client, path, fieldName)
      : new GenreService(client, path, new QGenreId(fieldName).buildUrl(id));
  }

  public media_providers(): ProviderCollectionService<ClientType>;
  public media_providers(id: ProviderId): ProviderService<ClientType>;
  public media_providers(id?: ProviderId | undefined) {
    const fieldName = 'media_providers';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new ProviderCollectionService(client, path, fieldName)
      : new ProviderService(
          client,
          path,
          new QProviderId(fieldName).buildUrl(id)
        );
  }
}

export class ArtistCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Artist,
  EditableArtist,
  QArtist,
  ArtistId
> {
  private _Artist_QGet?: Artist_QGet;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qArtist, new QArtistId(name));
  }

  public async Get(
    params: Artist_GetParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<ODataModelResponseV4<IQueryable_1OfArtist>> {
    if (!this._Artist_QGet) {
      this._Artist_QGet = new Artist_QGet();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Artist_QGet.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Artist_QGet.convertResponse(response);
  }
}

export class GenreService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Genre, EditableGenre, QGenre> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qGenre);
  }
}

export class GenreCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Genre,
  EditableGenre,
  QGenre,
  GenreId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qGenre, new QGenreId(name));
  }
}

export class GeoService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Geo, EditableGeo, QGeo> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qGeo);
  }
}

export class GeoCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, Geo, EditableGeo, QGeo, GeoId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qGeo, new QGeoId(name));
  }
}

export class MediaService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Media, EditableMedia, QMedia> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedia);
  }

  public geos(): GeoCollectionService<ClientType>;
  public geos(id: GeoId): GeoService<ClientType>;
  public geos(id?: GeoId | undefined) {
    const fieldName = 'geos';
    const { client, path } = this.__base;
    return typeof id === 'undefined' || id === null
      ? new GeoCollectionService(client, path, fieldName)
      : new GeoService(client, path, new QGeoId(fieldName).buildUrl(id));
  }
}

export class MediaCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Media,
  EditableMedia,
  QMedia,
  MediaId
> {
  private _Media_QGet?: Media_QGet;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedia, new QMediaId(name));
  }

  public async Get(
    params: Media_GetParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): ODataResponse<ODataModelResponseV4<IQueryable_1OfMedia>> {
    if (!this._Media_QGet) {
      this._Media_QGet = new Media_QGet();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Media_QGet.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Media_QGet.convertResponse(response);
  }
}

export class ProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Provider,
  EditableProvider,
  QProvider
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qProvider);
  }
}

export class ProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Provider,
  EditableProvider,
  QProvider,
  ProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qProvider, new QProviderId(name));
  }
}

export class IQueryable_1OfAlbumService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IQueryable_1OfAlbum,
  EditableIQueryable_1OfAlbum,
  QIQueryable_1OfAlbum
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIQueryable_1OfAlbum);
  }
}

export class IQueryable_1OfArtistService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IQueryable_1OfArtist,
  EditableIQueryable_1OfArtist,
  QIQueryable_1OfArtist
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIQueryable_1OfArtist);
  }
}

export class IQueryable_1OfMediaService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IQueryable_1OfMedia,
  EditableIQueryable_1OfMedia,
  QIQueryable_1OfMedia
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIQueryable_1OfMedia);
  }
}
