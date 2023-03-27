import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserDetailsComponent } from './business-user-details.component';

describe('BusinessUserDetailsComponent', () => {
  let component: BusinessUserDetailsComponent;
  let fixture: ComponentFixture<BusinessUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
