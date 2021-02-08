import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaheisbingoComponent } from './laheisbingo.component';

describe('LaheisbingoComponent', () => {
  let component: LaheisbingoComponent;
  let fixture: ComponentFixture<LaheisbingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaheisbingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaheisbingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
