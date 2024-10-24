import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { CounterAreaComponent } from './counter-area/counter-area.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { VolunteerRegistrationComponent } from './volunteer-registration/volunteer-registration.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutUsComponent,
    EventsComponent,
    CounterAreaComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    VolunteerRegistrationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
