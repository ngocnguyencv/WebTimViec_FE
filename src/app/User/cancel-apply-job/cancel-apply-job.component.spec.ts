import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelApplyJobComponent } from './cancel-apply-job.component';

describe('CancelApplyJobComponent', () => {
  let component: CancelApplyJobComponent;
  let fixture: ComponentFixture<CancelApplyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelApplyJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelApplyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
