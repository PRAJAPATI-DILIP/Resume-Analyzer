import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-check.component.html',
  styleUrls: ['./resume-check.component.css']
})
export class ResumeCheckComponent {

  // 🔹 State variables
  selectedFile!: File;
  message: string = '';

  score: number = 0;
  feedback: string = '';
  skills: string[] = [];

  isLoading: boolean = false;

  constructor(private api: ApiService) {}

  // 🔹 File selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // 🔹 Upload resume
  upload() {
    if (!this.selectedFile) {
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.isLoading = true;
    this.message = "Analyzing resume...";

    this.api.uploadFile(formData).subscribe({
      next: (res: any) => {
        console.log("API RESPONSE 👉", res);

        this.message = "Uploaded: " + (res.filename || "No name");
        this.score = res.score ?? 0;
        this.feedback = res.feedback ?? "No feedback available";
        this.skills = res.skills ?? [];

        this.isLoading = false;
      },
      error: (err) => {
        //console.error(err);
        alert("Upload failed. Try again.");
        this.isLoading = false;
      }
    });
  }

  // 🔹 Download PDF report
  downloadReport() {
    const doc = new jsPDF();

    // 🔸 Watermark
    doc.setTextColor(200);
    doc.setFontSize(40);
    doc.text('Resume Analyzer', 30, 140, { angle: 45 });

    // 🔸 Reset color
    doc.setTextColor(0);

    // 🔸 Title
    doc.setFontSize(18);
    doc.text('Resume Analysis Report', 20, 20);

    // 🔸 Date
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);

    // 🔸 Score
    doc.setFontSize(14);
    doc.text(`Score: ${this.score}/100`, 20, 50);

    // 🔸 Feedback
    doc.setFontSize(12);
    doc.text('Feedback:', 20, 70);

    const feedbackLines = doc.splitTextToSize(this.feedback, 170);
    doc.text(feedbackLines, 20, 80);

    // 🔸 Skills
    let y = 80 + feedbackLines.length * 10 + 10;

    doc.text('Skills Found:', 20, y);
    y += 10;

    this.skills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill}`, 25, y);
      y += 8;

      // 🔥 Prevent overflow to next page
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('resume_report.pdf');
  }
}