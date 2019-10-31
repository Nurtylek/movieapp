import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL, MoviesService } from './services/movies.service';
import { Backend } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class BackendModule {
    public static forRoot(config: {apiUrl: string}): ModuleWithProviders {
        return {
            ngModule: BackendModule,
            providers: [
                {
                    provide: API_URL,
                    useValue: config.apiUrl
                },
                {
                    provide: Backend,
                    useClass: Backend,
                    deps: [
                        MoviesService
                    ]
                }
            ]
        }
    }
}
