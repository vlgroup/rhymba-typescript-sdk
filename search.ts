import { FetchClient } from '@odata2ts/http-client-fetch';
import { ODataQueryBuilderV4 } from '@odata2ts/odata-query-builder';
import o2tsConfig from './odata2ts.config';
import { RhymbaService } from './src/build/rhymba/RhymbaService';
import { Album, Artist, Media } from './src/build/rhymba/RhymbaModel';
import { QAlbum, QArtist, QMedia } from './src/build/rhymba/QRhymba';

export class Search {
  private rhymbaUrl = o2tsConfig.services!['rhymba'].sourceUrl!;
  private rhymbaAccessToken: string;
  private httpClient: FetchClient;
  private service: RhymbaService<FetchClient>;

  constructor(accessToken: string) {
    this.rhymbaAccessToken = accessToken;
    this.httpClient = new FetchClient({
      params: { access_token: this.rhymbaAccessToken },
    });
    this.service = new RhymbaService(this.httpClient, this.rhymbaUrl);
  }

  private StandardMediaQuery(
    builder: ODataQueryBuilderV4<QMedia>
  ): ODataQueryBuilderV4<QMedia> {
    return builder
      .select('id')
      .select('title')
      .select('artist_id')
      .select('artist_name')
      .top(25);
  }

  private StandardAlbumQuery(
    builder: ODataQueryBuilderV4<QAlbum>
  ): ODataQueryBuilderV4<QAlbum> {
    return builder
      .select('id')
      .select('name')
      .select('artist_id')
      .select('artist_name')
      .top(25);
  }

  private StandardArtistQuery(
    builder: ODataQueryBuilderV4<QArtist>
  ): ODataQueryBuilderV4<QArtist> {
    return builder.select('id').select('name').top(25);
  }

  /**
   * Returns Media search results
   *
   * @param mediaId - Media ID
   * @returns Media
   */

