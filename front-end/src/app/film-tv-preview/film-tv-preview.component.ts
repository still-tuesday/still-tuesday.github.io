import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-tv-preview',
  templateUrl: './film-tv-preview.component.html',
  styleUrls: ['./film-tv-preview.component.scss']
})
export class FilmTvPreviewComponent implements OnInit {
  @Input() pictureFirst: boolean;

  constructor() { }

  ngOnInit() {
  }

}
