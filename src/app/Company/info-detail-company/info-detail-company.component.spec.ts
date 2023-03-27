import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetailCompanyComponent } from './info-detail-company.component';

describe('InfoDetailCompanyComponent', () => {
  let component: InfoDetailCompanyComponent;
  let fixture: ComponentFixture<InfoDetailCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDetailCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDetailCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
