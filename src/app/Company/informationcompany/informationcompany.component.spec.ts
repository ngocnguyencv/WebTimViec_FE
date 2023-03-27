import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationcompanyComponent } from './informationcompany.component';

describe('InformationcompanyComponent', () => {
  let component: InformationcompanyComponent;
  let fixture: ComponentFixture<InformationcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
