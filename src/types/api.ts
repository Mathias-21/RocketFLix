export interface Movies {
  page: number;
  results: MoviesResult[];
  total_pages: number;
  total_results: number;
}

export interface MoviesResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<Number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Series {
  page: number;
  results: SeriesResult[];
  total_pages: number;
  total_results: number;
}

export interface SeriesResult {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
