import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerOpportunityComponent } from './volunteer-opportunity.component';

describe('VolunteerOpportunityComponent', () => {
  let component: VolunteerOpportunityComponent;
  let fixture: ComponentFixture<VolunteerOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerOpportunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
