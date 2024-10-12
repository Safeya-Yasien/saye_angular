import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { JoinusFormComponent } from './joinus-form/joinus-form.component';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [LandingComponent, FeaturesComponent,JoinusFormComponent, FaqComponent],
  templateUrl: './joinus.component.html',
  styleUrl: './joinus.component.css'
})
export class JoinusComponent {

}
