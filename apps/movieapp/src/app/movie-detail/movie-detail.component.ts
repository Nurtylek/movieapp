import { Component, Injector, OnInit } from '@angular/core';
import { Abstract } from '../helpers/abstract';
import { Movie } from '@movieapp/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'movieapp-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent extends Abstract implements OnInit {
    movie: Movie;
    movies: Movie[];
    constructor(injector: Injector) {super(injector) }

    ngOnInit() {
        this.route.paramMap.pipe(
            filter(paramMap => paramMap.has('id')),
            map(paramMap => +paramMap.get('id'))
        ).subscribe(id => this.getMovie(id));
    }

    getMovie(id) {
        this.backend.moviesService.getMovieById(id).subscribe((res: Movie) => {
            this.movie = res;
            this.getTheSameGenreMovies();
        }, err => {
            console.error(err);
        })
    }

    // movies with the same genres
    getTheSameGenreMovies() {
        this.backend.moviesService.getMovies(this.movie.genres).subscribe(res => {
            this.movies = res;
            console.log(res);
        })
    }

}
