import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    document.querySelectorAll('.faq-question').forEach((question) => {
      // Use an arrow function to retain the proper 'this' context
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        
        // Toggle between showing and hiding the active panel
        if (answer.classList.contains('collapse')) {
          answer.classList.remove('collapse'); // Show the answer
        } else {
          // Hide all other answers
          document.querySelectorAll('.faq-answer').forEach((item) => {
            item.classList.add('collapse'); // Collapse all answers
          });
          answer.classList.remove('collapse'); // Show the clicked answer
        }
      });
    });
  }
}