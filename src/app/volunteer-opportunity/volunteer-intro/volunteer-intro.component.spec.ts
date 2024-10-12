import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerIntroComponent } from './volunteer-intro.component';

describe('VolunteerIntroComponent', () => {
  let component: VolunteerIntroComponent;
  let fixture: ComponentFixture<VolunteerIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
