import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTvPreviewComponent } from './film-tv-preview.component';

describe('FilmTvPreviewComponent', () => {
  let component: FilmTvPreviewComponent;
  let fixture: ComponentFixture<FilmTvPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTvPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTvPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
