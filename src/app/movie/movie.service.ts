import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie";
import { MovieDetail } from "./movie-detail";
import { Observable } from "rxjs";

const API_URL = "../../assets/";
const movie = "/films.json";
const moviesDetail= ["film-1.json","film-2.json", "film-3.json","film-4.json", "film-5.json"]

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_URL + movie);
  }
  getMovieDetail(id): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(API_URL + moviesDetail[id - 1]);
  }
}
