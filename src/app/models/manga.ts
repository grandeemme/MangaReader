

export interface MangaList {
  end: number;
  manga: Array<Manga>;
}
// image (im), title (t), ID (i),
// alias (a), status (s), category (c),
// last chapter date (ld), hits (h)
export interface Manga {
  a: string;
  c: Array<string>;
  h: number;
  i: string;
  im: string;
  ld: Date;
  s: number;
  t: string;
}

export interface MangaInfo {
  aka: Array<string>;
  "aka-alias": Array<string>;
  alias: string;
  artist: string;
  artist_kw: Array<string>;
  author: string;
  author_kw: Array<string>;
  categories: Array<string>;
  chapters: Array<Array<string>>;
}

export interface Chapter {
  images: Array<Array<string>>;
}