  getMedia(mediaId: number): Promise<Media> | undefined {
    if (!mediaId) {
      return undefined;
    }

    return this.service
      .Medias(mediaId)
      .query((builder) => {
        return this.StandardMediaQuery(builder);
      })
      .then((media) => {
        const results: Media = media.data;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param id_cdl - Array of Media IDs
   * @returns Array of Media
   */
  getMediaByIdCdl(id_cdl: Number[]): Promise<Media[]> | undefined {
    if (id_cdl === undefined) {
      return undefined;
    }

    return this.service
      .Medias()
      .query(
        (builder) => {
          return this.StandardMediaQuery(builder);
        },
        {
          params: {
            id_cdl: "'" + JSON.stringify(id_cdl) + "'",
            access_token: this.rhymbaAccessToken,
          },
        }
      )
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param keyword - Search keyword, not uri encoded
   * @returns Array of Media
   */
  getMediaByKeyword(keyword: string): Promise<Media[]> | undefined {
    if (keyword === undefined) {
      return undefined;
    }

    return this.service
      .Medias()
      .query(
        (builder) => {
          return this.StandardMediaQuery(builder);
        },
        {
          params: {
            keyword: "'" + encodeURIComponent(keyword) + "'",
            access_token: this.rhymbaAccessToken,
          },
        }
      )
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param artistId - Artist ID
   * @returns Array of Media
   */
  getMediaByArtistId(artistId: number): Promise<Media[]> | undefined {
    if (!artistId) {
      return undefined;
    }

    return this.service
      .Medias()
      .query((builder, qMedia) => {
        return this.StandardMediaQuery(builder).filter(
          qMedia.artist_id.eq(artistId)
        );
      })
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param artistName - Artist Name
   * @returns Array of Media
   */
  getMediaByArtistName(artistName: string): Promise<Media[]> | undefined {
    if (artistName === undefined) {
      return undefined;
    }

    return this.service
      .Medias()
      .query((builder, qMedia) => {
        return this.StandardMediaQuery(builder).filter(
          qMedia.artist_name.eq(artistName)
        );
      })
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param title - Media Title
   * @returns Array of Media
   */
  getMediaByTitle(title: string): Promise<Media[]> | undefined {
    if (title === undefined) {
      return undefined;
    }

    return this.service
      .Medias()
      .query((builder, qMedia) => {
        return this.StandardMediaQuery(builder).filter(qMedia.title.eq(title));
      })
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Media search results
   *
   * @param albumId - Album ID
   * @returns Array of Media
   */
  getMediaByAlbum(albumId: number): Promise<Media[]> | undefined {
    if (!albumId) {
      return undefined;
    }

    return this.service
      .Medias()
      .query((builder, qMedia) => {
        return this.StandardMediaQuery(builder).filter(
          qMedia.album_id.eq(albumId)
        );
      })
      .then((media) => {
        const results: Media[] = media.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Album search results
   *
   * @param albumId - Album ID
   * @returns Album
   */
  getAlbum(albumId: number): Promise<Album> | undefined {
    if (!albumId) {
      return undefined;
    }

    return this.service
      .Albums(albumId)
      .query((builder) => {
        return this.StandardAlbumQuery(builder);
      })
      .then((album) => {
        const results: Album = album.data;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Album search results
   *
   * @param albumId - Album ID
   * @returns Array of Albums
   */
  getAlbumByArtist(artistId: number): Promise<Album[]> | undefined {
    if (!artistId) {
      return undefined;
    }

    return this.service
      .Albums()
      .query((builder, qAlbum) => {
        return this.StandardAlbumQuery(builder).filter(
          qAlbum.artist_id.eq(artistId)
        );
      })
      .then((album) => {
        const results: Album[] = album.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Album search results
   *
   * @param name - Album Name
   * @returns Array of Albums
   */
  getAlbumByName(name: string): Promise<Album[]> | undefined {
    if (name === undefined) {
      return undefined;
    }

    return this.service
      .Albums()
      .query((builder, qAlbum) => {
        return this.StandardAlbumQuery(builder).filter(qAlbum.name.eq(name));
      })
      .then((album) => {
        const results: Album[] = album.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Album search results
   *
   * @param keyword - Search keyword, not uri encoded
   * @returns Array of Albums
   */
  getAlbumByKeyword(keyword: string): Promise<Album[]> | undefined {
    if (keyword === undefined) {
      return undefined;
    }

    return this.service
      .Albums()
      .query(
        (builder) => {
          return this.StandardAlbumQuery(builder);
        },
        {
          params: {
            keyword: "'" + encodeURIComponent(keyword) + "'",
            access_token: this.rhymbaAccessToken,
          },
        }
      )
      .then((album) => {
        const results: Album[] = album.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Artist search results
   *
   * @param artistId - Artist ID
   * @returns Artist
   */
  getArtist(artistId: number): Promise<Artist> | undefined {
    if (!artistId) {
      return undefined;
    }

    return this.service
      .Artists(artistId)
      .query((builder) => {
        return this.StandardArtistQuery(builder);
      })
      .then((artist) => {
        const results: Artist = artist.data;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Artist search results
   *
   * @param name - Artist Name
   * @returns Array of Artists
   */
  getArtistNyName(name: string): Promise<Artist[]> | undefined {
    if (name === undefined) {
      return undefined;
    }

    return this.service
      .Artists()
      .query((builder, qArtist) => {
        return this.StandardArtistQuery(builder).filter(qArtist.name.eq(name));
      })
      .then((artist) => {
        const results: Artist[] = artist.data.value;
        return Promise.resolve(results);
      });
  }

  /**
   * Returns Artist search results
   *
   * @param keyword - Search keyword, not uri encoded
   * @returns Array of Artists
   */
  getArtistByKeyword(keyword: string): Promise<Artist[]> | undefined {
    if (keyword === undefined) {
      return undefined;
    }

    return this.service
      .Artists()
      .query(
        (builder) => {
          return this.StandardArtistQuery(builder);
        },
        {
          params: {
            keyword: "'" + encodeURIComponent(keyword) + "'",
            access_token: this.rhymbaAccessToken,
          },
        }
      )
      .then((artist) => {
        const results: Artist[] = artist.data.value;
        return Promise.resolve(results);
      });
  }
}
