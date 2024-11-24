import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdidenceComponentComponent } from './resdidence-component.component';

describe('ResdidenceComponentComponent', () => {
  let component: ResdidenceComponentComponent;
  let fixture: ComponentFixture<ResdidenceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResdidenceComponentComponent]
    });
    fixture = TestBed.createComponent(ResdidenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
