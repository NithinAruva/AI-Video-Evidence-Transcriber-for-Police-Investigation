import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent {
  videoFile: File | null = null;
  reportGenerated = true;
  isVideoUploaded = false;
  isLoadingUpload = false;
  isLoadingReport = false;

  constructor(private router: Router) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.videoFile = input.files[0];
    }
  }

  async uploadVideo() {
    if (this.videoFile) {
      const formData = new FormData();
      formData.append('file', this.videoFile);
      this.isLoadingUpload = true;

      try {
        const response = await axios.post('http://localhost:8000/upload-video/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        this.isVideoUploaded = true;
      } catch (error) {
        console.error('Error uploading video:', error);
      } finally {
        this.isLoadingUpload = false;
      }
    }
  }

  async getReport() {
    if (this.isVideoUploaded) {
      this.isLoadingReport = true;

      try {
        const response = await axios.get('http://localhost:8000/get-report/', {
          responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'report.pdf';
        link.click();

        window.URL.revokeObjectURL(pdfUrl);

        this.reportGenerated = true;
        try {
          const response = await axios.post('http://localhost:8000/vector-indexing/');
        } catch (error) {
          console.error('Error uploading video:', error);
        }
      } catch (error) {
        alert("Error generating report, Please try again later");
        console.error('Error generating report:', error);
      } finally {
        this.isLoadingReport = false;
      }
    }
  }

  // Navigate to the chat route
  startChat() {
    this.router.navigate(['/query']);
  }
}
