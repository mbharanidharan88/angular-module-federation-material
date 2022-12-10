import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupModule } from './setup/setup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SetupModule,
    AppRoutingModule
  ],
  exports: [
    SetupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }