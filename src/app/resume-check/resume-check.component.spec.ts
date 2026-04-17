import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCheckComponent } from './resume-check.component';

describe('ResumeCheckComponent', () => {
  let component: ResumeCheckComponent;
  let fixture: ComponentFixture<ResumeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
