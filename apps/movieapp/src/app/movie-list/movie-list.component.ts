import { Component, Injector, OnInit } from '@angular/core';
import { Abstract } from '../helpers/abstract';
import { GenreType, genreType, Movie } from '@movieapp/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'movieapp-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends Abstract implements OnInit {

    movies: Movie[] = [];
    genreTypes = genreType;
    genre: GenreType;

    searchItem: string;

    constructor(injector: Injector) {super(injector) }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.genre = params['genre'];
            this.getMovies(this.genre);
        });
    }

    // this method used to get movie list with filter in server
    public getMovies(genre?: GenreType) {
        this.backend.moviesService.getMovies(genre ? [genre] : []).subscribe(res => {
            this.movies = res;
            console.log(this.movies);
        })
    }
}
