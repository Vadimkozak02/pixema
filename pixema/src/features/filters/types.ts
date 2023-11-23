export type FilterRequest = {
  order: string;
  keyword: string;
  ratingFrom: number;
  ratingTo: number;
  yearFrom: number;
  yearTo: number;
};

export type FilterResponse = {
  total: number;
  totalPages: number;
  items: Array<{
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    countries: [
      {
        country: string;
      }
    ];
    genres: [
      {
        genre: string;
      }
    ];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
  }>;
};
