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
