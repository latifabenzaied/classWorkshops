import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppatmentComponent } from './appatment.component';

describe('AppatmentComponent', () => {
  let component: AppatmentComponent;
  let fixture: ComponentFixture<AppatmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppatmentComponent]
    });
    fixture = TestBed.createComponent(AppatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
