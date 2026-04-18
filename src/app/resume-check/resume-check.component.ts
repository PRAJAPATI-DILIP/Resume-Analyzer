import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-check.component.html',
  styleUrls: ['./resume-check.component.css']
})
export class ResumeCheckComponent {

  selectedFile: File | null = null;
  fileName: string = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileName = file.name;
    }
  }

  uploadFile() {
    if (!this.selectedFile) {
      alert("Please select a file first!");
      return;
    }

    console.log("Uploading:", this.selectedFile);
  }
}