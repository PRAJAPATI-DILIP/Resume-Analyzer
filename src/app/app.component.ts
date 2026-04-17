import { Component } from '@angular/core';
import { ResumeCheckComponent } from './resume-check/resume-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumeCheckComponent],  // ✅ ADD HERE
  templateUrl: './app.component.html',
})
export class AppComponent {}