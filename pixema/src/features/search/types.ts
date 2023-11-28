export type SearchResponse = {
  keyword: string;
  pagesCount: number;
  films: Array<{
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: [
      {
        country: string;
      },
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
      },
      {
        genre: string;
      }
    ];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
  }>;
  searchFilmsCountResult: number;
};

export type SearchResponseFilms = {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
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
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
};

export type SearchRequest = {
  search: string;
  page: number;
};
