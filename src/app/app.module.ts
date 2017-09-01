import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HackerNewsComponent } from './app.component';
import { HackerNewsService } from './app.service';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
