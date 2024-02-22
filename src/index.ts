import { FetchClient } from '@odata2ts/http-client-fetch';
import { ODataQueryBuilderV4 } from '@odata2ts/odata-query-builder';
import o2tsConfig from '../odata2ts.config';
import { RhymbaService } from './build/rhymba/RhymbaService';
import { Album, Artist, Media } from './build/rhymba/RhymbaModel';
import { QAlbum, QArtist, QMedia } from './build/rhymba/QRhymba';

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
    
export enum ScalingType {
    NoScaling = 0,
    InsideBoundingBox = 1,
    OverflowBoundingBox = 2
  }
  
  export enum CroppingType {
    NoCropping = 10,
    SmartCrop = 11,
    Centered = 12,
    TopCenter = 13,
    TopLeft = 14,
    TopRight = 15,
    BottomCenter = 16,
    BottomLeft = 17,
    BottomRight = 18
  }
  
  export interface ReflectionProperties {
    reflectionPercent: number;
    clippingPercent: number;
    alpha: number;
    angle: number;
    gap: number;
  }
  
  export class Images {
    private imageBankUrl = 'https://ib3-lb.mcnemanager.com';
  
    constructor() {}
  
    /**
     * Returns the URL for an Album Cover
     *
     * @param albumId - the ID of the Album
     * @param width - optional width to scale to
     * @param height - optional height to scale to
     * @param scaling - how to scale the image
     * @param cropping - how to crop the image
     * @param reflection - reflection properties
     * @param default404 - return 404 if image doesn't exist? Defaults to false
     * @param defaultFileName - default file to return if image doesn't exist, must be set up on server
     * @returns a link to the the Album cover image
     */
  
    getAlbumCover(
      albumId: string,
      width?: number,
      height?: number,
      scaling?: ScalingType,
      cropping?: CroppingType,
      reflection?: ReflectionProperties,
      default404?: boolean,
      defaultFileName?: string
    ): string | undefined {
      if (albumId === undefined) {
        return undefined;
      }
      default404 = default404 ?? false;
  
      var outUrl = this.imageBankUrl + '/';
      if (scaling !== undefined) {
        outUrl += 'scl/' + scaling + '/';
      }
      if (cropping !== undefined) {
        outUrl += 'crp/' + cropping + '/';
      }
      if (width !== undefined && height !== undefined) {
        outUrl += 'sz/' + width + '/' + height + '/';
      }
      // rfl/0/30/45/2/20
      // Percent Reflection / Clipping Percent / Alpha / Angle / Gap.
      if (
        reflection !== undefined &&
        reflection.reflectionPercent !== undefined &&
        reflection.clippingPercent !== undefined &&
        reflection.alpha !== undefined &&
        reflection.angle !== undefined &&
        reflection.gap !== undefined
      ) {
        outUrl +=
          'rfl/' +
          reflection.reflectionPercent +
          '/' +
          reflection.clippingPercent +
          '/' +
          reflection.alpha +
          '/' +
          reflection.angle +
          '/' +
          reflection.gap +
          '/';
      }
      outUrl += albumId + '.cover';
      if (default404) {
        outUrl += '?dflt=404';
      } else if (defaultFileName !== undefined) {
        outUrl += '?dflt=' + defaultFileName;
      }
  
      return outUrl;
    }

    getArtistImage(
        artistId: string,
        width?: number,
        height?: number,
        scaling?: ScalingType,
        cropping?: CroppingType,
        reflection?: ReflectionProperties,
        default404?: boolean,
        defaultFileName?: string
      ): string | undefined {
        if (artistId === undefined) {
          return undefined;
        }
        default404 = default404 ?? false;
    
        var outUrl = this.imageBankUrl + '/';
        if (scaling !== undefined) {
          outUrl += 'scl/' + scaling + '/';
        }
        if (cropping !== undefined) {
          outUrl += 'crp/' + cropping + '/';
        }
        if (width !== undefined && height !== undefined) {
          outUrl += 'sz/' + width + '/' + height + '/';
        }
        // rfl/0/30/45/2/20
        // Percent Reflection / Clipping Percent / Alpha / Angle / Gap.
        if (
          reflection !== undefined &&
          reflection.reflectionPercent !== undefined &&
          reflection.clippingPercent !== undefined &&
          reflection.alpha !== undefined &&
          reflection.angle !== undefined &&
          reflection.gap !== undefined
        ) {
          outUrl +=
            'rfl/' +
            reflection.reflectionPercent +
            '/' +
            reflection.clippingPercent +
            '/' +
            reflection.alpha +
            '/' +
            reflection.angle +
            '/' +
            reflection.gap +
            '/';
        }
        outUrl += artistId + '.artist';
        if (default404) {
          outUrl += '?dflt=404';
        } else if (defaultFileName !== undefined) {
          outUrl += '?dflt=' + defaultFileName;
        }
    
        return outUrl;
      }
    }
  }
  
  export class Preview {
    private rhymbaUrl = 'https://dispatch.mcnemanager.com/current/preview';
    private rhymbaAccessToken: string;
  
    constructor(accessToken: string) {
      this.rhymbaAccessToken = accessToken;
    }
  
    /**
     * Returns the URL for a preview mp3
     *
     * @param mediaId - the ID of the Media to preview
     * @param filename - filename for the preview file, defaults to Media ID
     * @param suid - Stream User ID, optional value for reporting
     * @param luid - Listener User ID, optional value for reporting
     * @param https - return https link, defaults to true
     * @returns a link to the mp3 preview that can be played
     */
  
    getPreviewUrl(
      mediaId: string,
      filename?: string,
      suid?: string,
      luid?: string,
      https?: boolean
    ): string | undefined {
      if (mediaId === undefined) {
        return undefined;
      }
  
      filename = filename ?? mediaId + '.mp3';
      https = https ?? true;
  
      var outUrl =
        this.rhymbaUrl +
        '/' +
        mediaId +
        '/' +
        filename +
        '?access_token=' +
        this.rhymbaAccessToken +
        '&https=' +
        https
          ? 'true'
          : 'false';
      if (suid !== undefined) {
        outUrl += '&suid=' + suid;
      }
      if (luid !== undefined) {
        outUrl += '&luid=' + luid;
      }
  
      return outUrl;
    }
  }
  