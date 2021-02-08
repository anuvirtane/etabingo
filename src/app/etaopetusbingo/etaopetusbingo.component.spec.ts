import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaopetusbingoComponent } from './etaopetusbingo.component';

describe('EtaopetusbingoComponent', () => {
  let component: EtaopetusbingoComponent;
  let fixture: ComponentFixture<EtaopetusbingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaopetusbingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaopetusbingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
