import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
    providedIn: 'root'
})
export class Backend {

    constructor(public moviesService: MoviesService) { }
}
