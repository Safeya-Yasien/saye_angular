import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import $ from 'jquery'; // Import jQuery

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected here
})
export class RegisterComponent implements AfterViewInit, OnDestroy { // Implement AfterViewInit and OnDestroy

  ngAfterViewInit() {
    // jQuery code without document ready
    this.setupEventListeners();
  }

  setupEventListeners() {
    // click on next button
    $('.form-wizard-next-btn').click((event) => {
      const parentFieldset = $(event.currentTarget).parents('.wizard-fieldset');
      const currentActiveStep = $(event.currentTarget).parents('.form-wizard').find('.form-wizard-steps .active');
      const next = $(event.currentTarget);
      let nextWizardStep = true;

      parentFieldset.find('.wizard-required').each(function() {
        const thisValue = $(this).val();

        if (thisValue === "") {
          $(this).siblings(".wizard-form-error").slideDown();
          nextWizardStep = false;
        } else {
          $(this).siblings(".wizard-form-error").slideUp();
        }
      });

      if (nextWizardStep) {
        // Handle step transition logic here
        parentFieldset.removeClass("show").fadeOut(400);
        currentActiveStep.removeClass('active').addClass('activated').next().addClass('active'); // Fixed here
        parentFieldset.next('.wizard-fieldset').addClass("show").fadeIn(400);
      }
    });

    // click on previous button
    $('.form-wizard-previous-btn').click((event) => {
      const prev = $(event.currentTarget);
      const currentActiveStep = prev.parents('.form-wizard').find('.form-wizard-steps .active');

      prev.parents('.wizard-fieldset').removeClass("show").fadeOut(400);
      prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show").fadeIn(400);
      currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active'); // Fixed here
    });

    // click on form submit button
    $(document).on("click", ".form-wizard .form-wizard-submit", function() {
      const parentFieldset = $(this).parents('.wizard-fieldset');
      parentFieldset.find('.wizard-required').each(function() {
        const thisValue = $(this).val();
        if (thisValue === "") {
          $(this).siblings(".wizard-form-error").slideDown();
        } else {
          $(this).siblings(".wizard-form-error").slideUp();
        }
      });
    });

    // Focus on input field check empty or not
    $(".form-control").on('focus', function() {
      const tmpThis = $(this).val();
      $(this).parent().addClass("focus-input");
    }).on('blur', function() {
      const tmpThis = $(this).val();
      if (tmpThis === '') {
        $(this).parent().removeClass("focus-input");
        $(this).siblings('.wizard-form-error').slideDown("3000");
      } else {
        $(this).parent().addClass("focus-input");
        $(this).siblings('.wizard-form-error').slideUp("3000");
      }
    });

    // Submission alert
    $('.form-wizard-submit').on('click', function(event) {
      event.preventDefault();
      alert('تم التسجيل بنجاح!');
    });
  }

  ngOnDestroy() {
    // Cleanup any jQuery event listeners
    $(document).off("click", ".form-wizard .form-wizard-submit");
    $('.form-wizard-next-btn').off('click');
    $('.form-wizard-previous-btn').off('click');
  }
}
