

import { Component } from '@angular/core';
import { ResumeCheckComponent } from './resume-check/resume-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumeCheckComponent],  // ✅ import here
  template: `<app-resume-check></app-resume-check>`
})
export class AppComponent {}