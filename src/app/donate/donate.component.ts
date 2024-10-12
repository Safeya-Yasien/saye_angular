import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { DonateFormComponent } from './donate-form/donate-form.component';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [LandingComponent, DonateFormComponent],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

}
