import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MovieListComponent
    },
    {
        path: 'movie/:id',
        component: MovieDetailComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
