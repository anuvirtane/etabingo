import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmaBingoComponent } from './oma-bingo.component';

describe('OmaBingoComponent', () => {
  let component: OmaBingoComponent;
  let fixture: ComponentFixture<OmaBingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmaBingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmaBingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
