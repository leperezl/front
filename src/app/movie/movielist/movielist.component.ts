import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../movie/movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from "../movie";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.css"]
})
export class MovielistComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

movies: Movie[];

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }
  onSelectCreate(): void {
    console.log("navigating ", this.route.toString());
    this.router.navigate([{ outlets: { right: ['detail'] } }], {
      relativeTo: this.route.parent
    });
  }
  
  ngOnInit() {
    this.getMovies();
  }
  
}
