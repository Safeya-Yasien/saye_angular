import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerOpportunityComponent } from './volunteer-opportunity/volunteer-opportunity.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'volunteer-opportunity',
    component: VolunteerOpportunityComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'joinus',
    component: JoinusComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
