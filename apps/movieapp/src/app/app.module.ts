import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackendModule } from '@movieapp/backend';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BackendModule.forRoot({apiUrl: environment.apiUrl})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
