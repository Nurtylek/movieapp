import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackendModule } from '@movieapp/backend';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@movieapp/shared';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';


@NgModule({
    declarations: [
        AppComponent,
        MovieListComponent,
        MovieDetailComponent,
        MovieSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BackendModule.forRoot({apiUrl: environment.apiUrl}),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
