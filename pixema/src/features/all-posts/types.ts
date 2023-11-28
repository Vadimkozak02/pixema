export type AllPostsResponse = {
  Response: boolean;
  Search: Array<{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }>;
  totalResults: string;
};

export type KinopoinskAllPostsResponse = {
  total: number;
  totalPages: number;
  items: Array<{
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: null;
    nameOriginal: string;
    countries: [
      {
        country: string;
      }
    ];
    genres: [
      {
        genre: string;
      },
      {
        genre: string;
      }
    ];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: number;
    posterUrl: string;
    posterUrlPreview: string;
  }>;
};

export type allPostsItem = Array<{
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: null;
  nameOriginal: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    },
    {
      genre: string;
    }
  ];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: number;
  posterUrl: string;
  posterUrlPreview: string;
}>;
