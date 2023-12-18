import { RhymbaService } from '../src/build/rhymba/RhymbaService';
import o2tsConfig from '../odata2ts.config';
import { FetchClient } from '@odata2ts/http-client-fetch';

describe('Rhymba Tests', () => {
  test.todo('mock FetchClient, add additional tests');
  // comment out test, as FetchClient test fails on older Node versions
  /*
  const BASE_URL = o2tsConfig.services!['rhymba'].sourceUrl!;
  const access_token = '';
  const client = new FetchClient({
    params: { access_token: access_token },
  });
  const rhymbaService = new RhymbaService(client, BASE_URL);

  test(
    'query media',
    async () => {
      const response = await rhymbaService.Medias().query((builder, qMedia) => {
        return builder
          .select('id')
          .select('title')
          .select('geos')
          .filter(qMedia.artist_name.eq('Crystal Valenzuela'))
          .expand('geos')
          .top(4);
      });
      expect(response.data.value.length).toBe(4);
    },
    5 * 1000
  );

  test(
    'keyword',
    async () => {
      const response = await rhymbaService.Medias().query(
        (builder, qMedia) => {
          return builder
            .select('id')
            .select('title')
            .filter(qMedia.artist_name.eq('Crystal Valenzuela'))
            .top(4);
        },
        { params: { keyword: "'spin'", access_token: access_token } }
      );
      expect(response.data.value.length).toBe(2);
    },
    60 * 1000
  );
  */
});
