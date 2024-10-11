import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slick',
  standalone: true,
  imports: [],
  templateUrl: './slick.component.html',
  styleUrl: './slick.component.css',
})
export class SlickComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        centerMode: false,
        arrows: false,
      });
    });
    $('.slick-track').css({
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      gap: '50px',
    });
  }
}
