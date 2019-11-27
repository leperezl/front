import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MovieService } from './movie.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        
  ],
  declarations: [MovielistComponent, MoviedetailComponent],
  providers: [MovieService]
  , exports: [MovielistComponent, MoviedetailComponent]
})
export class MovieModule { }