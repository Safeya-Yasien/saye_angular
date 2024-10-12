import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-donate-form',
  standalone: true,
  imports: [],
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css'],
})
export class DonateFormComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const onceBtn = this.elementRef.nativeElement.querySelector('#onceBtn');
    const monthlyBtn =
      this.elementRef.nativeElement.querySelector('#monthlyBtn');
    const donationForm =
      this.elementRef.nativeElement.querySelector('#donationForm');

    onceBtn.addEventListener('click', function () {
      onceBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
    });

    monthlyBtn.addEventListener('click', function () {
      monthlyBtn.classList.add('active');
      onceBtn.classList.remove('active');
    });

    // Update donation amount based on selected radio button or custom input
    const donationAmountRadios =
      this.elementRef.nativeElement.querySelectorAll('.donation-amount');
    const amountInput =
      this.elementRef.nativeElement.querySelector('#amountInput');

    donationAmountRadios.forEach((radio: HTMLInputElement) => {
      radio.addEventListener('change', function () {
        if (radio.checked) {
          amountInput.value = radio.value;
        }
      });
    });

    // Form validation and submission
    donationForm.addEventListener('submit', (event: Event) => {
      // Prevent form submission if inputs are invalid
      if (!donationForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      donationForm.classList.add('was-validated');
    });

    // Real-time validation for phone and email
    const emailInput = this.elementRef.nativeElement.querySelector('#email');
    const phoneInput = this.elementRef.nativeElement.querySelector('#phone');

    emailInput.addEventListener('input', function () {
      if (!emailInput.validity.valid) {
        emailInput.setCustomValidity('يرجى إدخال بريد إلكتروني صحيح.');
      } else {
        emailInput.setCustomValidity('');
      }
    });

    phoneInput.addEventListener('input', function () {
      if (!/^\d+$/.test(phoneInput.value)) {
        phoneInput.setCustomValidity('يرجى إدخال رقم هاتف صحيح.');
      } else {
        phoneInput.setCustomValidity('');
      }
    });

    const companies: string[] = [];
    const companySelect =
      this.elementRef.nativeElement.querySelector('#company');

    companies.forEach((company: string) => {
      const option = document.createElement('option');
      option.value = company.toLowerCase().replace(/\s+/g, '-');
      option.textContent = company;
      companySelect.appendChild(option);
    });
  }
}
