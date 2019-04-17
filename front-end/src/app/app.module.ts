import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMdModule } from 'ngx-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {
  MatTreeModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { FilmTvPreviewComponent } from './film-tv-preview/film-tv-preview.component';
import { LifePreviewComponent } from './life-preview/life-preview.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, TimelineComponent, HomeComponent, FilmTvPreviewComponent, LifePreviewComponent, PostPreviewComponent, BlogPostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    NgxMdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BlogPostComponent],
})
export class AppModule { }
