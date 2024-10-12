import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var $: any; // To allow the use of jQuery

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // This code runs after the view has initialized, ensuring the DOM is ready for jQuery.
    $(document).ready(function () {
      // Initialize the hero slick slider
      $('.hero-slick').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        arrows: true,
      });
    });
  }
}
