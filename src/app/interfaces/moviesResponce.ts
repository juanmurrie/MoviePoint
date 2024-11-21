import { movies } from "./movies";

export interface moviesResponce {
    page:          number;
    results:       movies[];
    total_pages:   number;
    total_results: number;
}