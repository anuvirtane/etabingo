import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkuComponent } from './alku.component';

describe('AlkuComponent', () => {
  let component: AlkuComponent;
  let fixture: ComponentFixture<AlkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
