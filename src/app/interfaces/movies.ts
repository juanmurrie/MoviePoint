import { Genres } from "./genres";

export interface movies {
    adult:             boolean;
    backdrop_path:     null | string;
    genres:            Genres[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date:      string;
    runtime:           number;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    homepage:          string;
}