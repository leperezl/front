import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../movie/movie.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from "../movie";
import { MovieDetail } from "../movie-detail";

@Component({
  selector: "app-moviedetail",
  templateUrl: "./moviedetail.component.html",
  styleUrls: ["./moviedetail.component.css"]
})
export class MoviedetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  movie: Movie;

  movieDetail: MovieDetail;

  getMovie() {
    this.movieService
      .getMovie()
      .subscribe(moviesRet => (this.movie = moviesRet));
  }
  movie_id: number;

  loader: any;
  getMovieDetail() {
    this.movieService.getMovieDetail(this.movie_id).subscribe(o => {
      this.movieDetail = o;
    });
  }
  onLoad(params) {
    this.movie_id = parseInt(params["id"]);
    console.log(" en detail " + this.movie_id);
    this.movieDetail = new MovieDetail();
    this.getMovieDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
