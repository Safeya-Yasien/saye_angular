import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerBenefitsComponent } from './volunteer-benefits.component';

describe('VolunteerBenefitsComponent', () => {
  let component: VolunteerBenefitsComponent;
  let fixture: ComponentFixture<VolunteerBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
