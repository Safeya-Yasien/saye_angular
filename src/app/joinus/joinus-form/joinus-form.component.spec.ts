import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinusFormComponent } from './joinus-form.component';

describe('JoinusFormComponent', () => {
  let component: JoinusFormComponent;
  let fixture: ComponentFixture<JoinusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinusFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
