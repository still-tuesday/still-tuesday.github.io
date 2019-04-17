import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // templateUrl: '../../assets/blog-posts/film-tv/the-favourite.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pictureURL = 'https://i.imgur.com/iznezNq.jpg';
  postTitle = 'The Favourite';
  postDescription = 'Oh Emma Stone, how I\'ve missed you.';
  postURL = '../../assets/blog-posts/film-tv/the-favourite.md';
  constructor() { }

  ngOnInit() {
  }

}
