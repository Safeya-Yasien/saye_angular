import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements AfterViewInit {
  isDetailsModalVisible = false;
  isRegistrationModalVisible = false;
  isSuccessModalVisible = false;
  modalText = '';

  ngAfterViewInit() {
    AOS.init();
  }

  openModal(cardId: number) {
    this.isDetailsModalVisible = true;

    if (cardId === 1) {
      this.modalText = `
        <strong>حملة التبرع بالدم </strong><br><br>
        <ul>
          <li>التاريخ: الجمعة 25 أكتوبر 2024</li>
          <li>المكان: مركز التبرع بالدم، القاهرة</li>
          <li>الهدف: جمع 200 كيس دم لدعم مرضى السرطان والحالات الطارئة</li>
        </ul>
        <p>"ساهم في إنقاذ الأرواح من خلال تبرعك بالدم. كل كيس دم يمكن أن ينقذ حياة شخص محتاج"</p>
      `;
    } else if (cardId === 2) {
      this.modalText = `
        <strong>حملة تشجير </strong><br><br>
        <ul>
          <li>التاريخ: حتى نهاية نوفمبر 2024</li>
          <li>المكان: مختلف أنحاء الجيزة</li>
          <li>الهدف: زراعة 500 شجرة للحفاظ على البيئة</li>
        </ul>
        <p>"التطوع مفتوح للجميع! انضم إلينا وساهم في جعل البيئة أكثر خضارًا وجمالاً"</p>
      `;
    } else if (cardId === 3) {
      this.modalText = `
        <strong>مشروع محو الأمية</strong><br><br>
        <ul>
          <li>التاريخ: كل يوم جمعة</li>
          <li>المكان: مراكز تعليم الكبار في القاهرة</li>
          <li>الهدف: تمكين الكبار من القراءة والكتابة من خلال جلسات تعليمية فردية وجماعية</li>
        </ul>
        <p>"ساعد في تمكين الأشخاص من اكتساب مهارات القراءة والكتابة والمساهمة في تحسين حياتهم"</p>
      `;
    }
  }

  closeModal() {
    this.isDetailsModalVisible = false;
    this.isRegistrationModalVisible = false;
    this.isSuccessModalVisible = false;
  }

  openRegistrationModal() {
    this.isRegistrationModalVisible = true;
    this.isDetailsModalVisible = false;
  }

  closeRegistrationModal() {
    this.isRegistrationModalVisible = false;
  }

  openSuccessModal() {
    this.isSuccessModalVisible = true;
  }

  closeSuccessModal() {
    this.isSuccessModalVisible = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.closeRegistrationModal();
    this.openSuccessModal();
  }
}
