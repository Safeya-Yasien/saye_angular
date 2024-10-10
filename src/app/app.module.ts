import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component'; // Import AppComponent
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    AboutComponent, // Import AppComponent here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
