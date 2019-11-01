import { Component, Injector, OnInit } from '@angular/core';
import { Abstract } from '../helpers/abstract';
import {  MovieResponseModel } from '@movieapp/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'movieapp-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent extends Abstract implements OnInit {
    movie: MovieResponseModel;
    constructor(injector: Injector) {super(injector) }

    ngOnInit() {
        this.route.paramMap.pipe(
            filter(paramMap => paramMap.has('id')),
            map(paramMap => +paramMap.get('id'))
        ).subscribe(id => this.getMovie(id));
    }

    public getMovie(id) {
        this.backend.moviesService.getMovieById(id).subscribe((res: MovieResponseModel) => {
            this.movie = res;
            console.log(this.movie);
        }, err => {
            console.log(err);
        })
    }

}
