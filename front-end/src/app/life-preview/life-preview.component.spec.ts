import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePreviewComponent } from './life-preview.component';

describe('LifePreviewComponent', () => {
  let component: LifePreviewComponent;
  let fixture: ComponentFixture<LifePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
