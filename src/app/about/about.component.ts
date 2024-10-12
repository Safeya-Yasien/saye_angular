import { Component } from '@angular/core';
import { MissionComponent } from './mission/mission.component';
import { ServicesComponent } from './services/services.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [MissionComponent, ServicesComponent, HistoryComponent],
})
export class AboutComponent {}
