import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeBingoComponent } from './tee-bingo.component';

describe('TeeBingoComponent', () => {
  let component: TeeBingoComponent;
  let fixture: ComponentFixture<TeeBingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeeBingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeeBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
