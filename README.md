# Rhymba API SDK

Typescript SDK for VL Group's Rhymba API.

[![npm package](https://img.shields.io/badge/npm%20i-@vlgroup/rhymba--typescript--sdk-brightgreen)](https://www.npmjs.com/package/@vlgroup/rhymba-typescript-sdk) [![version number](https://img.shields.io/npm/v/@vlgroup/rhymba-typescript-sdk?color=green&label=version)](https://github.com/vlgroup/rhymba-typescript-sdk/releases) [![Actions Status](https://github.com/vlgroup/rhymba-typescript-sdk/workflows/Test/badge.svg)](https://github.com/vlgroup/rhymba-typescript-sdk/actions) [![License](https://img.shields.io/github/license/vlgroup/rhymba-typescript-sdk)](https://github.com/vlgroup/rhymba-typescript-sdk/blob/main/LICENSE)

It uses npm, TypeScript compiler, Jest, webpack, ESLint, Prettier, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

#Documentation
[General instructions](https://documentation.vlgroup.com/) for the Rhymba API.

Sign Up for the [Rhymba API](https://rhymbamanager.vlgroup.com/APISignup) to get an Access Token.

Use prebuilt functions to quickly request data.

```typescript
const search = new Search(accessToken);
const media = search.getMediaByArtistName('Elvis');
```

Use OData functions to request exactly the data and properties you need.

```typescript
const search = new Search(accessToken);
const media = search.service.Medias(mediaId).query((builder) => {
  return builder
    .select('id')
    .select('name')
    .select('artist_id')
    .select('artist_name')
    .top(25);
});
```

Get a url for a Preview MP3

```typescript
const preview = new Preview(accessToken);
const url = preview.getPreviewUrl(mediaId);
```

Get an Album Cover url

```typescript
const images = new Images();
const url = images.getAlbumCover(albumId);
```

Search by Keyword

```typescript
const search = new Search(accessToken);
const media = search.getMediaByKeyword('love');
```

Build your own search using Keyword

```typescript
const search = new Search(accessToken);
const media = search.service.Medias(mediaId).query(
  (builder) => {
    return builder
      .select('id')
      .select('name')
      .select('artist_id')
      .select('artist_name')
      .top(25);
  },
  {
    params: {
      keyword: "'" + encodeURIComponent(keyword) + "'",
      access_token: accessToken
    }
  }
);
```

Return multiple results by Media ID (id_cdl)

```typescript
const search = new Search(accessToken);
const media = search.getMediaByIdCdl([mediaId1, mediaId2]);
```

Build your own search using id_cdl

```typescript
const id_cdl = [mediaId1, mediaId2];
const search = new Search(accessToken);
const media = search.service.Medias(mediaId).query(
  (builder) => {
    return builder
      .select('id')
      .select('name')
      .select('artist_id')
      .select('artist_name')
      .top(25);
  },
  {
    params: {
      id_cdl: "'" + JSON.stringify(id_cdl) + "'",
      access_token: accessToken
    }
  }
);
```
