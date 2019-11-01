import { Component, Injector, OnInit } from '@angular/core';
import { Abstract } from '../helpers/abstract';
import { MovieResponseModel } from '@movieapp/core';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'movieapp-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends Abstract implements OnInit {
    movies: MovieResponseModel[] = [];
    genres: string[] = [
        "action",
        "adventure",
        "biography",
        "comedy",
        "crime",
        "drama",
        "history",
        "mystery",
        "scifi",
        "sport",
        "thriller"
    ];
    constructor(injector: Injector) {super(injector) }

    ngOnInit() {
        this.getMovies();
    }

    public getMovies() {
        this.backend.moviesService.getMovies().subscribe(res => {
            this.movies = res;
        })
    }


    public getMovieWithSimilarGenre(genre: string) {
        this.backend.moviesService.getMovies().subscribe(res => {

            this.movies = res.filter(i => i.genres.some(el => el === genre))
            console.log(this.movies);
        });
    }
}
