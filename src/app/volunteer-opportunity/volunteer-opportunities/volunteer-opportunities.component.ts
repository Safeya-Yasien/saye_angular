import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-opportunities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteer-opportunities.component.html',
  styleUrl: './volunteer-opportunities.component.css',
})
export class VolunteerOpportunitiesComponent {
  opportunities = [
    {
      title: 'مشروع التوعية الصحية',
      description:
        'انضم إلى فريقنا في مشروع التوعية الصحية وتساعد في نشر الوعي حول الصحة والتغذية السليمة.',
    },
    {
      title: 'برنامج التعليم',
      description:
        'ساهم في تحسين مستوى التعليم للأطفال من خلال تقديم الدروس والمساعدة في الواجبات المدرسية.',
    },
    {
      title: 'جمع التبرعات',
      description:
        'ساعدنا في تنظيم فعاليات لجمع التبرعات لدعم مشاريعنا ومبادراتنا المختلفة.',
    },
    {
      title: 'توعية المجتمع',
      description:
        'شارك في تنظيم حملات توعية للمجتمع حول القضايا المهمة وطرق المساهمة في الحلول.',
    },
    {
      title: 'مشروع النظافة العامة',
      description:
        'شارك في جهود تنظيف الأحياء والشوارع لتعزيز الوعي البيئي والحفاظ على النظافة.',
    },
    {
      title: 'دعم كبار السن',
      description:
        'انضم إلى فريقنا لمساعدة كبار السن من خلال تقديم الرعاية والمساعدة في حياتهم اليومية.',
    },
    {
      title: 'حماية البيئة',
      description:
        'ساعد في جهود حماية البيئة من خلال غرس الأشجار والمشاركة في حملات التوعية البيئية.',
    },
    {
      title: 'التدريب المهني',
      description:
        'انضم إلينا لتقديم دورات تدريبية في مجالات مهنية متعددة لتطوير مهارات الشباب.',
    },
    {
      title: 'الدعم النفسي والاجتماعي',
      description:
        'قدم الدعم النفسي والاجتماعي للفئات المحتاجة لمساعدتهم على التغلب على الصعوبات.',
    },
  ];
}
