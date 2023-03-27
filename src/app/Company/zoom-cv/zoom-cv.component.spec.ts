import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomCVComponent } from './zoom-cv.component';

describe('ZoomCVComponent', () => {
  let component: ZoomCVComponent;
  let fixture: ComponentFixture<ZoomCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
