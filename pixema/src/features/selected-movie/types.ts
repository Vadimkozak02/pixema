export type SelectedMovieResponse = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    { Sourse: string; Value: string },
    { Sourse: string; Value: string },
    { Sourse: string; Value: string }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type SelectedKinopoiskMovieReesponse = {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: null;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: null;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: null;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: null;
  isTicketsAvailable: boolean;
  productionStatus: null;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
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
    }
  ];
  startYear: null;
  endYear: null;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
};

export type ReleasesOfSelectedMovie = {
  total: number;
  items: [
    {
      type: string;
      subType: null;
      date: string;
      reRelease: boolean;
      country: {
        country: string;
      };
      companies: [];
    }
  ];
};

export type BoxOfficeOfMovie = {
  total: number;
  items: [
    {
      type: string;
      amount: number;
      currencyCode: string;
      name: string;
      symbol: string;
    }
  ];
};

export type StaffOfMovie = {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: null;
  posterUrl: string;
  professionText: string;
  professionKey: string;
};
