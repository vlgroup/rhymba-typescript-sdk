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
