import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCVComponent } from './show-cv.component';

describe('ShowCVComponent', () => {
  let component: ShowCVComponent;
  let fixture: ComponentFixture<ShowCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
