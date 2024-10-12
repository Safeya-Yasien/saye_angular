import { Component } from '@angular/core';
import { VolunteerIntroComponent } from './volunteer-intro/volunteer-intro.component';
import { VolunteerOpportunitiesComponent } from './volunteer-opportunities/volunteer-opportunities.component';
import { VolunteerBenefitsComponent } from './volunteer-benefits/volunteer-benefits.component';

@Component({
  selector: 'app-volunteer-opportunity',
  standalone: true,
  imports: [VolunteerIntroComponent, VolunteerOpportunitiesComponent, VolunteerBenefitsComponent],
  templateUrl: './volunteer-opportunity.component.html',
  styleUrl: './volunteer-opportunity.component.css'
  
})
export class VolunteerOpportunityComponent {

}
