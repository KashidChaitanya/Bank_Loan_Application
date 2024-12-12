import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicatioListComponent } from './applicatio-list.component';

describe('ApplicatioListComponent', () => {
  let component: ApplicatioListComponent;
  let fixture: ComponentFixture<ApplicatioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicatioListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicatioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
