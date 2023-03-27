import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewComponent } from './show-new.component';

describe('ShowNewComponent', () => {
  let component: ShowNewComponent;
  let fixture: ComponentFixture<ShowNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

