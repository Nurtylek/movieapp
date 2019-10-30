import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackendModule } from '@movieapp/backend';
import { SharedModule } from '@movieapp/shared'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BackendModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
